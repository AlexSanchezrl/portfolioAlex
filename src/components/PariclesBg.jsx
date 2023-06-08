import React,{ useCallback } from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from './config/ParticlesConfig';
import {loadFull} from 'tsparticles'


const ParticlesBg = () => {

    const particleInit = useCallback((engine) =>{

        loadFull(engine)

    },[])

    return (


    <div>

        <Particles
        
        init={particleInit}
        options={ParticlesConfig}
        
        />


    </div>
  )
}

export default ParticlesBg