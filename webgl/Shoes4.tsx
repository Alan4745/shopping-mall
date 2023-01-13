import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import useStore from '../helpers/store';

export function Shoes4(props:any) {

  const ref:any = useRef()
  const { nodes, materials, animations } = useGLTF("assets/models/shoes/shoes3.glb");

  // Animate model
  useFrame((state) => {
    // const t = state.clock.getElapsedTime()
    // ref.current.rotation.set(0. + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    
    // if ( props.yPosition !== undefined)
    //   ref.current.position.y = props.yPosition + (1 + 5* Math.sin(t / 2)) / 10
    ref.current.position.y = props.yPosition
  })

  return (
    <group {...props} dispose={null}  visible={props.visible}  >
      <group ref={ref}>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          {/* @ts-ignore */}
          <mesh castShadow geometry={nodes.Object_115.geometry} material={materials['Material.002']} />
          {/* @ts-ignore */}
          <mesh castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials['Material.001']} />
        </group>
      </group>
    </group>
  )
}