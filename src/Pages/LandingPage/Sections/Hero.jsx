import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Swiper from 'react-id-swiper';
import 'swiper/css/bundle';

import sliderImage1 from '../../../Assets/slide1.png';
import sliderImage2 from '../../../Assets/Slide2.png';
import sliderImage3 from '../../../Assets/slide3.png';
import bgImg1 from '../../../Assets/none.png';
import bgImg2 from '../../../Assets/Ellipse.png';
import Search from '../../../Components/Search';

function Hero() {
  const [index, setIndex] = React.useState(0);
  const swiperRef = useRef(null);

  const props = useSpring({
    opacity: 1,
    transform: `translateX(${-index * 100}%)`,
  });

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="poppins slider-container">
      <Swiper ref={swiperRef} loop>
        <div className=" px-5 lg:px-28 lg:py-20 pt-10 lg:pt-initial flex  lg:justify-between justify-center flex-col lg:flex-row bg-[#f0f9f8]">
          <div className="slide w-[100%] lg:w-[60%]" style={{ color: "#000" }}>
            <h2 className='text-[#D23323] my-8 bg-white p-2 rounded-lg w-[178px] shadow-lg'>Never Stop Learning</h2>
            <h1 className='font-bold lg:text-4xl text-3xl leading-snug my-0'>Unlock Your Potential with Proliferate</h1>
            <h2 className='lg:text-2xl font-semibold mb-5 mt-2' style={{ color: "#5D5A6F" }}>Your Path to Personalized Learning</h2>
            <p className=' lg:w-[500px] text-sm lg:text-base text-[#5D5A6F]'>Welcome to Proliferate, your gateway to a world of knowledge. Our platform connects you with experienced tutors, interactive virtual classrooms, and a diverse range of subjects to empower your learning journey.</p>
            
            <Search/>
            
          </div>
          <div className=" bg-img lg:w-[50%] w-[100%]">
            <img src={bgImg1} className='absolute top-[-5rem] lg:block hidden right-10' alt="" />
            <img src={sliderImage1} className='lg:absolute bottom-0' alt="" />
          </div>
        </div>

        <div className=" px-5 lg:px-28 lg:py-20 pt-10 lg:pt-initial flex  lg:justify-between justify-center flex-col lg:flex-row bg-[#186bad] ">
          <div className="slide w-[100%] lg:w-[60%]" style={{ color: "#ffff" }}>
            <h2 className='text-[#D23323] my-8 bg-white p-2 rounded-lg w-[178px] shadow-lg'>Never Stop Learning</h2>
            <h1 className='font-bold lg:text-4xl text-3xl leading-snug my-0'>Experience Excellence in Education</h1>
            <h2 className='lg:text-2xl font-semibold mb-5 mt-2'>Expert Tutors, Personalized Guidance</h2>
            <p className=' lg:w-[500px] text-sm lg:text-base ' style={{ color: "#ffff" }}>At Proliferate, our experienced tutors are committed to your success. Whether it's test preparation, subject mastery, or personal growth, our tutors are here to provide personalized guidance for your educational journey.</p>
            
            <Search/>

          </div>
          <div className="bg-img lg:w-[50%] w-[100%]">
            <img src={sliderImage2} className='lg:absolute bottom-0' alt="" />
          </div>
        </div>

        <div className=" px-5 lg:px-28 lg:py-20 pt-10 lg:pt-initial flex  lg:justify-between justify-center flex-col lg:flex-row bg-[#186bad]">
          <div className="slide w-[100%] lg:w-[60%]" style={{ color: "#ffff" }}>
            <h2 className='text-[#D23323] my-8 bg-white p-2 rounded-lg w-[178px] shadow-lg'>Never Stop Learning</h2>
            <h1 className='font-bold lg:text-4xl text-3xl leading-snug my-0'>Unlock Your Potential with Proliferate</h1>
            <h2 className='lg:text-2xl font-semibold mb-5 mt-2'>Your Path to Personalized Learning</h2>
            <p className=' lg:w-[500px] text-sm lg:text-base ' style={{ color: "#ffff" }}>Welcome to Proliferate, your gateway to a world of knowledge. Our platform connects you with experienced tutors, interactive virtual classrooms, and a diverse range of subjects to empower your learning journey.</p>
            
            <Search/>

          </div>
          <div className="bg-img lg:w-[50%] w-[100%]">
            <img src={sliderImage3} className='lg:absolute bottom-0 w-[700px] right-3' alt="" />
          </div>
        </div>
      </Swiper>
      
    </div>
  );
}

export default Hero;
