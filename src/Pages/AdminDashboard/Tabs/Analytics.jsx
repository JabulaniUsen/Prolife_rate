import React from 'react'
import AdminName from '../Components/AdminName'

function Analytics() {
  return (
    <div className=''>
      <AdminName/>
      <div className="grid grid-cols-3 grid-flow-col my-[4rem] gap-5">
        <div className="col-span-2">
          <div className="overview flex gap-5 ">
            <div className="students bg-[#67C4CE] poppins flex flex-col justify-between p-5 rounded-xl w-[221px] h-[206px]">
              <p className='text-white text-[30px]'>Students</p>
              <p className='text-white text-[50px] font-semibold'>300</p>
            </div>
            <div className="students bg-[#186BAD] poppins flex flex-col justify-between p-5 rounded-xl w-[221px] h-[206px]">
              <p className='text-white text-[30px]'>Students</p>
              <p className='text-white text-[50px] font-semibold'>150</p>
            </div>
            <div className="students bg-[#898A8B] poppins flex flex-col justify-between p-5 rounded-xl w-[221px] h-[206px]">
              <p className='text-white text-[30px]'>Students</p>
              <p className='text-white text-[50px] font-semibold'>183</p>
            </div>
          </div>
          <h3 className='text-[30px] font-semibold my-5 poppins'>Usage Graph</h3>
        </div>
        <div className=""> 
          <div className="w-[239px] h-[362px] bg-[#F2F1F1] rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Analytics