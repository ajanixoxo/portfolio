/* eslint-disable react/jsx-no-target-blank */
import './about.scss'
import Animate from '../AnimateLetters/animate.jsx'
import { useState, useEffect, useMemo } from 'react'
import logob from '/assets/img/logob.png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadStarsPreset} from '@tsparticles/preset-stars';
import {loadFireflyPreset} from '@tsparticles/preset-firefly';
import Loader from 'react-loaders'

function About() {
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
      await loadFireflyPreset(engine);
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
if(init){
  return (
    <>
     <div className='container about-page'>
     
       {/* <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        /> */}
        <div className='text-zone'>
            <h1 >
                <Animate letterClass={letterClass} strArray={['K', 'n', 'o', 'w', ' ', ' A', 'b', 'o', ' u', 't', ' ', ' A', 'd', 'e']} idx={15} />
            </h1>
            <p className="text-par">
            I am currently open to work as a Full Stack Web Developer (MERN) in an IT company to enhance my skills and gain real-world experience. Passionate about building, testing, and solving challenges, I look forward to contributing to the tech space. I'm eager to bring my MERN stack skills to a dynamic team, make a positive impact,
             and thrive in a fast-paced IT environment, aiming to improve technological advancement in Nigeria and Africa. Though I have no team experience, I am confident in my problem-solving skills and eager to collaborate.
            </p>
            {/* <p className="text-par">My Hobbies: I Love Coding, I Love Playing Game(FPS, RGP, Adventure and Fighting), Listening to Music,Having Conversation e.t.c.  </p> */}
          
       
     
        <img  src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,react,git,bootstrap,tailwind,typescript"  className='icons' alt="skill-icon" />
       
    
     
      
        </div>

        <div className='img-container'>
        <div className='about-img'></div>
        
        </div>
     <script src="/src/components/about/about.js"></script>
    </div>
    <Loader type="ball-scale-multiple" />
    </>
   
)
}
   
}

export default About