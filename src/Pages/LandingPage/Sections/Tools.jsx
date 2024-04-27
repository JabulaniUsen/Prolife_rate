import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import tools from '../../../Assets/tools.png';
import offer from '../../../Assets/offer.png';

function Tools() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust these values based on when you want the animations to start
      const triggerOffsetLeft = windowHeight * 0.8;
      const triggerOffsetRight = windowHeight * 0.8;

      if (offset > triggerOffsetLeft) {
        controlsLeft.start({ opacity: 1, x: 0 });
      }

      if (offset > triggerOffsetRight) {
        controlsRight.start({ opacity: 1, x: 0 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsLeft, controlsRight]);

  return (
    <div className="">
      <div className='flex justify-between items-center flex-wrap px-5 lg:px-28'>
        <motion.div
          className="text poppins lg:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="header pb-5">
            <h1 className='font-semibold lg:text-4xl text-2xl lg:leading-[45px]'>
              <span className='text-[#186BAD] font-semibold'>Tools </span> For Teachers <br /> And Learners
            </h1>
          </div>

          <div className="description">
            <p className='leading-8 text-lg text-justify'>
              Class has a dynamic set of teaching tools 
              built to be deployed and used during class.
              Teachers can handout assignments in real-time 
              for students to complete and submit.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="image lg:w-[50%]"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={tools} alt="" />
        </motion.div>
      </div>

      <div className='flex justify-between flex-wrap-reverse items-center px-5 lg:px-28 my-28'>
        <motion.div
          className="image lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
        >
          <img src={offer} alt="" />
        </motion.div>

        <motion.div
          className="text poppins lg:w-[40%]"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
        >
          <div className="header pb-5">
            <h1 className='font-semibold lg:text-4xl text-2xl lg:leading-[45px]'>
              Our <span className='text-[#186BAD] font-semibold'>Offer </span> are <br /> child centered
            </h1>
          </div>

          <div className="description">
            <p className='leading-8 text-lg text-justify'>
              Our platform offers progress tracking, experienced 
              tutors, personalized learning paths, interactive 
              virtual classrooms, and a diverse range of subject 
              offerings to enhance your educational experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tools;
