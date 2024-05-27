import './project.scss'
import Animate from '../AnimateLetters/animate.jsx'
import { useState, useEffect, useMemo } from 'react'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from '@tsparticles/preset-triangles'
import { loadFireflyPreset } from '@tsparticles/preset-firefly';
import Loader from 'react-loaders'
import project from '/assets/img/project/p1.png'
import cs from '/assets/img/project/cs.jpg'
import p2 from '/assets/img/project/p2.png'
import p3 from '/assets/img/project/p3.png'

function Project() {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

  }, [])
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadStarsPreset(engine);
      await loadTrianglesPreset(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
        <div className='container project-page'>
          <div className='text-zone'>
            <h1 className='project-h1' >
              <Animate letterClass={letterClass} strArray={['A', 'd', 'e', " 's", ' ', 'P', 'r', 'o', ' j', 'e', 'c', 't', 's']} idx={15} />
            </h1>
            <p className='text-par'>Here are some few projects I have develop so far.Let me know if you have any questions or suggestions😊.You can check Github for the repo </p>
            <p></p>
          </div>
          <div className='project-container'>
            <ul>

              <li>
               <a href='https://nina-sglowstore.onrender.com/'>
               <img src={project} alt="Web App Image 1" />
                </a> 
                  <p>A Full Stack E-commerce skincare website built on Node.js, Express, and  Ejs</p>
              </li>


              <li>
                <a href='https://bukkyola.pxxl.space/'>
                <img src={p2} alt="Web App Image 2" />

                </a>
                  <p>A Clients Portifolio</p>
              </li>
              <li>
                <a href='https://furniture-q47n.onrender.com/'>
                <img src={p3} alt="Web App Image 2" />

                </a>
                  <p>A Mini Furniture Website</p>
              </li>
              <li>
                <a href=''>
                <img src={cs} alt="Web App Image 2" />

                </a>
                  <p>coming soon...</p>
              </li>
              <li>
                <a href=''>
                <img src={cs} alt="Web App Image 2" />

                </a>
                  <p>coming soon...</p>
              </li>
              <li>
                <a href=''>
                <img src={cs} alt="Web App Image 2" />

                </a>
                  <p>coming soon...</p>
              </li>
            </ul>

          </div>
        </div>
        <Loader type='ball-scale-multiple' /></>

    )
  }

}

export default Project