import React from 'react'
import courseImg from '../../../Assets/course-img.png'
import Notice from '../../../Components/Notice'

function Payment1() {
  return (
    <div>
      <div  className='bg-white p-10 poppins w-[80%] m-auto border rounded-lg shadow-lg mt-[-45px]'>
        <h1 className='text-[#186BAD] text-2xl text-center font-bold'>Order Details</h1>
        <div className="flex justify-around ">
          <div className="subjects">
            <h1 className='text-xl my-10'>Subjects</h1>

            <div className="flex gap-2 items-center my-5">
              <img src={courseImg} alt="" />
              <div className="">
                <p className='text-[#A1A5B3] text-sm mb-1'>
                  Subject by: <span className='text-[#4E5566]'>Courtney Henry</span>
                </p>
                <p className='text-lg'>
                  Mathematics - Algebra
                </p>
                <p className='text-[#FF6636] mt-2 text-xl'>$13.00</p>
              </div>
            </div>
            
          </div>
          <div className="checkout mt-20">
            <h3 className='text-lg font-semibold'>Order Summary</h3>
            <div className="w-[400px] flex flex-col gap-7 my-10">
              <div className="subtotal flex justify-between">
                <p className='text-[#6E7485]'>Subtotal</p>
                <p>$61.97USD</p>
              </div>
              <div className="coupon flex justify-between">
                <p className='text-[#6E7485]'>Coupon Discount</p>
                <p>8%</p>
              </div>
            </div>
            <hr />
            <div className="total flex justify-between my-7">
              <p className='text-lg'>Total:</p>
              <p className='text-2xl font-semibold'>$75.00 USD</p>
            </div>
            <div className="flex justify-center gap-10 my-10">
              <button className='bg-[#008EFF] p-2 w-[140px] rounded-2xl text-white shadow-md'>Check out</button>
              <button className='bg-[#FF0000] p-2 w-[140px] rounded-2xl text-white shadow-md'>Cancel</button>
            </div>
          </div>
        </div>
    </div>
    <Notice/>
    </div>
  )
}

export default Payment1