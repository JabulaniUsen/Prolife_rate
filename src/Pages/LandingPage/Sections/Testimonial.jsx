import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import gloria from '../../../Assets/gloria.png';
import odunayo from '../../../Assets/odunayo.png'
import seddy from '../../../Assets/seddy.jpg'
import victory from '../../../Assets/victory.png'
import jabu from '../../../Assets/jabu.jpg'

const reviews = [
  {
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    author: 'Gloria',
    img: gloria,
    rating: 5,
    reviewCount: 12,
  },
  {
    text: "It's exactly what I've been looking for. It really saves me time and effort. TOTC is exactly what our business has been lacking. Thank you so much for your help. .",
    author: 'Sediong',
    img: seddy,
    rating: 5,
    reviewCount: 12,
  },
  {
    text: "TOTC is exactly what our business has been lacking. Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. ",
    author: 'Odunayo',
    img: odunayo,
    rating: 5,
    reviewCount: 12,
  },
  {
    text: "It's exactly what I've been looking for.  Thank you so much for your help. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    author: 'Jabulani',
    img: jabu,
    reviewCount: 12,
  },
  {
    text: "You won't regret it. It really saves me time and effort. Thank you so much for your help. It's exactly what I've been looking for.  TOTC is exactly what our business has been lacking.",
    author: 'Victory',
    img: victory,
    rating: 5,
    reviewCount: 12,
  },
];

function Testimonial() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className='lg:px-28 flex flex-col lg:flex-row items-center'>
      <div className='text poppins w-[90%] lg:w-[60%] '>
        <div className='header flex flex-col gap-5'>
          <h2 className='font-light text-[#186bad] lg:text-lg'>------ TESTIMONIAL</h2>
          <h1 className='font-bold lg:text-3xl text-2xl text-[#186bad]'>What They Say?</h1>
        </div>

        <div className='lg:w-[550px] my-10 text-[#5D5A6F] flex flex-col gap-5'>
          <p>
            High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.
          </p>
          <p>
            High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.
          </p>
          <p>
            High-definition video is video of higher resolution and quality than standard-definition.
          </p>
          <Link to='/program'>
            <button className='signup rounded-xl  p-4 bg-[#186bad] text-white font-semibold'>
              Check out our programs
            </button>
          </Link>
        </div>
      </div>

      <div className='image relative lg:p-20 p-5 poppins'>
      <img src={currentReview.img} className='lg:w-[400px]' alt='' />
        <div className='absolute bg-white text-[#186bad] p-2 px-[18px] text-3xl rounded-full cursor-pointer shadow top-[300px] right-[50px]'>
          <button onClick={handleNextReview}>{'>'}</button>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center lg:w-[450px] w-[100%] lg:p-[2rem] p-[1em] rounded-lg shadow-lg lg:absolute lg:bottom-0 lg:right-[-50px] left-0 bg-white border-l-8 border-red-400'>
          <div className='text'>
            <p className='text-[#186bad] text-xs px-5 lg:pb-10 pb-5 border-l-2'>
              "{currentReview.text}"
            </p>
          </div>
          <div className='flex lg:items-center justify-between gap-20 '>
            <div className='name'>
              <h2 className='text-lg font-bold text-[#186bad]'>{currentReview.author}</h2>
            </div>
            <div className='rating text-start'>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
              </div>
              <div className='reviews mt-1'>
                <p className='lg:text-sm text-xs text-[#80819A]'>{currentReview.reviewCount} reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
