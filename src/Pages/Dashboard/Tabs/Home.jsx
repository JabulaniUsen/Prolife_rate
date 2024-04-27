import React from 'react'
import studentAndTeacher from '../../Dashboard2/Icons/Teacher and student.png'
import UpcomingClasses from '../Components/UpcomingClasses';
import PendingAssignments from '../Components/PendingAssignments';
import WaitingRoom from '../Components/WaitingRoom';
import Documents from '../Components/Documents';
import LineChart from '../Components/LineGraph';
import ExploreMore from '../Components/ExploreMore';


function Home() {
  return (
    <div className='lg:mt-0 mt-5 lg:py-0 py-6 '>
      <div className="head bg-[#186BAD] lg:py-0 pt-10 rounded-xl lg:flex lg:justify-between items-center lg:mx-0 mx-5">
        <div className="texts text-white justify-center mx-7 poppins">
          <h1 className='text-3xl '>Welcome back!
            {/* <span className='font-semibold'>Jabulani</span> */}
          </h1>
          {/* <p className=' my-5'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p> */}
        </div>
        <img src={studentAndTeacher} className='lg:w-[410px] w-[70%] ml-28' alt="" />
      </div>
      <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 mt-7 place-items-center">
        <div className="lineChart">
          <LineChart/>
        </div>
        <div className="PendingAssignments">
          <UpcomingClasses/>
        </div>
        <div className="upcomingClasses">
          <PendingAssignments/>
        </div>
        <div className="PendingAssignments">
          <Documents/>
        </div>
        <div className="docs">
          <WaitingRoom/>
        </div>
        <div className="exploreMore">
          <ExploreMore/>
        </div>
      </div>
    </div>
  )
}

export default Home