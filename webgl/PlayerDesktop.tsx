import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'

import usePlayerControls from '../hooks/usePlayerControls'
import useStore from '../helpers/store'

const PlayerDesktop = (props: any) => {

  const { camera } = useThree()
  const { forward, backward, right, left, speed } = usePlayerControls()
  const joystickDistance: number = useStore((s) => s.joystickDistance)
  const joystickAngle: number = useStore((s) => s.joystickAngle)
  const playerInitialPosition = useStore((s) => s.playerInitialPosition)

  // ------------- Start position ------------- 
  const defaultPosition = [-7, 2, 17];

  const [ref, api]: any = useSphere(() => ({
    mass: 500,
    type: 'Dynamic',
    position: playerInitialPosition[0] == 999 ? defaultPosition : playerInitialPosition,
    rotation: [0, 0, Math.PI / 2],
    args: [0.5],
    ...props
  }))

  // console.log(' ref playerInitialPosition[0] = ', playerInitialPosition[0])
  // console.log(' ref defaultPosition = ', defaultPosition)
  // console.log(' ref playerInitialPosition = ', playerInitialPosition)

  const velocity = useRef([0, 0.0, 0])
  const emojiAnimation: string = useStore((s) => s.emojiAnimation)

  useEffect(() => {
    api.velocity.subscribe((v: number[]) => (velocity.current = v))
  }, [api.velocity])

  useFrame(() => {
    if (emojiAnimation !== "Idle") return
        const direction = new THREE.Vector3()
    if (joystickDistance === 0) {
      const frontVector = new THREE.Vector3(0, 0, (Number(backward) - Number(forward)) * ((left || right)? 1 : Math.sqrt(2)))
      const sideVector = new THREE.Vector3(0, 0, 0)
      // console.log(frontVector)
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(4).applyEuler(camera.rotation)
    } else {
      const l = Math.abs(joystickDistance * Math.sin(Math.PI * joystickAngle / 180) * 0.05)
      let frontVector = new THREE.Vector3(0,0,0)
      if ((joystickAngle >= 0 && joystickAngle <= 10) || (joystickAngle >= 170 && joystickAngle <= 180)) 
        frontVector = new THREE.Vector3(0, 0, -0.01)
      else if ((joystickAngle >= 350 && joystickAngle <= 360) || (joystickAngle > 180 && joystickAngle <= 190)) 
        frontVector = new THREE.Vector3(0, 0, 0.01)
      else if ( joystickAngle >= 10 && joystickAngle < 170)        
        frontVector = new THREE.Vector3(0, 0, -Math.abs(Math.sin(Math.PI * joystickAngle / 180)))
      else if ( joystickAngle <= 350 && joystickAngle > 190)        
        frontVector = new THREE.Vector3(0, 0, Math.abs(Math.sin(Math.PI * joystickAngle / 180)))
      
      const sideVector = new THREE.Vector3(0, 0, 0)
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(4).applyEuler(camera.rotation)
    }

    //apply the velocity to our sphere
    api.velocity.set(direction.x, 0, direction.z)
    ref.current.getWorldPosition(ref.current.position)
  })

  useStore.setState({ playerPosition: ref?.current?.getWorldPosition(ref.current.position) })

  return (
    <>
      <mesh />
    </>
  )
}

export default PlayerDesktop
