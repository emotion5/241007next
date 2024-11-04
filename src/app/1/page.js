'use client';  // Next.js에서 클라이언트 사이드 렌더링을 명시

// 필요한 라이브러리 import
import dynamic from 'next/dynamic';  // SSR 비활성화를 위한 dynamic import
import { Canvas } from '@react-three/fiber';  
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

// 3D 객체 컴포넌트 - 단순 메쉬 반환 함수형 컴포넌트
const Icosahedron = () => {
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

// 메인 Scene 컴포넌트 - R3F 캔버스와 조명, 컨트롤을 포함
const Scene = () => {
 // 컴포넌트 마운트 상태 관리를 위한 hook
 const [mounted, setMounted] = useState(false);

 // 마운트 완료 시 상태 업데이트를 위한 useEffect
 useEffect(() => {
   setMounted(true);
 }, []);

 // 마운트 되기 전까지는 null 반환
 if (!mounted) {
   return null;
 }

 // JSX 구조:
 // - 전체 크기 div
 // - R3F Canvas
 // - 내부에 조명, 3D객체, 컨트롤러
 return (
   <div style={{ width: '100vw', height: '100vh' }}>
     <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
       <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
       <ambientLight intensity={0.2} />
       <Icosahedron />
       <gridHelper args={[10, 10]} />
       <OrbitControls enableDamping={true} dampingFactor={0.05} />
     </Canvas>
   </div>
 );
};

// Scene 컴포넌트를 동적으로 import하여 SSR 비활성화
const Page = dynamic(() => Promise.resolve(Scene), {
 ssr: false
});

// 페이지 컴포넌트 export
export default Page;


/* 
코드 구조 설명:

1. 컴포넌트 구조
- Icosahedron: 단순 3D 객체를 반환하는 함수형 컴포넌트
- Scene: R3F 캔버스와 3D 요소들을 포함하는 메인 컴포넌트
- Page: dynamic import를 사용하여 SSR을 비활성화하는 최상위 컴포넌트

2. 사용된 Hooks
- useState: 
 - mounted 상태를 관리
 - 초기값 false로 설정
- useEffect:
 - 컴포넌트 마운트 시 mounted를 true로 변경
 - 빈 의존성 배열([])로 마운트 시 한 번만 실행

3. Dynamic Import
- Scene 컴포넌트를 동적으로 불러옴
- ssr: false로 서버 사이드 렌더링 비활성화
- Next.js에서 R3F를 사용하기 위한 필수 설정

4. 렌더링 조건
- mounted가 false일 때는 null 반환
- mounted가 true일 때만 실제 Scene 렌더링
- 이는 hydration 문제를 방지하기 위한 패턴
*/