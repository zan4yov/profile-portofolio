import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function ProfileCard3D() {
  const groupRef = useRef<THREE.Group>(null);
  const isHovered = useRef(false);

  // Auto-rotate animation
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.005;
      
      // Floating effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Card */}
      <RoundedBox
        args={[2.5, 3.5, 0.1]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => (isHovered.current = true)}
        onPointerOut={() => (isHovered.current = false)}
      >
        <meshStandardMaterial
          color="#1a1f2e"
          metalness={0.8}
          roughness={0.2}
          emissive="#00f5ff"
          emissiveIntensity={0.1}
        />
      </RoundedBox>

      {/* Accent Border */}
      <RoundedBox
        args={[2.6, 3.6, 0.05]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, -0.08]}
      >
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </RoundedBox>

      {/* Text Labels */}
      <Text
        position={[0, 1, 0.06]}
        fontSize={0.3}
        color="#00f5ff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Bold.ttf"
      >
        {'<Developer />'}
      </Text>

      <Text
        position={[0, 0, 0.06]}
        fontSize={0.18}
        color="#7fffd4"
        anchorX="center"
        anchorY="middle"
      >
        Full Stack
      </Text>

      <Text
        position={[0, -0.5, 0.06]}
        fontSize={0.15}
        color="#c77dff"
        anchorX="center"
        anchorY="middle"
      >
        React • Node • UI/UX
      </Text>

      {/* Decorative Elements */}
      <mesh position={[-0.9, 1.4, 0.06]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[0.9, 1.4, 0.06]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#7fffd4"
          emissive="#7fffd4"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Corner Brackets */}
      {[
        [-1, 1.5],
        [1, 1.5],
        [-1, -1.5],
        [1, -1.5],
      ].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.06]}>
          <boxGeometry args={[0.15, 0.02, 0.01]} />
          <meshStandardMaterial
            color="#00f5ff"
            emissive="#00f5ff"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}
