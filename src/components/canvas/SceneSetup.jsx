// components/three/SceneSetup.jsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Icosahedron } from './Icosahedron';
import { Lights } from './Lights';

export const SceneSetup = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Lights />
        <Icosahedron />
        <gridHelper args={[10, 10]} />
        <OrbitControls enableDamping={true} dampingFactor={0.05} />
      </Canvas>
    </div>
  );
};