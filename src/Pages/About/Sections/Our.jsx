import React from 'react'
import our from '../../../Assets/our.png'

function Our() {
  return (
    <div className='flex lg:flex-row flex-col items-center poppins my-20 bg-[#186bad] shadow-inner px-5 lg:px-28'>
        <div className="lg:my-2 mb-0">
            <img src={our} alt="" />
        </div>
        <div className="lg:w-[50%] text-white">
            <div className="header">
                <h3 className='lg:text-base text-sm my-1'>OUR ONE BILLION MISSIONS</h3>
                <h1 className='lg:text-3xl text-2xl font-bold pb-5'>Our one billion mission <br /> sounds bold, We agree.</h1>
            </div> 
            <div className="text text-justify lg:mb-1 mb-10 ">
                "We cannot solve our problems with the same thinking 
                we used when we created them."—Albert Einstein. 
                Institutions are slow to change. Committees are 
                where good ideas and innovative thinking go to die. 
                Choose agility over dogma. Embrace and drive change. 
                We need to wipe the slate clean and begin with bold, 
                radical thinking.
            </div>
        </div>
    </div>
  )
}

export default Our