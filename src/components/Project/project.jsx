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
import p4 from '/assets/img/project/p1.jpg'
import p5 from '/assets/img/project/p2.jpg'
import p6 from '/assets/img/project/p3.jpg'

function Project({ isExpanded, onClick }) {
  const [init, setInit] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageBlockClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

  }, [])
  useEffect(() => {
    initParticlesEngine(async (engine) => {


      await loadTrianglesPreset(engine);

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
    const projectLinks = [
      { src: project, link: 'https://nina-sglowstore.onrender.com/', description: 'A Full Stack E-commerce skincare website.' },
      { src: p2, link: 'https://bukkyola.pxxl.space/', description: 'A Client’s Portfolio' },
      { src: p3, link: 'https://furniture-q47n.onrender.com/', description: 'A Mini Furniture Website' },
    
    ];
    const appProjectLinks = [
      { src: p4, link: 'https://github.com/ajanixoxo/Pay-App', description: 'Defi Payment App Design.' },
      { src: p5, link: 'https://github.com/ajanixoxo/Romrro-Mobile-App-UI/', description: 'Piggy Saving App Design' },
      { src: p6, link: 'https://github.com/ajanixoxo/biba-Arts', description: 'A Pop Art App Design' },
    
    ];
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
        <div className='container project-page flex justify-center md:justify-start items-center md:items-start lg:items-center flex-col lg:flex-row  mx-2 w-full'>
          <div className='text-zone text-white w-full lg:w-1/2 justify-center md:justify-start gap-3 items-start  md:mx-13 z-20 md:px-10'>
          <h5 className='tags top-tags py-2' >&lt;h1&gt; </h5> 
           <h1 className='project-h1 main-text w-11/12  lg:w-9/12 text-[30px] md:text-[40px]' >
              <Animate letterClass={letterClass} strArray={['A', 'd', 'e', " 's", ' ', 'P', 'r', 'o', ' j', 'e', 'c', 't', 's', ' ', '&', ' ', 'W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={15} />
            </h1>
            <h5 className='tags top-tags py-2' >&lt;/h1&gt; </h5>
            <h5 className='tags top-tags py-2' >&lt;p&gt; </h5>
            <p className='text-par hero-info basic-text font-medium'>Here are some few projects and I have develop so far.Let me know if you have any questions or suggestions😊.You can check Github for the repo </p>
            <h5 className='tags top-tags py-2' >&lt;/p&gt; </h5>


          </div>
          <div className='project-container flex flex-col gap-2  md:flex-row lg:w-1/2 '>
            <div className=" w-full md:w-1/2 text-white basic-text text-[20px] font-bold "><h1 className="mb-2">Web Application Project</h1>
              <ul className="accordion w-full">

                {projectLinks.map((project, index) => (
                  <li
                    key={index}
                    className={`image-block w-full ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleImageBlockClick(index)}
                  >
                    <img src={project.src} alt={`Web App Image ${index + 1}`} className="w-full opacity-70 hover:opacity-100 h-52 object-contain bg-white" />
                    <a className='details text-white hero-info basic-text text-center text-sm ' href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.description}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
            <div className="w-full md:w-1/2 text-white basic-text text-[20px] font-bold ">
            <h1 className="  mb-2 ">Mobile Application Project</h1>
              <ul className="accordion w-full">

                {appProjectLinks.map((project, index) => (
                  <li
                    key={index}
                    className={`image-block w-full ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleImageBlockClick(index)}
                  >
                    <img src={project.src} alt={`Web App Image ${index + 1}`} className="w-full bg-white  opacity-70 hover:opacity-100 h-52 object-contain" />
                    <a className='details text-white hero-info basic-text text-center  text-sm' href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.description}
                    </a>
                  </li>
                ))}

              </ul>
            </div>



          </div>
        </div>
        <Loader type='ball-scale-multiple' /></>



    )
  }

}

export default Project