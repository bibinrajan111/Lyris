'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function BottleMesh({ scale = 1 }: { scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.y = mouse.x * 0.6;
    ref.current.rotation.x = mouse.y * 0.2;
  });

  return (
    <mesh ref={ref} scale={scale}>
      <cylinderGeometry args={[0.6, 0.5, 1.8, 64]} />
      <MeshDistortMaterial color="#967BB6" roughness={0.1} metalness={0.8} distort={0.12} speed={2} />
    </mesh>
  );
}

export function ThreeBottle({ scale = 1 }: { scale?: number }) {
  return (
    <div className="h-[420px] w-full">
      <Canvas camera={{ position: [0, 0.2, 3.4], fov: 45 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 2]} intensity={1.8} />
        <BottleMesh scale={scale} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
