'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

// Scene 컴포넌트
function Scene({ dimensions, color }) {
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 4, 4]} />
      <OrbitControls />
      
      {/* 조명 설정 */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        ref={directionalLight}
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow 
      />

      {/* 가구(박스) */}
      <Box dimensions={dimensions} color={color} />

      {/* 바닥
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh> */}

      {/* gridHelper */}
      <gridHelper args={[10, 10]} />
    </>
  )
}

// Box 컴포넌트
function Box({ dimensions, color }) {
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

// 메인 컴포넌트
export default function FurnitureSimulator() {
  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
    depth: 1
  })
  const [color, setColor] = useState("#bc8f8f")

  return (
    <div>
      <div>
        <h2>가구 크기 조절</h2>
        
        <div>
          <label>
            폭 (m)
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1"
              value={dimensions.width}
              onChange={(e) => setDimensions(prev => ({
                ...prev,
                width: parseFloat(e.target.value)
              }))}
            />
            <span>{dimensions.width.toFixed(1)}m</span>
          </label>

          <label>
            높이 (m)
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1"
              value={dimensions.height}
              onChange={(e) => setDimensions(prev => ({
                ...prev,
                height: parseFloat(e.target.value)
              }))}
            />
            <span>{dimensions.height.toFixed(1)}m</span>
          </label>

          <label>
            깊이 (m)
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1"
              value={dimensions.depth}
              onChange={(e) => setDimensions(prev => ({
                ...prev,
                depth: parseFloat(e.target.value)
              }))}
            />
            <span>{dimensions.depth.toFixed(1)}m</span>
          </label>

          <label>
            색상
            <input 
              type="color" 
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div style={{ width: '90vw', height: '60vh' }}>
        <Canvas shadows>
          <Scene dimensions={dimensions} color={color} />
        </Canvas>
      </div>
    </div>
  )
}
