import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from '../../components/HeroModels/Room.jsx'
import HeroLights from './HeroLights'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024 px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
        <Canvas camera={{ position: [5, 2, 10], fov: 50 }}>

            <OrbitControls 
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 5}
            />

            <HeroLights />

            <group
              scale={isMobile ? 0.7 : 1}
              position={[0, 0, 0]}
            >
                <Room/>
            </group>
            
        </Canvas>
    )
}
export default HeroExperience
