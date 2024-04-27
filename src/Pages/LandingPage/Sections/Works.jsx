import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import search from '../../../Assets/search.png';
import learning from '../../../Assets/learning.png';
import evaluate from '../../../Assets/evaluate.png';
import tutor from '../../../Assets/tutor.png';

function Works() {
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
    <div className='my-10 py-8 px-5 '>
      <h3 className='poppins text-3xl font-bold text-center'>How it works</h3>
      <div className="bg-[#f2f1f1] poppins flex flex-col lg:flex-row my-8 py-8 px-5 lg:px-28">
        <motion.div
          className="flex flex-col items-center gap-5 p-7 text-center lg:w-[30%]"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <img src={search} className='w-10' alt="" />
          <h1 className='text-2xl font-bold'>Sign Up</h1>
          <p className='leading-7 text-sm'>
            Sign Up to Expand and join the ranks
            of proud parents who have the incredible
            opportunity to witness their child's
            knowledge flourish
          </p>
        </motion.div>

        <motion.div
          className="tutor flex flex-col items-center gap-5 p-7 text-center lg:w-[30%] lg:border-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <img src={tutor} className='w-10' alt="" />
          <h1 className='text-2xl font-bold '>Choose Tutor</h1>
          <p className='leading-7 text-sm'>
            Find your personal online tutor
            from our wide range of
            competent professionals to
            work with your child.
          </p>
        </motion.div>

        <motion.div
          className="learning flex flex-col items-center gap-5 p-7 text-center lg:w-[30%] border-r-4"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <img src={learning} className='w-10' alt="" />
          <h1 className='text-2xl font-bold'>Start Learning</h1>
          <p className='leading-7 text-sm'>
            Book sessions using our convenient
            scheduling tool. Remember, consistency
            is essential for achieving success.
          </p>
        </motion.div>

        <motion.div
          className="evaluate flex flex-col items-center gap-5 p-7 text-center lg:w-[30%]"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <img src={evaluate} className='w-10' alt="" />
          <h1 className='text-2xl font-bold'>Evaluate</h1>
          <p className='leading-7 text-sm'>
            Monitor your child's progress
            and see a higher level of
            confidence and success.
          </p>
        </motion.div>
      </div>

    </div>
  );
}

export default Works;
