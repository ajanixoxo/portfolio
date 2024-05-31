import Loader from 'react-loaders'
import './contact.scss'
import { useEffect, useState, useRef, useMemo } from 'react'
import Animate from '../AnimateLetters/animate'
import emailjs from '@emailjs/browser';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadFountainPreset} from '@tsparticles/preset-fountain';
import contact1 from '/assets/img/contact (3).png';

function Contact() {
    const refForm = useRef();
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

    }, [])
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        //await loadStarsPreset(engine);
        await loadFountainPreset(engine);
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
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hn6ekos', 'template_fxr2jff', refForm.current, 'cys9fSB6KTbJqgoz5')
          .then(() => {
               alert('Message sent successfully')
               window.location.reload(false)
          }, () => {
             alert('Failed to send, please try again')
          });
      };
      if(init){
        return (
        <>
           <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
            <div className='container2 contact-page'>
                <div className='text-zone'>
                    <h1>
                        <Animate letterClass={letterClass} strArray={['R', 'e', 'a', 'c', ' h', ' ', 'A', 'd', ' e']} idx={15} />
                    </h1>
                    <p className="text-par">I am open to work as a freelancer and to put my skills into real world projects.
                        You can contact me through the provided form below or the social
                         links in the nav bar</p>
                         <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                      
                                        <input type='text' name='name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li >
                                        <input type='text' name='subject' placeholder='Subject' required />
                                    </li>
                                    <li >
                                        <textarea name='message' placeholder='Message' required ></textarea>
                                    </li>
                                    <li>
                                        <input type='submit'  className='flat-button' value="SEND" />
                                    </li>
                                </ul>
                            </form>

                         </div>
                </div>
                <div className='contact_img'>
                  <img src={contact1} alt="" />
                </div>
            </div>
            <Loader type='ball-scale-multiple' />
        </>
    )
      }
    
}

export default Contact