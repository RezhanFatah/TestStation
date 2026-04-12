"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1500 }) {
  const mesh = useRef<THREE.Points>(null!);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      spd[i] = 0.002 + Math.random() * 0.008;
    }
    return [pos, spd];
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.03;
    mesh.current.rotation.x = Math.sin(t * 0.02) * 0.2;

    const posArray = mesh.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += Math.sin(t + i) * speeds[i] * 0.3;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.z = t * 0.1;
    ref.current.position.y = Math.sin(t * 0.3) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
    </mesh>
  );
}

function FloatingRing2() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.12;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.2) * 0.1;
    ref.current.position.y = Math.cos(t * 0.25) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.5, 0.015, 16, 120]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.07} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Particles />
        <FloatingRing />
        <FloatingRing2 />
      </Canvas>
    </div>
  );
}
