import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import useStore from '../helpers/store';

export function Shoes3(props:any) {

  const ref:any = useRef()
  const { nodes, materials, animations } = useGLTF("assets/models/shoes/shoes2.glb");

  // Animate model
  useFrame((state) => {
    // const t = state.clock.getElapsedTime()
    // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    // ref.current.rotation.x = Math.cos(t / 4) / 8
    // ref.current.rotation.y = Math.sin(t / 4 - Math.PI / 6) / 8 + t/6 + Math.PI / 4
    
    // if ( props.yPosition !== undefined)
    //   ref.current.position.y = props.yPosition + (1 + 5* Math.sin(t / 1.5 + Math.PI / 4)) / 10
    ref.current.position.y = props.yPosition
  })

  return (
    <group ref={ref} {...props} dispose={null}  visible={props.visible}  >
      <group>
        <group name="Nike" position={[0.65, 1.8, -0.59]}>
          <mesh
            name="Label_FX_Blue"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Label_FX_Blue.geometry}
            material={materials.Label_FX_add}
            position={[0.06, 0.19, 0.56]}
          />
          <mesh
            name="Back_FX"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Back_FX.geometry}
            material={materials.Back_FX_add}
            position={[-0.69, 0.76, 0.59]}
            rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
            scale={1.02}
          />
          <mesh
            name="Back_FX2"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Back_FX2.geometry}
            material={materials.Back_FX_add}
            position={[-0.68, 0.75, 0.59]}
            rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
            scale={1.02}
          />
          <mesh
            name="Lights_FX"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Lights_FX.geometry}
            material={materials.Lights_FX_add}
            position={[-0.69, -0.79, 1.07]}
          />
          <mesh
            name="Back_FX1"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Back_FX1.geometry}
            material={materials.Back_FX_add}
            position={[-1.15, 0.34, 0.59]}
            rotation={[Math.PI / 2, 0.79, -Math.PI / 2]}
          />
          <mesh
            name="Bottom_FX"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Bottom_FX.geometry}
            material={materials.Bottom_FX_add}
            position={[-0.76, -1.15, 0.59]}
            rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
          />
          <mesh
            name="CyberShoe"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.CyberShoe.geometry}
            material={materials.CyberShoeHigh}
            position={[-0.76, -1.14, 0.59]}
            rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
          />
        </group>
      </group>
    </group>
  )
}