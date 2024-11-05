// src/app/2/page.js
import dynamic from 'next/dynamic';

const Scene = dynamic(
  () => import('@/components/canvas/Scene'),
  { ssr: false }
);

export default function ThreeDPage() {
  return <Scene />;
}