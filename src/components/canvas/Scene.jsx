// components/three/Scene.jsx
'use client';

import { useEffect, useState } from 'react';
import { SceneSetup } from './SceneSetup';

const Scene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <SceneSetup />;
};

export default Scene;