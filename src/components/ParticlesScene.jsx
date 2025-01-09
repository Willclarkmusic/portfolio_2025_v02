import * as THREE from "three";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { useFrame } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";

import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { ParticleLighting, RenderFX } from "../components/RenderManager";
import { MobileParams } from "../components/ScrollManager";

const { isTablet, isMobile } = MobileParams();

const DisableRender = () => useFrame(() => null, 1000);

// const connectors = useMemo(() => shuffle(accent), [accent]);
function ParticleSystem(props) {
  const { viewRef, inView } = useInView();
  return (
    <div ref={viewRef} className="size-full">
      <Canvas
        className="overflow-hidden"
        flat
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={
          isMobile
            ? { position: [0, -40, 60], fov: 28, near: 5, far: 200 }
            : { position: [0, -20, 50], fov: 20, near: 10, far: 100 }
        }
      >
        {!inView && <DisableRender />}
        <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
          <Pointer />

          {baubles.map((props, i) => (
            <BallLights key={i} {...props} mat={baubleMaterial} />
          ))}

          {baubles2.map((props, i) => (
            <BallLights key={i} {...props} mat={baubleMaterial2} />
          ))}
        </Physics>
        <ParticleLighting />
        <RenderFX />
      </Canvas>
    </div>
  );
}
export default ParticleSystem;

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  // const globalEnvMap = tre;
  useFrame(({ pointer, viewport }) => {
    vec.lerp(
      {
        x: (pointer.x * viewport.width) / 2,
        y: (pointer.y * viewport.height) / 2,
        z: 0,
      },
      0.2
    );
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody
      position={[0, 0, 50]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
      <mesh castShadow receiveShadow scale={2} geometry={sphereGeometry}>
        <MeshTransmissionMaterial
          meshPhysicalMaterial={true}
          transmissionSampler={false}
          backside={false}
          samples={32}
          transmission={0.99}
          clearcoat={1}
          thickness={4}
          anisotropicBlur={0.1}
          distortion={0.3}
          distortionScale={0.1}
          temporalDistortion={1}
        />
      </mesh>
    </RigidBody>
  );
}

THREE.ColorManagement.legacyMode = false;
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const baubles = [...Array(50)].map(() => ({
  scale: [0.75, 0.85, 1, 1.15, 1.5][Math.floor(Math.random() * 5)],
}));

const baubles2 = [...Array(50)].map(() => ({
  scale: [0.75, 0.85, 1, 1.15, 1.7][Math.floor(Math.random() * 5)],
}));

const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#219B9D",
  emissive: "#219B9D",
  emissiveIntensity: 2,
  metalness: 0.8,
  roughness: 0.5,
});
const baubleMaterial2 = new THREE.MeshStandardMaterial({
  color: "#1B1833",
  emissive: "#1B1833",
  metalness: 0.8,
  roughness: 0.5,
});

function BallLights({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  mat = baubleMaterial,
  offset = -25,
}) {
  const api = useRef();
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });
  return (
    <RigidBody
      linearDamping={1}
      angularDamping={0.15}
      friction={0.1}
      position={[r(20), r(20) - offset, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={mat}
      />
    </RigidBody>
  );
}
