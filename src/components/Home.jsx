import React from 'react';
import hmee from '../images/hmee.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin,FaReact,FaHtml5 , FaCss3} from 'react-icons/fa';
import real from '../images/real.jpg'
import nike from '../images/nike.jpg'
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
const Home = () => {
  const textVariant = {
    initial: { y: 0 },
    hover: {
      y: 10,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        duration: 0.5,
      },
    },
  };

  const imageVariant = {
    initial: { y: 0 },
    hover: { y: 10 },
  };

  return (
    <motion.div className='w-full h-full flex justify-center items-center pt-10'>
      <div className='max-w-5xl p-12 rounded-lg pt-[7rem]'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div
            className='md:w-1/2 flex flex-col justify-center items-center'
          >
            <motion.h1 className='text-4xl font-bold text-gray-800 mb-4'
            initial='initial'
            whileHover='hover'
            variants={textVariant}>
              Hello, I'm Shiwalik ッ
            </motion.h1>
            <motion.p className='text-lg text-[#001c55]'
            initial='initial'
            whileHover='hover'
            variants={textVariant}
            >
              I am a user experience designer who enjoys seamlessly bridging
              the gap between people and digital space by day, and a valorant
              loving doodler by night.
            </motion.p>
            <div className='pt-3'>
              <ul className='flex justify-start items-center text-3xl'>
                <motion.li
                  className='mx-2'
                  initial='initial'
                  whileHover='hover'
                  variants={textVariant}
                >
                  <a href='https://www.linkedin.com/in/shiwalik-srivastava-3953b720b/' className='hover:underline'>
                    <FaLinkedin />
                  </a>
                </motion.li>
                <motion.li
                  className='mx-2'
                  initial='initial'
                  whileHover='hover'
                  variants={textVariant}
                >
                  <a href='https://github.com/shiva-1801' className='hover:underline'>
                    <FaGithub />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
          <motion.div
            className='md:w-1/2 flex justify-center items-center mt-6 md:mt-0'
            initial='initial'
            whileHover='hover'
            variants={imageVariant}
          >
            <img src={hmee} alt='' className=" inset-0  object-cover w-80 " style={{ mixBlendMode: 'multiply' }}  />
          </motion.div>
        </div>
        <motion.div className='mt-12 pt-16 flex flex-col items-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}>
          <motion.h1 className='font-bold text-3xl font-abc' initial='initial'
            whileHover='hover'
            variants={textVariant}>Selected Work</motion.h1>
          <div className='flex flex-cols-1 md:flex-cols-2 gap-6 mt-6'>
            {/* Your project cards go here */}
            <div class="mt-12 w-full gap-3 flex flex-col">

                
            <div class="relative flex w-full max-w-[42rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img src={real} alt="ui/ux review check" />
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    
  </div>
  <div class="p-6 flex flex-col">
    <div class="flex items-center justify-between mb-3">
      <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">REACT SWIPER BASED REAL ESTATE PORTAL </h5>
      
    </div>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700"> Developed a dynamic Real Estate Portal using React.js integrated with Swiper for smooth and intuitive user
experience.</p>
    <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
    <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaHtml5 />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaCss3/>
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <IoLogoJavascript />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaReact />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <BiLogoTailwindCss  />
      </span>
      
      
    </div>
    <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
      {/* <!-- Buttons --> */}
      <button class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70" type="button">
        <a href="https://cute-bombolone-fff726.netlify.app/">Live</a>
      </button>
      <button class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70" type="button">
      <a href="https://github.com/shiva-1801/React-Project1/tree/main">Github</a>
      </button>
    </div>
  </div>
</div>


<div class="relative flex w-full max-w-[42rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img src={nike} alt="ui/ux review check" />
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    
  </div>
  <div class="p-6 flex flex-col">
    <div class="flex items-center justify-between mb-3">
      <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">TAILNIK MART</h5>
      
    </div>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700"> TailNik Mart is a web store project that recreates the user interface and experience of a Nike store, utilizing
modern web development technologies</p>
<div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
    <span
        class="cursor-pointer rounded-full border text-xl border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaHtml5 />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaCss3/>
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <IoLogoJavascript />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <FaReact />
      </span>
      <span
        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        <BiLogoTailwindCss  />
      </span>
      
      
    </div>
    <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
      {/* <!-- Buttons --> */}
      <button class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70" type="button">
      <a href="https://65579c7943850a099ff147b0--silly-babka-60a7ff.netlify.app/">Live</a>
      </button>
      <button class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70" type="button">
      <a href="https://github.com/shiva-1801/TailNik-Mart">Github</a>
      </button>
    </div>
  </div>
</div>

</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;


