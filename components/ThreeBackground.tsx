"use client";
import { useRef, useMemo, useEffect, useState, memo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Mouse position for cursor reactivity
let mouseX = 0;
let mouseY = 0;

function CursorReactiveParticles() {
  const ref = useRef<any>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      // Spread particles in a large volume
      arr[i * 3]     = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  // Mix of purple and cyan particles via two layers
  useFrame((state, delta) => {
    if (!ref.current) return;
    // Slow base rotation
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;

    // React gently to cursor
    const targetX = (mouseX / window.innerWidth - 0.5) * 0.4;
    const targetY = -(mouseY / window.innerHeight - 0.5) * 0.4;
    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#A855F7"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

function CyanParticles() {
  const ref = useRef<any>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.02;
    ref.current.rotation.z += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22D3EE"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.5}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, scale }: { position: [number,number,number]; color: string; scale: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    const s = scale + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.6, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.06} />
    </mesh>
  );
}

const ThreeBackground = () => {
  // Track mouse position
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1]} gl={{ antialias: false }}>
        <fog attach="fog" args={["#030303", 8, 20]} />
        <CursorReactiveParticles />
        <CyanParticles />
        <FloatingOrb position={[-3, 1, -2]} color="#A855F7" scale={1} />
        <FloatingOrb position={[3, -1, -3]} color="#22D3EE" scale={0.8} />
        <FloatingOrb position={[0, 2, -4]} color="#7C3AED" scale={1.2} />
      </Canvas>
    </div>
  );
};

export default memo(ThreeBackground);
