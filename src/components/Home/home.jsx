import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.scss'
import { useEffect, useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/logo.jsx'
import Animate from '../AnimateLetters/animate.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import A from '/assets/img/A.png';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFountainPreset } from '@tsparticles/preset-fountain';
import { motion } from "framer-motion"
import { loadSlim } from "@tsparticles/slim";
import Loader from 'react-loaders'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

function Home() {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['    ', 'A', 'D', 'E', 'O', 'L', 'U', 'W', 'A']
  const jobArray = ['A', ' ', 'W', 'E', 'B',  ' ', '&', ' ', 'A', 'p', 'p', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']



  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFountainPreset(engine);
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
    console.log('Letter class before timeout:', letterClass);
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      console.log('Letter class after timeout:', letterClass);
    }, 6000);
  }, [letterClass]);

  const container = useRef()


  if (init) {
    return (
      <>
        <div className='container2 hero-page flex justify-center md:justify-start items-center flex-col md:flex-row '>

          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}

          />
          <div className="text-zone text-white flex flex-col justify-center md:justify-start items-start md mx-6 md:mx-14 z-20 md:px-10">
            <div>
              <h5 className='tags top-tags py-2' >&lt;h1&gt; </h5>

            </div>
            <h1 className="main-text w-max text-[30px] md:text-[40px]">
              &nbsp;&nbsp;  <span className={`${letterClass} _9`}>H</span>
              <span className={`${letterClass} _10`}>e</span>
              <span className={`${letterClass} _11`}>y!</span>
              <br />
              &nbsp;&nbsp; <span className={`${letterClass} _13`}>I&apos;</span>
              <span className={`${letterClass} _14 `}>m</span>
              <Animate
                letterClass={`${letterClass} main-text`} strArray={nameArray} idx={15} />
            </h1>
            <h2> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Animate strArray={jobArray} letterClass={`${letterClass} text-[19px]  md:text-[40px] main-text`} idx={23} /></h2>
            <h5 className='tags top-tags py-2' >&lt;h1&gt; </h5>
            <h5 className='tags top-tags py-2' >&lt;p&gt; </h5>
            <p className='hero-info basic-text text-center font-medium '  > &nbsp;&nbsp;&nbsp;&nbsp;with a love for creating dynamic and responsive Web Applications and Mobile Applications. </p>
            <h5 className='tags top-tags py-2' >&lt;/p&gt;</h5>
            <div className='stack-icons w-full flex justify-center md:justify-start ml-0 md:ml-4' >
              <div ref={container} className="app">
                {/* <div className="box">Hello</div> */}
              </div>

              <Link to='/contact' className='hero-link'>Reach Me</Link>
            </div>

          </div>
          <div className="absolute w-[90%] md:w-auto md:right-16">
            <Logo />
          </div>
          <script src="/assets/js/script.js"></script>
        </div >
        <Loader type="ball-scale-multiple" />
      </>

    )
  }
}

export default Home