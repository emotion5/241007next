
import { useRef } from 'react'

export default function Box({ dimensions, color }) {
  const { width, height, depth } = dimensions
  const meshRef = useRef()

  return (
    <mesh
      ref={meshRef}
      position={[0, height / 2, 0]}
      castShadow
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}