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
      {/* <div id="myCanvasContainer">
     
        <canvas width="500" height="500" id="myCanvas"><ul>   JL;KSJDKLjskldj;LKDSJ;LKdslk
            <li>
              <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a>
            </li>
            <li>
              <a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS3</a>
            </li>
            <li>
              <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
            </li>
            <li>
              <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">TypeScript</a>
            </li>
            <li>
              <a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>
            </li>
            <li>
              <a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>
            </li>
            <li>
              <a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">React</a>
            </li>
            <li>
              <a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS" target="_blank">Angular 2+</a>
            </li>
            <li>
              <a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress" target="_blank">JavaScript</a>
            </li>
            <li>
              <a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Jasmine</a>
            </li>
            <li>
              <a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a>
            </li>
            <li><a data-weight="17" href="" target="_blank">_lodash</a></li>
            <li>
              <a data-weight="23" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank">Bootstrap</a>
            </li>
            <li>
              <a data-weight="15" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a>
            </li>
            <li>
              <a data-weight="20" href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">RxJs</a>
            </li>
            <li>
              <a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a>
            </li>
            <li>
              <a data-weight="19" href="http://mongoosejs.com/" target="_blank">Webpack</a>
            </li>
            <li>
              <a data-weight="19" href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a>
            </li>
            <li>
              <a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a>
            </li>
            <li>
              <a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a>
            </li>
            <li>
              <a data-weight="19" href="https://bower.io/" target="_blank">Bower</a>
            </li>
            <li>
              <a data-weight="19" href="https://en.wikipedia.org/wiki/BEM" target="_blank">BEM</a>
            </li>
          </ul></canvas>
      </div> */}
       <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
        <div className='text-zone'>
            <h1 >
                <Animate letterClass={letterClass} strArray={['K', 'n', 'o', 'w', ' ', ' A', 'b', 'o', ' u', 't', ' ', ' A', 'd', 'e']} idx={15} />
            </h1>
            <p className="text-par">
            Well I am currently open to work for an IT Company  Full Stack Web Developer (MERN) because, I need make sure I futhermore enhace my skils for the real world out there
                 Passionate about building, testing, ,solving
                challenges and also eating the free foods the IT Company offers, I look forward to contributing to the tech space's
                progress. Ready to bring my skills in the MERN stack to a dynamic team, I'm excited about
                the opportunity to make a positive impact and thrive in a fast-paced IT environment and To Improve Technological Advancement in Nigeria and Africa
            </p>
            <p className="text-par">I'm confident in my problem-solving skills and eager to enhance them while collaborating with teams tho I have no experience working with teams  </p>
            <p className="text-par">My Hobbies: I Love Coding, I Love Playing Game(FPS, RGP, Adventure and Fighting), Listening to Music,Having Conversation e.t.c.  </p>
          <p className="logos">
           <p>Tech Stack I use</p> 
        <ul className='stack-icons icons'>
     
        <li><img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,react,git,bootstrap"  className='icons' alt="skill-icon" /> </li>
        {/* <li><img src="https://skillicons.dev/icons?i=css"  alt="skill-icon" /> </li> */}
        {/* <li className=""><img src="https://skillicons.dev/icons?i=js" alt="skill-icon" /></li> */}
        {/* <li className=""><img src="https://skillicons.dev/icons?i=nodejs" alt="skill-icon" /></li>
        <li className=""><img src="https://skillicons.dev/icons?i=express" alt="skill-icon" /></li>
        <li className=""><img src="https://skillicons.dev/icons?i=react" alt="skill-icon" /></li>
        <li className=""><img src="https://skillicons.dev/icons?i=git" alt="skill-icon" /></li>
        <li className=""><img src="https://skillicons.dev/icons?i=bootstrap" alt="skill-icon" /></li>
        <li className=""><img src="https://skillicons.dev/icons?i=mongod" alt="skill-icon" /></li><br/> */}
    
      </ul>
      
          </p>
          <p className="logos">
          
          </p>
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