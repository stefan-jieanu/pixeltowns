import {
  Environment,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment
        files='/textures/envmap.hdr'
        background
      />

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
    </Suspense>
  )
}