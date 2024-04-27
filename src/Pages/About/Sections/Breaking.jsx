import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import circle1 from '../../../Assets/circle1.png';
import circle2 from '../../../Assets/circle2.png';
import circle3 from '../../../Assets/circle3.png';
import circle4 from '../../../Assets/circle4.png';

const Counter = ({ value }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const { count } = useSpring({
        from: { count: 0 },
        to: { count: inView ? value : 0 },
        config: { duration: 4000, easing: (t) => t * (2 - t) },
      });
    
      return <animated.p ref={ref} className='absolute text-[#000000] text-2xl top-20 font-semibold'>{count.interpolate((val) => Math.floor(val))}</animated.p>;
    };

function Breaking() {
  return (
    <div className='bg-[#f2f1f1] poppins my-10 py-8 px-10 lg:px-28'>
      <div className="">
        <h1 className='text-[#186BAD] lg:text-3xl text-2xl my-5 lg:leading-10 font-bold text-center'>
          Breaking Barriers <br />
          Building Brighter Futures One Session at a Time.
        </h1>
      </div>
      <div className="lg:flex gap-12 items-center lg:flex-row grid grid-cols-2 place-items-center
      ">
        <div className=" flex flex-col items-center justify-center gap-5 p-7 text-center w-[30%] relative ">
          <img src={circle1} className='lg:block hidden' alt="" />
          <div className="absolute lg:top-0 top-10 lg:left-28 left-2"><Counter value={500} /></div>
          <p className='text-xl text-[#186BAD] font-bold'>Total Students Enrolled</p>
        </div>

        <div className="tutor flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle2} className='lg:block hidden' alt="" />
          <div className="absolute lg:top-5 top-5 lg:left-28 left-3"><Counter value={65} /></div>
          <p className='text-xl text-[#186BAD] font-bold'>Expert Tutors</p>
        </div>

        <div className="learning flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle3} className='lg:block hidden' alt="" />
          <div className="absolute lg:top-5 top-[-1rem] lg:left-28 left-2"><Counter value={200} /></div>
          <p className='text-xl text-[#186BAD] font-bold'>Sessions</p>
        </div>

        <div className="evaluate flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle4} className='lg:block hidden' alt="" />
          <div className="absolute lg:top-5 top-2 lg:left-28 left-5"><Counter value={10}/></div>
          <p className='text-xl text-[#186BAD] font-bold'>Years of Operations</p>
        </div>
      </div>
    </div>
  );
}

export default Breaking;
