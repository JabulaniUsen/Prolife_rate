import React from 'react'
import UpcomingClasses from './Home Components/UpcomingClasses'
import AssignmentsOverview from './Home Components/AssignmentsOverview'
import MyTutor from './Home Components/MyTutor'


function Home() {
  return (
    <div className="poppins">
      <div className="header px-10 py-7">
        <p className='lg:text-3xl font-semibold'>Overview</p>
      </div>
      <hr />

      <div className="body p-10 flex justify-between gap-10 gap-y-16 flex-wrap">
        <UpcomingClasses/>
        <AssignmentsOverview/>
        <MyTutor/>
      </div>
    </div>
  )
}

export default Home