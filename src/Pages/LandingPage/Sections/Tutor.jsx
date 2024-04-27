import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import tutor from '../../../Assets/tutorr.png';
import { Link } from 'react-router-dom';

function Tutor() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // You can adjust the offset and duration as needed
    if (scrollY > 500) {
      controls.start({ opacity: 1, x: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex justify-between flex-wrap-reverse items-center px-5 lg:px-28 my-28'>
      <motion.div
        className="img lg:w-[50%]"
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <img src={tutor} alt="" />
      </motion.div>

      <motion.div
        className="text poppins lg:w-[40%]"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div className="header pb-5">
          <h1 className='font-semibold lg:text-4xl text-2xl lg:leading-[45px]'>
            Want to share <br /> your <span className='text-[#186BAD] font-semibold'>Knowledge? </span>
          </h1>
        </div>
        <div className="description">
          <p>
            High-definition video is video of higher resolution
            and quality than standard-definition. While there is
            no standardized meaning for high-definition, generally
            any video.
          </p>
        </div>

        <Link to='/signup'>
          <motion.button
            className='rounded-xl my-8 lg:p-4 p-3 bg-[#186bad] text-white font-semibold'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign up as Tutor
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Tutor;
