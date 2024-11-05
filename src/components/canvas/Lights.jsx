// components/three/Lights.jsx
'use client';

export const Lights = () => {
  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <ambientLight intensity={0.2} />
    </>
  );
};