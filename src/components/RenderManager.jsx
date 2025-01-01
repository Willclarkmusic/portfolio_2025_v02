import React from "react";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  N8AO,
  SMAA,
  TiltShift2,
} from "@react-three/postprocessing";

import { Environment, Lightformer } from "@react-three/drei";

export const RenderFX = () => {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        mipmapBlur
        levels={7}
        intensity={1}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300}
      />
      <Noise opacity={0.01} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
      <N8AO
        halfRes
        aoRadius={32}
        intensity={2}
        aoSamples={6}
        denoiseSamples={8}
        denoiseRadius={12}
        distanceFalloff={12}
      />
      {/* <TiltShift2 /> */}
      <SMAA />
    </EffectComposer>
  );
};

export const ParticleLighting = () => {
  return (
    <Environment resolution={256} ssgi={false}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer
          form="circle"
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[0, -3, -10]}
          scale={10}
        />
        <Lightformer
          form="circle"
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-5, 5, -10]}
          scale={2}
        />
        <Lightformer
          form="circle"
          intensity={5}
          rotation-y={-Math.PI / 2}
          position={[0, 10, 10]}
          scale={8}
        />
        <Lightformer
          form="circle"
          color="#4060ff"
          intensity={10}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
          position={[10, 10, 0]}
          scale={10}
        />
      </group>
    </Environment>
  );
};
