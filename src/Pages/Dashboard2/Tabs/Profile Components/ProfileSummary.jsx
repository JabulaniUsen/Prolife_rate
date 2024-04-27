import React, {useState} from 'react'
import user from '../../Icons/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarked, faStar, faUser } from '@fortawesome/free-solid-svg-icons'

const ProfileSummary = () => {
  
  const ratings = [
    // { img: user, name: 'Guy Hawkings', timeFrame: '1 week ago', review: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.' }
  ]

  const classData = [
    // { subject: 'Maths', classId: 704, grade: '5', startTime: '10:30', endTime: '11:30' },
    // { subject: 'Physics', classId: 704, grade: '5', startTime: '12:30', endTime: '13:30' },
    // { subject: 'Maths', classId: 704, grade: '5', startTime: '8:00', endTime: '10:00' },
  ]

  return (
    <div className='poppins'>
      <div className="head">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="profileImg w-32 h-32 border border-dashed border-[#00000096] rounded-full bg-transparent">
            </div>
            <div className="">
              <h3 className='text-2xl font-bold'>Vako Shvili</h3>
              <p className='text-[#6E7485] my-2'>Science Teacher</p>
              <div className="extraData flex items-center gap-5">
                <div className="ratings flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} className='text-[#FD8E1F]' />
                  <p className='text-[#6E7485]'><span className='text-black font-semibold'>4.8</span> (32 reviews)</p>
                </div>
                <div className="ratings flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className='text-[#564FFD]' />
                  <p className='text-[#6E7485]'><span className='text-black font-semibold'>23</span> students</p>
                </div>
              </div>
            </div>
          </div>
          <button className='bg-[#186bad] px-10 py-2 rounded-lg text-white float-right'>Edit</button>
        </div>

        <div className="body grid grid-cols-2 gap-10">
          <div className="">
            <div className="aboutMe p-5 my-5 border rounded">
              <h2 className='font-semibold text-xl mb-5'>ABOUT ME</h2>
              <p className='text-[#6E7485]'>
                One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 
                in his case, and quit his job, or more like got himself fired from
                his own startup.
                <br />
                <br />
                He decided to work on his dream: be his own boss, travel the world, 
                only do the work he enjoyed, and make a lot more money in the process.
                No more begging for vacation days and living from paycheck to paycheck.
                After trying everything from e-commerce stores to professional poker 
                his lucky break came when he started freelance design. Vako fell in love
                with the field that gives him the lifestyle of his dreams.
                <br />
                <br />
                Vako realizes that people who take courses on Udemy want to transform 
                their lives. Today with his courses and mentoring Vako is helping 
                thousands of people transform their lives, just like he did once.
              </p>
            </div>
            <div className="ratings p-5 my-10">
              <div className="flex justify-between items-center my-5">
                <h2 className='font-semibold text-xl mb-5'>Students Feedback</h2>
                <select name="" id="" className='border p-2 rounded'>
                  <option value="5 Star">5 Star Rating</option>
                  <option value="4 Star">4 Star Rating</option>
                  <option value="3 Star">3 Star Rating</option>
                  <option value="2 Star">2 Star Rating</option>
                  <option value="1 Star">1 Star Rating</option>
                </select>
              </div>
              {ratings.length === 0 ? (
                <p className='text-[#6E7485]'>No reviews yet</p>
              ) : (
                ratings.map ((item, index) => (
                  <div className="" key={index}>
                    <img src={item.img} alt="" />
                    <div className="">
                      <div className="name flex items-center mt-2 gap-2">
                        <h3 className='font-semibold'>{item.name}</h3>
                        - <p className='text-[#6E7485] text-sm'>{item.timeFrame}</p>
                      </div>
                      <div className="starts my-2 text-[#FD8E1F]">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <p className='text-[#6E7485]'>{item.review}</p>
                    </div>
  
                  </div>
                ))
              ) }
            </div>
          </div>
          <div className="class">
            {classData.length === 0 ? (
              <p className='text-[#6E7485] m-10'>No classes yet</p> 
            ) : (
              classData.map((item, index) => (
                <div
                className="classBox p-3 lg:w-[400px] cursor-pointer rounded-lg my-5 flex flex-col justify-center items-center bg-[#186BAD]"
                key={index}
              >
                <div className="flex flex-col justify-center gap-2 text-center text-[#fff]">
                  <div className="head text-center">
                    <h2 className="font-semibold text-lg py-3">
                      {item.subject}
                    </h2>
                    <hr />
                  </div>
                  <p className="rounded flex gap-5 items-center justify-center">
                    {/* <FontAwesomeIcon icon={faUser}/> */}
                    Grade: {item.grade}
                  </p>
                  <div className="flex justify-between gap-20 my-4">
                    <p className=' flex gap-x-1 items-center'>
                      <FontAwesomeIcon icon={faMapMarked} />
                      {item.classId}
                    </p>
                    <p className=' flex gap-x-1 items-center'>
                      <FontAwesomeIcon icon={faClock} />
                      {item.startTime} - {item.endTime}
                    </p>
                  </div>
                </div>
              </div>
              ))
            )}
            <div className="border-black border-[1px] rounded-lg lg:w-[400px]">
              <div className="bg-[#186BAD] p-5 rounded-t-lg">
                <p className='text-lg text-white font-semibold'>Payment Details</p>
              </div>
              <div className="details p-5">
                <div className="flex flex-col justify-start gap-y-5 mt-5">
                  <p className='font-semibold'>Bank:</p>
                </div>
                <div className="flex flex-col justify-start gap-y-5 mt-5">
                  <p className='font-semibold'>Account Name:</p>
                </div>
                <div className="flex flex-col justify-start gap-y-5 mt-5">
                  <p className='font-semibold'>Account Number:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary