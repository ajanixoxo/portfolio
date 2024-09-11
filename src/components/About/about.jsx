/* eslint-disable react/jsx-no-target-blank */
import './about.scss'
import Animate from '../AnimateLetters/animate.jsx'
import { useState, useEffect, useMemo, useRef, } from 'react'
import logob from '/assets/img/logob.png'
import question from '/assets/img/question.png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { loadFireflyPreset } from '@tsparticles/preset-firefly';
import Loader from 'react-loaders'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import anime from 'animejs/lib/anime.es.js';
gsap.registerPlugin(useGSAP);
function About() {
  const [init, setInit] = useState(false);
  const [opacity, setOpacity] = useState("none")
  const [letterClass, setLetterClass] = useState('text-animate')
  const solidLogoRef = useRef();
  const [outlineAnimationDuration, setOutlineAnimationDuration] = useState(20);
  useEffect(() => {
    // gsap.registerPlugin(DrawSVGPlugin);

    // const tl = gsap.timeline();

    // tl.to(bgRef.current, {
    // 	duration: 1,
    // 	opacity: 1,
    // }).from(outlineLogoRef.current, {
    // 	drawSVG: 0,
    // 	duration: outlineAnimationDuration,
    // });
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.7,
        delay: 3,
        duration: 3,
      }
    )

    // Commented out this part to prevent hiding the drawing
    // gsap.fromTo(
    //   solidLogoRef.current,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 6,
    //     duration: 4,
    //   }
    // );
  }, [outlineAnimationDuration]);

  // Change the outline animation duration to 10 after 2 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOutlineAnimationDuration(10);
    }, 2000);
    const display = setTimeout(() => {
      setOpacity("flex");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    anime({
      targets: '#path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 4000,
      loop: false,
      direction: 'normal',
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

  }, [])
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFireflyPreset(engine);
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
        <div className='container about-page flex justify-center md:justify-start items-center flex-col md:flex-row mx-2'>

          <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
          <div className='text-zone text-white flex flex-col justify-center md:justify-start gap-3 items-start  md:mx-13 z-20 md:px-10'>
            <h5 className='tags top-tags py-2' >&lt;h1&gt; </h5> <h1 className="main-text w-max text-[30px] md:text-[40px]" >
              &nbsp;&nbsp;&nbsp;&nbsp;<Animate letterClass={letterClass} strArray={['K', 'n', 'o', 'w', ' ', ' A', 'b', 'o', ' u', 't', ' ', ' A', 'd', 'e']} idx={15} />
            </h1>
            <h5 className='tags top-tags py-2' >&lt;/h1&gt; </h5>
            <h5 className='tags top-tags py-2' >&lt;p&gt; </h5>
            <p className="basic-text w-[350px] text-sm md:text-base md:w-3/5 md:ml-10">
            I'm a passionate Full Stack Web Developer (MERN) seeking a role in an IT company to enhance my skills, gain experience, and contribute to technological advancement in Nigeria and Africa, despite having no prior team experience.
            In my free time you will find me playing video games, listening to music, sleeping, chatting or watching movies.
            </p>
            <h5 className='tags top-tags py-2' >&lt;/p&gt; </h5>
            <div className="">
           <div className="stack frontend mb-2"><span className="text-[20px] font-bold ">Frontend Tools: </span>
           <p className="text-[12px] md:text-[16px] font-semibold mb-2">HTML,CSS,JavaScript,React,NextJS,Bootstrap,Tailwind and Typescript</p>
           <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,bootstrap,tailwind,typescript" className='w-[300px] md:w-auto' alt="skill-icon" />
           </div>
           <div className="stack backend  mb-2 "><span className="text-[20px] font-bold ">Backend Tools:</span>
           <p className="text-[12px] md:text-[16px] font-semibold mb-2">NodeJS, ExpressJS, Django,PHP</p>
           <img src="https://skillicons.dev/icons?i=nodejs,express,django,php" className='w-[200px] md:w-auto' alt="skill-icon" />
           </div>
           <div className="stack general-tools"><span className="text-[20px] font-bold ">General Development:</span>
           <p className="text-[12px] md:text-[16px] font-semibold mb-2  md:w-auto ">Git,Linux,Threejs,Figma,VScode,MongoDB,MySQL,Firebase</p>
           <img src="https://skillicons.dev/icons?i=git,linux,threejs,figma,vscode,mongodb,mysql,firebase" className='w-[300px] md:w-auto' alt="skill-icon" />
           </div>
           
</div>
          </div>
          <div className="absolute w-[90%] md:w-[50%] md:right-14">
            <div className='img-container flex justify-center items-center'>
              <img ref={solidLogoRef} className="solid-logo2 solid-logo w-70  absolute  md:top-[13px] opacity-5 md:opacity-100" src={question} style={{ display:`${opacity} `}} alt='' />
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt" height="400.000000pt" viewBox="0 0 300.000000 400.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                  fill="white" stroke="white">
                                <path id="path" fill="transparent" stroke="transparent" strokeWidth="6" d="M1340 3816 c-138 -22 -209 -43 -325 -99 -60 -30 -135 -64 -165 -78
              -30 -13 -77 -38 -105 -56 -27 -18 -56 -33 -63 -33 -7 0 -17 -10 -23 -22 -6
              -13 -26 -34 -45 -48 -77 -55 -153 -204 -175 -341 -17 -104 -18 -431 -1 -451
              13 -17 160 -27 412 -29 l135 -1 18 33 c11 19 40 62 66 97 25 34 61 84 79 110
              62 86 164 222 168 222 2 0 24 -9 49 -21 48 -23 74 -53 126 -144 33 -59 34 -63
              34 -175 0 -114 0 -116 -41 -200 -49 -101 -154 -243 -323 -438 -143 -163 -149
              -173 -179 -266 -33 -99 -43 -200 -40 -370 l3 -150 80 -18 c44 -9 161 -33 260
              -52 99 -19 203 -42 230 -51 l51 -17 96 55 c54 31 132 80 175 110 43 30 93 62
              110 71 l33 16 -6 193 c-4 149 -1 215 11 292 43 268 75 337 269 574 93 114 138
              204 167 336 28 131 23 234 -19 363 -29 90 -104 232 -122 232 -5 0 -32 29 -62
              64 -87 105 -238 209 -362 251 -139 46 -365 64 -516 41z m380 -40 c112 -21 244
              -73 301 -118 28 -22 65 -49 83 -62 36 -24 131 -133 161 -183 11 -18 23 -33 27
              -33 12 0 48 -77 80 -170 37 -110 46 -208 25 -291 -8 -35 -20 -86 -27 -114 -21
              -93 -56 -152 -171 -291 -114 -137 -184 -261 -212 -374 -30 -125 -46 -283 -46
              -464 0 -98 -2 -180 -3 -181 -2 -1 -59 -39 -127 -84 -157 -105 -222 -144 -230
              -136 -8 9 -3 174 10 317 18 204 42 265 170 423 309 382 411 641 372 944 -7 62
              -21 133 -29 156 -27 81 -118 216 -210 314 -77 81 -109 106 -200 158 -150 86
              -227 105 -414 107 -80 0 -171 -2 -202 -7 -34 -4 -58 -3 -58 2 0 17 206 75 360
              101 69 11 242 4 340 -14z m-265 -133 c44 -8 84 -19 90 -24 5 -5 16 -9 25 -9
              28 0 173 -91 242 -152 87 -77 153 -160 215 -273 67 -120 78 -168 77 -350 -1
              -135 -3 -158 -27 -227 -58 -169 -180 -382 -296 -518 -106 -123 -166 -219 -190
              -299 -19 -65 -40 -277 -42 -413 -1 -117 -1 -120 -23 -114 -41 12 -142 35 -236
              54 -52 11 -143 30 -202 43 l-108 22 -2 66 c-1 36 -2 81 -3 98 -4 73 16 236 36
              295 35 102 51 125 191 287 73 84 140 163 147 175 8 11 45 62 82 111 45 61 78
              120 104 185 36 93 37 98 33 200 -4 103 -5 108 -49 184 -72 128 -153 179 -269
              172 -91 -5 -197 -66 -245 -140 -20 -30 -47 -230 -39 -284 l7 -45 -224 7 c-123
              4 -238 7 -256 7 -27 0 -33 5 -38 31 -11 46 5 343 22 428 23 118 81 228 156
              295 76 69 145 116 219 149 136 60 401 78 603 39z m-185 -519 c0 -3 -26 -41
              -57 -84 -32 -42 -93 -128 -137 -189 -43 -62 -80 -110 -83 -108 -7 7 24 209 37
              243 22 56 81 100 175 130 45 14 65 17 65 8z"/>
                                <path id="path" fill="transparent" stroke="transparent" strokeWidth="6" d="M1365 1159 c-23 -37 -297 -189 -367 -204 l-28 -5 -2 -103 c0 -56 -1
              -109 0 -117 1 -8 4 -87 7 -174 3 -88 6 -160 8 -161 5 -2 357 -85 424 -100 40
              -8 83 -15 97 -15 15 0 26 -4 26 -10 0 -18 25 -11 92 24 59 30 120 70 337 216
              l64 44 -8 195 c-5 108 -9 226 -10 262 -2 76 -9 93 -37 85 -11 -2 -75 2 -142
              10 -66 8 -159 19 -206 25 -47 5 -92 11 -100 14 -8 2 -37 7 -65 10 -27 4 -57 8
              -67 11 -9 3 -19 0 -23 -7z m175 -47 c140 -21 312 -42 346 -42 39 0 45 -15 12
              -26 -13 -4 -25 -10 -28 -14 -3 -4 -43 -27 -90 -52 -47 -24 -117 -65 -156 -91
              -68 -44 -73 -46 -100 -33 -16 8 -74 22 -129 32 -55 10 -147 27 -204 39 l-104
              21 58 29 c33 15 100 57 149 92 101 71 88 68 246 45z m434 -204 c3 -73 9 -179
              12 -235 5 -84 4 -103 -7 -103 -8 0 -37 -17 -65 -39 -94 -71 -331 -221 -350
              -221 -1 0 -3 112 -3 248 l-2 248 93 57 c153 94 292 175 304 176 8 1 14 -43 18
              -131z m-859 -3 c39 -8 140 -28 225 -44 85 -16 162 -32 170 -35 13 -6 16 -44
              19 -262 l3 -257 -39 7 c-64 12 -344 75 -413 94 l-65 17 -8 214 c-5 118 -6 230
              -2 248 7 38 12 39 110 18z"/>
                </g>
              </svg>


            </div>
          </div>
          <script src="/src/components/about/about.js"></script>
        </div>
        <Loader type="ball-scale-multiple" />
      </>

    )
  }

}

export default About