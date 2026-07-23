import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

import {
  FireballCanvas,
  FireballContainer,
  FireballLabel,
  FireballSubtitle,
  FireballTitle,
} from "./styles";

const UP_VECTOR = new THREE.Vector3(0, 1, 0);

const rayData = Array.from({ length: 26 }, (_, index) => {
  const angle = index * 2.399963;
  const vertical = 1 - (index / 25) * 2;
  const horizontal = Math.sqrt(1 - vertical * vertical);

  const direction = new THREE.Vector3(
    Math.cos(angle) * horizontal,
    vertical,
    Math.sin(angle) * horizontal,
  ).normalize();

  return {
    id: index,
    direction,

    quaternion: new THREE.Quaternion().setFromUnitVectors(UP_VECTOR, direction),

    length: 1.8 + ((index * 37) % 13) * 0.13,
    width: 0.025 + (index % 4) * 0.012,
    delay: (index % 7) * 0.045,

    color:
      index % 6 === 0 ? "#a3ff12" : index % 3 === 0 ? "#ffffff" : "#38bdf8",
  };
});

function seededRandom(seed) {
  const value = Math.sin(seed * 999.91) * 43758.5453;

  return value - Math.floor(value);
}

const codeSymbols = [
  "{ }",
  "</>",
  "[ ]",
  "( )",
  "=>",
  "01",
  "JS",
  "#",
  ";",
  "&&",
];

const codeParticleData = Array.from({ length: 46 }, (_, index) => {
  const azimuth = seededRandom(index + 11) * Math.PI * 2;

  const vertical = seededRandom(index + 29) * 2 - 1;

  const horizontal = Math.sqrt(1 - vertical * vertical);

  const longLaunch = seededRandom(index + 53) > 0.76 ? 1.65 : 1;

  const distance = (0.7 + seededRandom(index + 79) * 2.25) * longLaunch;

  return {
    id: index,

    position: [
      Math.cos(azimuth) * horizontal * distance,

      vertical * distance,

      Math.sin(azimuth) * horizontal * distance,
    ],

    symbolIndex: index % codeSymbols.length,

    size: 0.3 + seededRandom(index + 101) * 0.22,

    rotation: (seededRandom(index + 127) - 0.5) * Math.PI,
  };
});

