import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.scss'
import { useEffect, useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import Animate from '../AnimateLetters/animate.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { motion } from "framer-motion"
import { loadSlim } from "@tsparticles/slim";
import Loader from 'react-loaders'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
// import { CustomEase } from "gsap/CustomrEase";
// import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";  
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);
function Home() {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['    ', 'A', 'D', 'E', 'O', 'L', 'U', 'W', 'A']
  const jobArray = ['A', ' ', 'M', 'E', 'R', 'N', ' ', 'S', 't', 'a', 'c', 'k',  ' ' ,  'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
   
  }, [])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
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
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    AOS.init();
    AOS.refresh();
    
  }, []);
  const container = useRef()

  useGSAP(
    () => {
        // gsap code here...
        gsap.to('.box', { rotation: 180 }); // <-- automatically reverted
    },
    { scope: container }
); // <-- scope for selector text (optional)

  if (init) {
    return (
      <>  <div className='container2 hero-page'>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />

<div ref={container} className="app">
            <div className="box">Hello</div>
        </div>

        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _10 `}>e</span>
            <span className={`${letterClass} _11`}>y!</span> */}
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}> 'm  </span>
            {/* <h1 className={`${letterClass} _15`}> A  </h1> */}
            
   
            {/* <img src={a_logo} alt='logo' className='text-animate-hover' /> */}
            <Animate 
             strArray={nameArray} className={`${letterClass}`}  idx={15} 
            
            />
          </h1>

          <h2  >
            <Animate  strArray={jobArray} idx={23} />

          <p className='hero-info' 
          data-aos="fade-up"
          >with a love for creating dynamic and responsive web applications. </p>

          </h2>
          <div className='stack-icons'>
        
            <Link to='/contact' className='hero-link'>Reach Me</Link>
          </div>
         
        </div>
      
       

        <script src="/assets/js/script.js"></script>
      </div >
      <Loader type="ball-scale-multiple" />
      </>
    
    )
  }
}

export default Home