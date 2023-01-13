import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    shoe: THREE.Mesh
    shoe_1: THREE.Mesh
    shoe_2: THREE.Mesh
    shoe_3: THREE.Mesh
    shoe_4: THREE.Mesh
    shoe_5: THREE.Mesh
    shoe_6: THREE.Mesh
    shoe_7: THREE.Mesh
  }
  materials: {
    laces: THREE.MeshStandardMaterial
    mesh: THREE.MeshStandardMaterial
    caps: THREE.MeshStandardMaterial
    inner: THREE.MeshStandardMaterial
    sole: THREE.MeshStandardMaterial
    stripes: THREE.MeshStandardMaterial
    band: THREE.MeshStandardMaterial
    patch: THREE.MeshStandardMaterial
  }
}

export function Shoes1(props:any) {

  const ref:any = useRef()
  // const { nodes, materials } = useGLTF("assets/models/shoes/shoes1.glb")

  // Animate model
  useFrame((state) => {
    // const t = state.clock.getElapsedTime()
    // ref.current.position.y = props.position.y
    // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    // ref.current.rotation.x = Math.cos(t / 4) / 8
    // ref.current.rotation.y = - Math.sin(t / 4 + Math.PI / 4) / 8 - t/4 - Math.PI / 4
    // ref.current.position.y = 2 + (1 - 5* Math.cos( t / 1.5 - Math.PI / 4)) / 10
    ref.current.position.y = 2
  })

  const { nodes, materials } = useGLTF('assets/models/shoes/shoes1.glb') as any
  return (
    <group 
      {...props}       
      ref={ref}
      dispose={null}
      position={props.position}
      visible={props.visible} >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}