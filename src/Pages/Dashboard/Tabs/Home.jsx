import React from 'react'
import UpcomingClasses from './Home Components/UpcomingClasses'
import AssignmentsOverview from './Home Components/AssignmentsOverview'
import MyTutor from './Home Components/MyTutor'
import Messages from './Home Components/Messages'
import ClasseAttendant from './Home Components/ClasseAttendant'


function Home() {
  return (
    <div className="poppins">
      <div className="header lg:px-10 px-5 py-7">
        <p className='lg:text-3xl text-2xl font-bold'>Overview</p>
      </div>
      <hr />

      <div className="body lg:p-10 py-10 px-5 flex justify-between gap-10 gap-y-16 flex-wrap">
        <UpcomingClasses/>
        <AssignmentsOverview/>
        <MyTutor/>
        <Messages/>
        <ClasseAttendant/>
      </div>
    </div>
  )
}

export default Home