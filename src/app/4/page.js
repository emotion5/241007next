
'use client'

import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Scene from './Scene'
import DimensionControls from './DimensionControls'

export default function FurnitureSimulator() {
  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
    depth: 1
  })
  const [color, setColor] = useState("#bc8f8f")

  return (
    <div>
      <DimensionControls 
        dimensions={dimensions} 
        setDimensions={setDimensions}
        color={color}
        setColor={setColor}
      />

      <div style={{ width: '90vw', height: '60vh' }}>
        <Canvas shadows>
          <Scene dimensions={dimensions} color={color} />
        </Canvas>
      </div>
    </div>
  )
}