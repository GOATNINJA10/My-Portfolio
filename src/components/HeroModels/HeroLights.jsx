import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
      {/* Soft white ambient base */}
      <ambientLight 
        intensity={0.6}
        color="#f8faff"
      />

      {/* Main directional light - soft blue tint */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        color="#e6f2ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />

      {/* Subtle fill light from the front */}
      <directionalLight
        position={[-3, 5, 5]}
        intensity={0.4}
        color="#e6f5ff"
      />

      {/* Soft rim light for depth */}
      <directionalLight
        position={[0, 5, -5]}
        intensity={0.3}
        color="#e6f0ff"
      />

      {/* Subtle blue ambient fill */}
      <hemisphereLight 
        args={["#e6f5ff", "#e6ecf5"]}
        intensity={0.5}
      />

      {/* Subtle point light for highlights */}
      <pointLight
        position={[3, 4, 2]}
        intensity={0.4}
        color="#e6f0ff"
        distance={10}
        decay={2}
      />
    </>
  )
}

export default HeroLights