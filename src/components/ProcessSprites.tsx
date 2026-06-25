import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT_DESKTOP = 512;
const PARTICLE_COUNT_MOBILE = 200;

function generatePlane(count: number, scale: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const amountX = 16;
  const amountZ = Math.ceil(count / amountX);
  const separation = 150 * scale;
  const offsetX = ((amountX - 1) * separation) / 2;
  const offsetZ = ((amountZ - 1) * separation) / 2;

  for (let i = 0; i < count; i++) {
    const x = (i % amountX) * separation;
    const z = Math.floor(i / amountX) * separation;
    const y = (Math.sin(x * 0.5) + Math.sin(z * 0.5)) * 200 * scale;
    positions[i * 3] = x - offsetX;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z - offsetZ;
  }
  return positions;
}

function generateSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function generateCube(count: number, scale: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const amount = Math.ceil(Math.cbrt(count));
  const separation = 150 * scale;
  const offset = ((amount - 1) * separation) / 2;

  for (let i = 0; i < count; i++) {
    const x = (i % amount) * separation;
    const y = Math.floor((i / amount) % amount) * separation;
    const z = Math.floor(i / (amount * amount)) * separation;
    positions[i * 3] = x - offset;
    positions[i * 3 + 1] = y - offset;
    positions[i * 3 + 2] = z - offset;
  }
  return positions;
}

function generateHelix(count: number, radius: number, height: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const angle = t * Math.PI * 8;
    const y = t * height - height / 2;
    const r = radius * (0.5 + t * 0.5);
    positions[i * 3] = r * Math.cos(angle);
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = r * Math.sin(angle);
  }
  return positions;
}

interface ProcessSpritesProps {
  activeStep: number;
  isMobile: boolean;
  isDark: boolean;
}

export default function ProcessSprites({ activeStep, isMobile, isDark }: ProcessSpritesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
  const scaleFactor = isMobile ? 0.6 : 1;

  const formations = useMemo(() => [
    generatePlane(count, scaleFactor),
    generateSphere(count, 600 * scaleFactor),
    generateCube(count, scaleFactor),
    generateHelix(count, 300 * scaleFactor, 1500 * scaleFactor),
  ], [count, scaleFactor]);

  const currentPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 4000 * scaleFactor;
    }
    return positions;
  }, [count, scaleFactor]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    return geo;
  }, [currentPositions]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const target = formations[activeStep];
    const lerpSpeed = isMobile ? 0.015 : 0.02;

    for (let i = 0; i < count * 3; i++) {
      posAttr.array[i] = THREE.MathUtils.lerp(posAttr.array[i], target[i], lerpSpeed);
    }
    posAttr.needsUpdate = true;

    pointsRef.current.rotation.y += isMobile ? 0.001 : 0.002;
  });

  return (
    <group>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          color={isDark ? '#ea580c' : '#c2410c'}
          size={isMobile ? 8 : 7}
          transparent
          opacity={isDark ? 0.85 : 0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
