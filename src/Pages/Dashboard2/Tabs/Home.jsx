import React, {useContext, useEffect, useState} from 'react'
import studentAndTeacher from '../Icons/Teacher and student.png'
import { faBookmark, faChevronRight, faEarthAmericas, faEllipsisVertical, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StackedBarChart from '../Components/StackedBarChart';
import UpcomingActivities from '../Components/UpcomingActivities';
import ClassProgress from '../Components/ClassProgress';
import LineChart from '../Components/LineGraph';
import WaitingRoom from '../Components/WaitingRoom';
import Documents from '../Components/Documents';
import Overview from '../Components/Overview';
import WaitingList from '../Components/WaitingList';
import {useTutorProfile} from '../../../api/getTutorProfile';
import {TutorContext} from '../../../context/createContext/useTutor';



function Home() {
  const {tutor, setTutor}=useContext(TutorContext)
  useEffect(() => {
   (async () => {
    localStorage.setItem('token',tutor.authentication.token)
      const userProfile = await useTutorProfile()
      console.log(userProfile)
    }
   )()
  }, [])
  const [showWaitingList, setShowWaitingList]=useState(false)

  const handleSeeAllClick=() => {
    setShowWaitingList(true)
  }

  return (
    <div>
      { showWaitingList ? (
        <WaitingList/>
      ) : (
        <div className='lg:mt-0 mt-5 mx-5 py-6'>
          <div className="head bg-[#186BAD] lg:py-0 pt-10 rounded-xl lg:flex lg:justify-between items-center">
            <div className="texts text-white justify-center mx-7 poppins">
              <h1 className='text-3xl '>Welcome back!
                {/* <span className='font-semibold'>Jabulani</span> */}
              </h1>
              {/* <p className=' my-5'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p> */}
            </div>
            <img src={studentAndTeacher} className='lg:w-[410px] w-[70%] ml-28' alt="" />
          </div>
          <div className="overView">
            <Overview/>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-5">
            <div className="rounded-xl my-7 shadow-xl">
              <StackedBarChart />
            </div>
            <div className="classProgress">
              <ClassProgress/>
            </div>
            <div className="upcomingActivities">
              <UpcomingActivities/>
            </div>
            <div className="rounded-xl">
              <LineChart/>
            </div>
            <div className="classProgress">
              <WaitingRoom handleSeeAllClick={handleSeeAllClick} />
            </div>
            <div className="upcomingActivities">
              <Documents />
            </div>
          </div>
          
        </div>
      ) }
    </div>
  )
}

export default Home