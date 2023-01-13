import * as THREE from 'three'
import { useState, useLayoutEffect } from 'react'
import { Reflector } from 'three/examples/jsm/objects/Reflector'
import useStore from '../helpers/store';

export function Mirror(props:any) {
    const [scene] = useState(() => new THREE.Scene())
      const wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 10),
    // new THREE.MeshBasicMaterial({ color: 0xFF3200 })
    new THREE.MeshBasicMaterial({opacity: 0, transparent: true})
  );
  
  useLayoutEffect(() => {
    const geometry = new THREE.PlaneGeometry( 3.2, 8.8);
    let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 75, 160 );
    let verticalMirror = new Reflector( geometry, {
        textureWidth: 1920,
        textureHeight: 1920,
        color: 0x889999
    });

    verticalMirror.position.set(15,4.7,2.8)
    verticalMirror.rotateY(Math.PI*217/180)
    scene.add( verticalMirror );
  }, [])
  return <primitive object={scene}  visible={props.visible}  />
}