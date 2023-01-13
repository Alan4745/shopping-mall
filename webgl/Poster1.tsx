import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster1(props:any) {

    const textureFront = useLoader(TextureLoader, 'assets/textures/poster1.png')
    const uiStep: number = useStore((s) => s.uiStep)

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible}  
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront} transparent={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}