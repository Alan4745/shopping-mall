import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useBox, useCylinder, usePlane } from '@react-three/cannon'

const Env = (props: any) => {
  const gltf: any = useLoader(GLTFLoader, 'assets/models/Env.glb')
  const { nodes, materials } = useLoader(GLTFLoader, "assets/models/Env.glb",  (loader:any) => {
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('assets/draco/')
      loader.setDRACOLoader(dracoLoader)
  })

  const [Floor_Ref]: any = usePlane(() => ({ type: 'Static', material: 'ground', rotation: [-Math.PI / 2, 0, 0], ...props }));
  // Video wall
  const [Wall2_Ref]:any = useBox(() => ({ type: 'Static', args: [1, 16, 20], position: [-10.8, -2, 0], rotation: [0, Math.PI*1.036/11, 0] })) 
  
  // Lobby Wall 2
  const [Wall4_Ref]: any = useBox(() => ({ type: 'Static', args: [1.2, 16, 4], position: [-8.3, -2, 10.9], rotation: [0, Math.PI*1.036/11 + Math.PI/4, 0] }))

  // Lobby Wall 3
  const [Wall5_Ref]: any = useBox(() => ({ type: 'Static', args: [1.2, 16, 4], position: [-0.8, -2, 14.85], rotation: [0, Math.PI*1.036/11 + Math.PI/4, 0] }))
  const [Wall6_Ref]: any = useBox(() => ({ type: 'Static', args: [12, 16, 2], position: [-14.2, -2, 16], rotation: [0, Math.PI*1.036/11 + Math.PI/4, 0] }))
  const [Wall7_Ref]: any = useBox(() => ({ type: 'Static', args: [12, 16, 2], position: [-1.1, -2, 21.5], rotation: [0, Math.PI*1.036/11 + Math.PI/4, 0] }))
  const [Wall8_Ref]: any = useBox(() => ({ type: 'Static', args: [4, 16, 14], position: [-10.5, -2, 26.5], rotation: [0, Math.PI*1.036/11 + Math.PI/4, 0] }))
  const [Wall9_Ref]: any = useBox(() => ({ type: 'Static', args: [16, 16, 2], position: [7.5, -2, 14.2], rotation: [0, Math.PI*0.1/11, 0] }))
  const [Wall10_Ref]: any = useBox(() => ({ type: 'Static', args: [18, 16, 2], position: [0.5, -2, -13.4], rotation: [0, Math.PI*-0.05/11, 0] }))
  const [Wall11_Ref]: any = useBox(() => ({ type: 'Static', args: [16, 16, 2], position: [15, -2, -12.4], rotation: [0, Math.PI*-0.05/11, 0] }))
  const [Wall12_Ref]: any = useBox(() => ({ type: 'Static', args: [2, 16, 18], position: [17.1, -2, -6.8], rotation: [0, Math.PI*0.05/11, 0] }))
  const [Wall13_Ref]: any = useBox(() => ({ type: 'Static', args: [2, 16, 17], position: [14.8, -2, 12.4], rotation: [0, Math.PI*0.05/11, 0] }))
  const [Wall14_Ref]: any = useBox(() => ({ type: 'Static', args: [3.5, 16, 2], position: [15.8, -2, 3.4], rotation: [0, Math.PI*-0.5/11+Math.PI/4, 0] }))
  const [Wall15_Ref]: any = useBox(() => ({ type: 'Static', args: [4, 16, 2], position: [13, -2, 13.4], rotation: [0, Math.PI*-0.5/11+Math.PI/4, 0] }))
  
  const [Cylinder_Ref]: any = useCylinder(() => ({ type: 'Static', args: [0.5, 0.5, 32, 16], position: [-1.4, -2, 13.4] }))
  const [Cylinder1_Ref]: any = useCylinder(() => ({ type: 'Static', args: [0.5, 0.5, 32, 16], position: [-6.8, -2, 10.9] }))

  // Shop viturally
  const [Cylinder3_Ref]: any = useCylinder(() => ({ type: 'Static', args: [3, 3, 16, 16], position: [-11, -2, -10.] }))

  // logo bar
  // const [Cylinder4_Ref]: any = useCylinder(() => ({ type: 'Static', args: [4.2, 4.2, 32, 32], position: [3.1, -2, -13.8] }))

  // lightening bolt
  const [Cylinder5_Ref]: any = useCylinder(() => ({ type: 'Static', args: [2, 2, 32, 32], position: [14.1, -2, -11.8] }))
  const [Cylinder6_Ref]: any = useCylinder(() => ({ type: 'Static', args: [2, 2, 32, 32], position: [16.8, -2, -9.4] }))

  // Hall
  const [Product1_Ref]: any = useBox(() => ({ type: 'Static', args: [2.2, 16, 2.3], position: [0.2, -2, 1.8], rotation: [0, Math.PI*50/180, 0] }))
  const [Product2_Ref]: any = useBox(() => ({ type: 'Static', args: [6.2, 16, 1.44], position: [0.4, -2, -11.1], rotation: [0, 0, 0] }))
  const [Product3_Ref]: any = useBox(() => ({ type: 'Static', args: [6.2, 16, 1.44], position: [0.4, -2, -6.04], rotation: [0, 0, 0] }))


  return (
    <>
      <group ref={Floor_Ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[300, 300]} />
      </group>
      <mesh ref={Wall2_Ref} />
      <mesh ref={Wall4_Ref} />
      <mesh ref={Wall5_Ref} />
      <mesh ref={Wall6_Ref} />
      <mesh ref={Wall7_Ref} />
      <mesh ref={Wall8_Ref} />
      <mesh ref={Wall9_Ref} />
      <mesh ref={Wall10_Ref} />
      <mesh ref={Wall11_Ref} />
      <mesh ref={Wall12_Ref} />
      <mesh ref={Wall13_Ref} />
      <mesh ref={Wall14_Ref} />
      <mesh ref={Wall15_Ref} />
      <mesh ref={Cylinder_Ref} />
      <mesh ref={Cylinder1_Ref} />
      <mesh ref={Cylinder3_Ref} />
      <mesh ref={Cylinder5_Ref} />
      <mesh ref={Cylinder6_Ref} />
      <mesh ref={Product1_Ref} />
      <mesh ref={Product2_Ref} />
      <mesh ref={Product3_Ref} />
      
      <primitive object={gltf.scene} position={props.position} scale={props.scale} visible={props.visible}/>
    </>
  );
}

export default Env;