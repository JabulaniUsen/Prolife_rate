import React from 'react'
import vision from '../../../Assets/vision.png'
import mission from '../../../Assets/mission.png'
import unleash from '../../../Assets/unleash.png'

function Mission() {
  return (
    <div className='px-5 lg:px-28'>
        <div className="poppins">
            <div className="header text-center font-bold lg:leading-10 lg:text-3xl text-xl">
                <h1><span className='text-[#186BAD]'>Proliferate</span> Tutoring is beyond a business, It's a Vision</h1>
            </div>

            <div className="flex lg:flex-row flex-col">
                <div className="vision flex items-center gap-1 lg:p-8 py-8">
                    <img src={vision} alt="" />
                    <div className="">
                        <h1 className='text-[#186bad] my-2 text-2xl font-bold'>Our Vision</h1>
                        <p>
                            Our vision is to create a world where knowledge 
                            knows no bounds, where anyone can effortlessly 
                            access a diverse pool of expert tutors. 
                        </p>
                    </div>
                </div>
                <div className="mission flex items-center gap-0 lg:p-8 py-8">
                    <img src={mission} alt="" className='w-[100px]' />
                    <div className="">
                        <h1 className='text-[#186bad] py-2 text-2xl font-bold'>Our Mission</h1>
                        <p>
                            Our mission is to empower learners with the 
                            knowledge and skills they need to succeed, 
                            bridging the gap between aspiration and achievement.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="poppins my-28 flex lg:flex-row flex-col justify-between items-center">
            <div className="header lg:w-[50%]">
                <h1 className='lg:text-3xl text-2xl font-bold py-8 lg:leading-10'>
                    Unleash Your <span className='text-[#186bad] '> Academic Potential, </span><br />
                    One session at a time
                </h1>
                <p className='text-justify leading-7'>
                    PROLIFERATE® is your gateway to unlocking the power 
                    of limitless learning.  We believe that the path to 
                    academic excellence and life’s successes doesn't have 
                    to be long and arduous. By providing access to 
                    experienced mentors and expert tutors, we offer you 
                    the opportunity to fast-track your learning journey 
                    in any subject area of your interest.
                </p>
            </div>
            <div className="">
                <img src={unleash} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mission