import { Suspense } from 'react'
import { useVideoTexture, useTexture } from '@react-three/drei'
import useStore from '../helpers/store';

function VideoMaterial({ url }:any) {
    // @ts-ignore
    const texture:any = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}
  
function FallbackMaterial({ url }:any) {
    const texture:any = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

export function VideoText(props:any) {
    return (
      <mesh scale={[10.5, 7.25, 1]} position={props.position} rotation={props.rotation}  visible={props.visible}  >
        <planeGeometry />
        <Suspense fallback={<FallbackMaterial url="assets/textures/video.png" />}>
          <VideoMaterial url="assets/textures/Kicks.mp4" />
        </Suspense>
      </mesh>
    )
}