// components/three/Icosahedron.jsx
'use client';

export const Icosahedron = () => {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#ff9933"
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
};