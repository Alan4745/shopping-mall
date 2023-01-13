import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import useStore from '../helpers/store';

export function Shoes2(props:any) {

  const ref:any = useRef()
  const { nodes, materials } = useGLTF("assets/models/shoes/shoes1.glb")

  // Animate model
  useFrame((state) => {
    // const t = state.clock.getElapsedTime()
    // ref.current.position.y = props.position.y
    // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    // ref.current.rotation.x = Math.cos(t / 4) / 8
    // ref.current.rotation.y = Math.sin(t / 4) / 8 + t/6
    // ref.current.position.y = 2 + (1 + 5* Math.sin(t / 1.5)) / 10
    ref.current.position.y = 2
  })

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      dispose={null}
      position={props.position}
      visible={props.visible}  
    >
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={'#ffffff'} />
      {/* @ts-ignore */}
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={'#ffffff'} />
    </group>
  )
}