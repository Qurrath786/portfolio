"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Group, Object3D } from "three";

/**
 * FloatingGroup - safe animation over children
 */
function FloatingGroup({ children }: { children?: React.ReactNode }) {
  const groupRef = useRef<Group | null>(null);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.getElapsedTime();
    const childrenArr = g.children;
    if (!childrenArr || childrenArr.length === 0) return;

    for (let i = 0; i < childrenArr.length; i++) {
      const obj = childrenArr[i] as Object3D & { position?: THREE.Vector3 };
      if (!obj || !obj.position) continue;

      // gentle float and slow spin
      obj.position.y += Math.sin(t * 1.5 + i) * 0.0015;
      obj.rotation.y += 0.003 + (i % 3) * 0.0005;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

const SPHERES: [number, number, number, string][] = [
  [-2.2, 1.2, -1.5, "#7fbf8a"],
  [-0.6, 0.8, -0.9, "#9ad2b5"],
  [0.8, 1.0, -0.6, "#e08a6a"],
  [1.6, 0.6, -1.2, "#c76b4b"],
  [-1.5, -0.6, -0.8, "#3fa05f"],
  [0.2, -0.4, -0.2, "#c24b59"],
  [1.8, -0.8, -1.1, "#8a2b2b"],
  [-0.9, -1.2, -0.5, "#9b5ec6"],
  [0.4, 1.8, -1.9, "#77b0ff"],
];

export default function ThreeScene(): JSX.Element {
  useEffect(() => {
    // optional debug
    // console.debug("[ThreeScene] mounted");
    return () => {};
  }, []);

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />

      {/* Fog gives depth to the floating spheres */}
      <fog attach="fog" args={["#0d0d0d", 6, 14]} />

      {/* Floating collection */}
      <FloatingGroup>
        {SPHERES.map(([x, y, z, color], idx) => (
          <mesh key={idx} position={[x, y, z]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color={color} roughness={0.48} metalness={0.15} />
          </mesh>
        ))}
      </FloatingGroup>

      {/* hidden ground (not visible) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]} visible={false}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </Canvas>
  );
}
