import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfileSummary = () => {
  
  const subjectsData = [
    { img: "", name: 'Algebra', desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.' },
    { img: "", name: 'Algebra', desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.' },
    { img: "", name: 'Algebra', desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.' },
  ]


  return (
    <div className='poppins'>
      <div className="head flex flex-col justify-center items-center my-10 relative">
        <p className='text-white font-semibold bg-[#186bad] px-16 py-2 rounded-xl absolute right-10 top-32'>Edit</p>
        <div className="profileImage w-[200px] h-[200px] border-dashed border-[1px] border-black rounded-full">

        </div>
        <div className="title text-[#6E7485] text-lg mt-5">
          <p>Grade 4 Student</p>
        </div>
      </div>
      <div className="aboutMe m-auto text-center lg:w-[900px] px-20 py-10 border-[#e9eaf0] border-[1px]">
        <h3 className='text-xl font-semibold mb-10'>ABOUT ME</h3>
        <p className='text-gray-600'>
          One day Vako had enough with the 9-to-5 grind, or more 
          like 9-to-9 in his case, and quit his job, or more like 
          got himself fired from his own startup.
          <br /> 
          <br />
          He decided to work on his dream: be his own boss, travel 
          the world, only do the work he enjoyed, and make a lot more 
          money in the process. No more begging for vacation days and 
          living from paycheck to paycheck. After trying everything 
          from e-commerce stores to professional poker his lucky break 
          came when he started freelance design. Vako fell in love with 
          the field that gives him the lifestyle of his dreams.
          <br /> 
          <br />
          Vako realizes that people who take courses on Udemy want to 
          transform their lives. Today with his courses and mentoring 
          Vako is helping thousands of people transform their lives, 
          just like he did once.
        </p>
      </div>
      <div className="recentSubjects">
        <h4 className='text-semibold mt-20'>Recent Subjects</h4>

        <div className="flex justify-center items-center gap-10 my-10">
          {subjectsData.map((item, index) => (
            <div className="flex flex-col gap-8" key={index}>
                <img src={item.img} alt="" />
                <div className="texts flex flex-col">
                  <h4 className='text-lg font-semibold'>{item.name}</h4>
                  <p className='text-[#667085]'>{item.desc}</p>
                </div>
                <p className='text-blue-400 flex items-center gap-3'>
                  Read post
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary