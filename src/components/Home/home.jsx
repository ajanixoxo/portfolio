import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.scss'
import { useEffect, useState, useMemo, } from 'react'
import { Link } from 'react-router-dom'
import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import Animate from '../AnimateLetters/animate.jsx'
import a_logo from '/assets/img/a_logo.png'
import Logo from './Logo/logo.jsx'
import Lottie from "lottie-react";
import hero_img from '/assets/img/hero-img (2).png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Loader from 'react-loaders'
function Home() {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['    ', 'A', ' D', 'E', 'O', 'L', 'U', 'W', 'A']
  const jobArray = ['A', ' ', 'M', 'e', 'r', 'n', ' ', 'S', 't', 'a', 'c', 'k',  ' ' ,  'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
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


  if (init) {
    return (
      <>  <div className='container2 hero-page'>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />



        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10 `}>e</span>
            <span className={`${letterClass} _11`}>y!</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m  </span>
            
   
            {/* <img src={a_logo} alt='logo' className='text-animate-hover' /> */}
            <Animate letterClass={letterClass} strArray={nameArray} className="second" idx={15} />
          </h1>

          <h2><Animate letterClass={letterClass} strArray={jobArray} idx={23} />

          <p className='hero-info'>with a love for creating dynamic and responsive web applications. </p>

          </h2>
          <div className='stack-icons'>
            {/* <span><FontAwesomeIcon icon={faHtml5} /></span>
            <span><FontAwesomeIcon icon={faCss3} /></span>
            <span><FontAwesomeIcon icon={faBootstrap} /></span>
            <span><FontAwesomeIcon icon={faJs} /></span>
            <span><FontAwesomeIcon icon={faNodeJs} /></span>
            <span><FontAwesomeIcon icon={faReact} /></span> */}
           
            <Link to='/contact' className='hero-link'>Reach Me</Link>
          </div>
          {/* Dive into my portfolio to explore the projects I've built using MongoDB, Express.js, React, and Node.js. Whether you're here to learn more about my work, collaborate on a project, or just explore, I'm thrilled to have you here. Let's build something amazing together! */}
        
        </div>
        {/* { <Logo /> } */}
      <img className='hero-img' src={hero_img}  />
        <script src="/assets/js/script.js"></script>
      </div >
      <Loader type="ball-scale-multiple" />
      </>
    
    )
  }
}

export default Home