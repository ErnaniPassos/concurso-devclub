import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Center,
  Float,
  MeshDistortMaterial,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

import { InteractionHint, SceneContainer } from "./styles";
import fontData from "../../../../../assets/fonts/helvetiker_bold.typeface.json";

const orbitData = [
  {
    radius: 2.15,
    speed: 0.32,
    tilt: 0.35,
    color: "#38bdf8",
    size: 0.11,
    offset: 0,
  },
  {
    radius: 2.75,
    speed: -0.2,
    tilt: -0.55,
    color: "#a3ff12",
    size: 0.14,
    offset: 2.1,
  },
  {
    radius: 3.25,
    speed: 0.14,
    tilt: 0.85,
    color: "#ffffff",
    size: 0.08,
    offset: 4.2,
  },
];

function CameraRig() {
  const targetPosition = useRef(new THREE.Vector3(0, 0, 7.2));

  useFrame(({ camera, pointer }) => {
    targetPosition.current.set(pointer.x * 0.65, pointer.y * 0.45, 7.2);

    camera.position.lerp(targetPosition.current, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function BrandText() {
  const brandRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    brandRef.current.rotation.x = Math.sin(elapsed * 0.7) * 0.1;
    brandRef.current.rotation.y = Math.sin(elapsed * 0.55) * 0.18;
    brandRef.current.rotation.z = Math.sin(elapsed * 0.4) * 0.045;
  });

  return (
    <group ref={brandRef} position={[0, 0, 1.42]}>
      <Center>
        <Text3D
          font={fontData}
          size={0.38}
          depth={0.12}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.018}
          bevelSize={0.012}
          bevelSegments={5}
          renderOrder={10}
        >
          Dev Club
          <meshBasicMaterial
            color="#9fd936"
            transparent
            opacity={1}
            depthTest={false}
            depthWrite={false}
            toneMapped
          />
        </Text3D>
      </Center>
    </group>
  );
}

function EnergyCore({ onActivate }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const shellRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    const pulse =
      1 + Math.sin(elapsed * 2.4) * 0.045 + Math.sin(elapsed * 0.85) * 0.02;

    groupRef.current.rotation.x =
      elapsed * 0.16 + Math.sin(elapsed * 0.55) * 0.22;

    groupRef.current.rotation.y =
      elapsed * 0.21 + Math.cos(elapsed * 0.48) * 0.28;

    groupRef.current.rotation.z =
      elapsed * 0.12 + Math.sin(elapsed * 0.4) * 0.18;

    coreRef.current.rotation.x = elapsed * 0.12;
    coreRef.current.rotation.y = elapsed * 0.18;
    coreRef.current.scale.setScalar(pulse);

    shellRef.current.rotation.x = -elapsed * 0.08;
    shellRef.current.rotation.y = elapsed * 0.1;
    shellRef.current.rotation.z = -elapsed * 0.06;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.35}>
      <group ref={groupRef} onClick={onActivate}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.15, 6]} />

          <MeshDistortMaterial
            color="#031426"
            emissive="#075985"
            emissiveIntensity={1.15}
            roughness={0.2}
            metalness={0.65}
            distort={0.32}
            speed={2.6}
            transparent
            opacity={0.82}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={shellRef} scale={1.34}>
          <icosahedronGeometry args={[1.15, 2]} />

          <meshBasicMaterial
            color="#8be9ff"
            transparent
            opacity={0.19}
            wireframe
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        <mesh scale={1.72}>
          <sphereGeometry args={[1, 48, 48]} />

          <meshBasicMaterial
            color="#067dff"
            transparent
            opacity={0.055}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        <pointLight color="#38bdf8" intensity={8} distance={7} />
      </group>
      <BrandText />
    </Float>
  );
}

function EnergyOrbit({ radius, speed, tilt, color, size, offset }) {
  const orbitRef = useRef(null);

  useFrame(({ clock }) => {
    orbitRef.current.rotation.z = clock.getElapsedTime() * speed + offset;
  });

  return (
    <group ref={orbitRef} rotation={[tilt, 0, offset]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.012, 12, 180]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[size, 24, 24]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={8}
          toneMapped={false}
        />

        <pointLight color={color} intensity={3} distance={1.8} />
      </mesh>
    </group>
  );
}

function Shockwave({ activation }) {
  const waveRef = useRef(null);
  const materialRef = useRef(null);
  const startedAt = useRef(0);

  useFrame(({ clock }) => {
    if (!activation) return;

    if (!startedAt.current) {
      startedAt.current = clock.getElapsedTime();
    }

    const progress = Math.min(
      (clock.getElapsedTime() - startedAt.current) / 1.35,
      1,
    );

    waveRef.current.scale.setScalar(1 + progress * 4.5);
    materialRef.current.opacity = (1 - progress) * 0.65;
  });

  return (
    <mesh ref={waveRef} key={activation}>
      <ringGeometry args={[1.28, 1.34, 128]} />

      <meshBasicMaterial
        ref={materialRef}
        color="#a3ff12"
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene() {
  const [activation, setActivation] = useState(0);

  function activateCore(event) {
    event.stopPropagation();
    setActivation((current) => current + 1);
  }

  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 4]} intensity={2.5} />

      <Sparkles
        count={180}
        scale={[8, 6, 5]}
        size={2.2}
        speed={0.45}
        opacity={0.8}
        color="#75ddff"
      />

      <EnergyCore onActivate={activateCore} />

      {orbitData.map((orbit) => (
        <EnergyOrbit key={orbit.radius} {...orbit} />
      ))}

      <Shockwave key={activation} activation={activation} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.65}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.18}
          mipmapBlur
        />

        <Vignette eskil={false} offset={0.12} darkness={0.75} />
      </EffectComposer>

      <AdaptiveDpr pixelated />
    </>
  );
}

export function HeroScene() {
  return (
    <SceneContainer>
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>

      <InteractionHint>MOVA O CURSOR • CLIQUE NO NÚCLEO</InteractionHint>
    </SceneContainer>
  );
}
