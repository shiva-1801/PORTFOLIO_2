import React from 'react';
import { motion } from 'framer-motion';
import abt from '../images/abt.jpg';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTailwindCss } from 'react-icons/bi';

const About = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='w-full h-screen px-5  m-auto flex flex-col items-center justify-center pt-[20rem] sm:pt-16'>
      <motion.div
        className='one flex flex-col md:flex-row w-full max-w-4xl gap-9'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='image w-full md:w-1/2'>
          <motion.img
            src={abt}
            alt=''
            srcSet=''
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>
        <div className='text w-full md:w-1/2 gap-2'>
          <motion.h1
            className='text-bold text-3xl font-Mad'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Hey what's up!
          </motion.h1>
          <motion.p
            className='font-xl font-abc leading-8 tracking-wide'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I'm Shiwalik, a coding aficionado and an enthusiastic team player! 🚀. Currently navigating my final year of B.Tech in IT at Galgotia College of Engineering, I'm not just about codes and algorithms. When I'm not diving into the intricacies of web development or acing DSA challenges since day one, you'll find me grooving to music beats or smashing it on the badminton court!
            <br />
            Proudly clinched the 2nd spot in the exhilarating zonals, "Game of Code," hosted by AKTU, adding a shiny accolade to my college journey.
          </motion.p>
        </div>
      </motion.div>
      <motion.div className='two text-center mt-12'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}>
        <h1 className='text-2xl font-bold mb-4'>Tech Stack</h1>
        <motion.div className='flex justify-center items-center gap-4 pb-5'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}>
          <motion.span
            className='cursor-pointer rounded-full p-2 bg-gray-900/5 hover:bg-gray-900/10'
            variants={iconVariants}
            whileHover='hover'
          >
            <FaHtml5 className=' text-3xl text-gray-900' />
          </motion.span>
          <motion.span
            className='cursor-pointer rounded-full p-2 bg-gray-900/5 hover:bg-gray-900/10'
            variants={iconVariants}
            whileHover='hover'
          >
            <FaCss3 className='text-3xl text-gray-900' />
          </motion.span>
          <motion.span
            className='cursor-pointer rounded-full p-2 bg-gray-900/5 hover:bg-gray-900/10'
            variants={iconVariants}
            whileHover='hover'
          >
            <IoLogoJavascript className='text-3xl text-gray-900' />
          </motion.span>
          <motion.span
            className='cursor-pointer rounded-full p-2 bg-gray-900/5 hover:bg-gray-900/10'
            variants={iconVariants}
            whileHover='hover'
          >
            <FaReact className='text-3xl text-gray-900' />
          </motion.span>
          <motion.span
            className='cursor-pointer rounded-full p-2 bg-gray-900/5 hover:bg-gray-900/10'
            variants={iconVariants}
            whileHover='hover'
          >
            <BiLogoTailwindCss className='text-3xl text-gray-900' />
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