function CameraRig() {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 9.05));

  useFrame(({ camera, pointer }, delta) => {
    cameraTarget.current.set(pointer.x * 0.38, pointer.y * 0.28, 9.05);

    camera.position.lerp(cameraTarget.current, 1 - Math.exp(-delta * 2.5));

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SupernovaRays({ birth }) {
  const raysRef = useRef(null);

  useFrame(({ clock }) => {
    if (!raysRef.current) return;

    const elapsed = clock.getElapsedTime();

    raysRef.current.rotation.x = Math.sin(elapsed * 0.24) * 0.15;

    raysRef.current.rotation.y = elapsed * 0.075;

    raysRef.current.rotation.z = Math.cos(elapsed * 0.2) * 0.12;
  });

  return (
    <group ref={raysRef}>
      {rayData.map((ray) => {
        const localBirth = THREE.MathUtils.clamp(
          (birth - ray.delay) / 0.55,
          0,
          1,
        );

        const rayScale = 1 - Math.pow(1 - localBirth, 4);

        return (
          <group
            key={ray.id}
            quaternion={ray.quaternion}
            scale={[1, rayScale, 1]}
          >
            <mesh position={[0, ray.length / 2, 0]}>
              <coneGeometry args={[ray.width, ray.length, 6, 1, true]} />

              <meshBasicMaterial
                color={ray.color}
                transparent
                opacity={0.28 + localBirth * 0.62}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function ExplosionParticles({ birth }) {
  const particlesRef = useRef(null);

  const textures = useMemo(() => {
    return codeSymbols.map((symbol, index) => {
      const canvas = document.createElement("canvas");

      canvas.width = 256;
      canvas.height = 128;

      const context = canvas.getContext("2d");

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "700 64px monospace";

      const isLime = index % 4 === 0;

      context.shadowBlur = 8;

      context.shadowColor = isLime
        ? "rgba(163, 255, 18, 0.95)"
        : "rgba(56, 189, 248, 0.95)";

      context.fillStyle = isLime ? "#a3ff12" : "#8be9ff";

      context.fillText(symbol, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);

      texture.colorSpace = THREE.SRGBColorSpace;

      texture.needsUpdate = true;

      return texture;
    });
  }, []);

  useEffect(() => {
    return () => {
      textures.forEach((texture) => {
        texture.dispose();
      });
    };
  }, [textures]);

  useFrame(({ clock }) => {
    if (!particlesRef.current) return;

    const elapsed = clock.getElapsedTime();

    particlesRef.current.rotation.x = Math.sin(elapsed * 0.17) * 0.12;

    particlesRef.current.rotation.y = elapsed * 0.085;

    particlesRef.current.rotation.z = Math.cos(elapsed * 0.14) * 0.08;

    const expansion = 0.08 + birth * 1.22 + Math.sin(elapsed * 1.8) * 0.018;

    particlesRef.current.scale.setScalar(expansion);
  });

  return (
    <group ref={particlesRef}>
      {codeParticleData.map((particle) => (
        <sprite
          key={particle.id}
          position={particle.position}
          scale={[particle.size * 1.9, particle.size, 1]}
          renderOrder={20}
        >
          <spriteMaterial
            map={textures[particle.symbolIndex]}
            transparent
            opacity={1}
            rotation={particle.rotation}
            blending={THREE.NormalBlending}
            depthTest={false}
            depthWrite={false}
            toneMapped={false}
          />
        </sprite>
      ))}
    </group>
  );
}

function Supernova({ active, onBorn }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);

  const shockwaveRef = useRef(null);
  const shockwaveMaterialRef = useRef(null);

  const startedAt = useRef(null);
  const announcedBirth = useRef(false);

  const [birth, setBirth] = useState(0);

  useFrame(({ clock }, delta) => {
    if (!active) return;

    const elapsed = clock.getElapsedTime();

    if (startedAt.current === null) {
      startedAt.current = elapsed;
    }

    const timeline = elapsed - startedAt.current;

    const progress = THREE.MathUtils.clamp(timeline / 1.65, 0, 1);

    const explosiveBirth = 1 - Math.pow(1 - progress, 4);

    setBirth(explosiveBirth);

    if (!announcedBirth.current && progress > 0.58) {
      announcedBirth.current = true;
      onBorn();
    }

    if (groupRef.current) {
      const pulse = 1 + Math.sin(elapsed * 2.6) * (0.018 + progress * 0.025);

      groupRef.current.scale.setScalar(Math.max(0.025, explosiveBirth) * pulse);

      groupRef.current.rotation.y += delta * 0.12;

      groupRef.current.rotation.x += delta * 0.035;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.18;

      coreRef.current.rotation.z += delta * 0.08;
    }

    if (shockwaveRef.current && shockwaveMaterialRef.current) {
      const waveProgress = THREE.MathUtils.clamp(
        (timeline - 0.32) / 1.15,
        0,
        1,
      );

      shockwaveRef.current.scale.setScalar(0.4 + waveProgress * 4.2);

      shockwaveMaterialRef.current.opacity = (1 - waveProgress) * 0.72;
    }
  });

  return (
    <>
      <group ref={groupRef} scale={0.025}>
        <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.18}>
          <mesh ref={coreRef}>
            <icosahedronGeometry args={[0.82, 12]} />

            <MeshDistortMaterial
              color="#061a36"
              emissive="#38bdf8"
              emissiveIntensity={2.6}
              roughness={0.2}
              metalness={0.5}
              distort={0.34}
              speed={3.2}
            />
          </mesh>

          <mesh scale={1.16} visible={false}>
            <icosahedronGeometry args={[0.82, 3]} />

            <meshBasicMaterial
              color="#8be9ff"
              wireframe
              transparent
              opacity={0.32}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>

          <mesh scale={1.34} visible={false}>
            <sphereGeometry args={[0.82, 48, 48]} />

            <meshBasicMaterial
              color="#087cff"
              transparent
              opacity={0.13}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </Float>

        <SupernovaRays birth={birth} />

        <ExplosionParticles birth={birth} />

        <pointLight color="#38bdf8" intensity={16} distance={9} />

        <pointLight
          position={[0.5, 0.4, 1]}
          color="#a3ff12"
          intensity={5}
          distance={4}
        />
      </group>

      <mesh ref={shockwaveRef} rotation={[Math.PI / 2.4, 0.18, 0]}>
        <ringGeometry args={[0.72, 0.76, 128]} />

        <meshBasicMaterial
          ref={shockwaveMaterialRef}
          color="#75ddff"
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

function FireScene({ active, onBorn }) {
  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.18} />

      <directionalLight position={[3, 4, 5]} intensity={2.2} />

      <Sparkles
        count={110}
        scale={[6, 6, 4]}
        size={1.8}
        speed={0.35}
        opacity={0.65}
        color="#75ddff"
      />

      <Supernova active={active} onBorn={onBorn} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.45}
          luminanceThreshold={0.38}
          luminanceSmoothing={0.42}
          mipmapBlur
        />
      </EffectComposer>

      <AdaptiveDpr pixelated />
    </>
  );
}

export function FireballScene() {
  const containerRef = useRef(null);

  const [active, setActive] = useState(false);

  const [born, setBorn] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.42,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <FireballContainer ref={containerRef}>
      <FireballCanvas>
        <Canvas
          camera={{
            position: [0, 0, 9.05],
            fov: 46,
          }}
          dpr={[1, 1.6]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0);
          }}
        >
          <FireScene active={active} onBorn={() => setBorn(true)} />
        </Canvas>
      </FireballCanvas>

      <FireballLabel $visible={born}>
        <FireballSubtitle>PRIMEIRO</FireballSubtitle>

        <FireballTitle>SIM</FireballTitle>
      </FireballLabel>
    </FireballContainer>
  );
}
