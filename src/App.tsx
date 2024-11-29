import { CameraControls, PerspectiveCamera, useFBO } from '@react-three/drei'
import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Mesh, Vector3 } from 'three'
import { OrthographicCamera } from '@react-three/drei'

function App() {
  function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // useFrame((_state, delta) => (meshRef.current.rotation.x += delta))
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(e) => { setActive(!active); e.stopPropagation() }}
        onPointerOver={(e) => { setHover(true); e.stopPropagation() }}
        onPointerOut={(e) => { setHover(false); e.stopPropagation() }}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color={hovered ? 'green' : '#2f74c0'} />
      </mesh>
    )
  }

  const positions = [[-1, 0, 0], [1, 0, 0], [2, 0, 0], [-2, 0, 0], [1, 0, 1], [-1, 0, -1], [0, 0, 0]]


  return (
    <>
      <Canvas>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 10]}
          zoom={40}
        />
        {/* <CameraControls maxAzimuthAngle={0.785398} minAzimuthAngle={0.785398} minPolarAngle={0.6154} maxPolarAngle={0.6154} /> */}
        {/* <CameraControls /> */}
        <CameraControls maxAzimuthAngle={0.785398} minAzimuthAngle={0.785398} minPolarAngle={0.95} maxPolarAngle={0.95} draggingSmoothTime={0.04} truckSpeed={0.1} />
        {/* <CameraControls maxAzimuthAngle={0.615472907} minAzimuthAngle={0.615472907} minPolarAngle={0.615472907} maxPolarAngle={0.615472907} /> */}
        <ambientLight intensity={Math.PI / 6} />
        <spotLight position={[2, 3, 2]} angle={0.785} penumbra={1} decay={0} intensity={Math.PI} />
        {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        {positions.map((coords, i) =>
          (<Box position={[coords[0], coords[1], coords[2]]} key={i} />)
        )}
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </>
  )
}

export default App
