'use client';

import dynamic from 'next/dynamic';  // dynamic import 추가
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

const Icosahedron = () => {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#44aa88"
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
};

const Scene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <directionalLight 
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
        />
        <ambientLight intensity={0.2} />
        <Icosahedron />
        <gridHelper args={[10, 10]} />
        <OrbitControls 
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

const Page = dynamic(() => Promise.resolve(Scene), {
  ssr: false
});

export default Page;