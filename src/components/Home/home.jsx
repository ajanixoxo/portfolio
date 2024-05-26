import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.scss'
import { useEffect, useState, useMemo, } from 'react'
import { Link } from 'react-router-dom'
import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import Animate from '../AnimateLetters/animate.jsx'
import a_logo from '/assets/img/a_logo.png'
import Logo from './Logo/logo.jsx'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Loader from 'react-loaders'
function Home() {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['    ', 'A', ' d', 'e', 'o', 'l', 'u', 'w', 'a']
  const jobArray = ['A', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k,', ' ', 'W', 'e', 'b', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
            <span className={letterClass}>Y</span>
            <span className={`${letterClass} _10 `}>o</span>
            <span className={`${letterClass} _11`}>o!</span>
            <span className={`${letterClass} _12`}>&#128526;</span><br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m  </span>
            <span> </span>
            <span>  </span>
            {/* <img src={a_logo} alt='logo' className='text-animate-hover' /> */}
            <Animate letterClass={letterClass} strArray={nameArray} className="second" idx={15} />
          </h1>

          <h2><Animate letterClass={letterClass} strArray={jobArray} idx={23} />
          </h2>
          <ul className='stack-icons'>
            <li><FontAwesomeIcon icon={faHtml5} /></li>
            <li><FontAwesomeIcon icon={faCss3} /></li>
            <li><FontAwesomeIcon icon={faBootstrap} /></li>
            <li><FontAwesomeIcon icon={faJs} /></li>
            <li><FontAwesomeIcon icon={faNodeJs} /></li>
            <li><FontAwesomeIcon icon={faReact} /></li>
            <li><FontAwesomeIcon icon={faPhp} /></li>

          </ul>
         
          <Link to='/contact' className='hero-link'>Reach Me</Link>
        </div>
        { <Logo /> }
        <script src="/assets/js/script.js"></script>
      </div >
      <Loader type="ball-scale-multiple" />
      </>
    
    )
  }
}

export default Home