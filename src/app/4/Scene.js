
import { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei'
import * as THREE from 'three'
import Box from './Box'

export default function Scene({ dimensions, color }) {
  const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'green')

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 4, 4]} />
      <OrbitControls />
      
      <ambientLight intensity={0.5} />
      <directionalLight 
        ref={directionalLight}
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow 
      />

      <Box dimensions={dimensions} color={color} />
      <gridHelper args={[10, 10]} />
    </>
  )
}