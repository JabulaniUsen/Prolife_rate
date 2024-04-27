import React from 'react'

const AddAssignment = () => {
  return (
    <div className='m-10 poppins'>
      <h4 className='text-xl font-bold'>Add Assignment</h4>
      <div className="body mt-6">
        <form action="">
          <div className="details flex flex-col gap-5">
            <h5 className='text-lg font-semibold'>Assignment Details:</h5>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● Assignment Title:</label>
              <div className='border-[1px] border-black rounded-lg p-2 lg:w-[600px]'>
                <input type="text" className='w-full' />
              </div>
            </div>
            <div className="title flex justify-between mr-32 ">
              <label htmlFor="" className='text-base ml-3'>● Description:</label>
              <textarea className='border-[1px] p-2 outline-none border-black rounded-lg lg:w-[600px] h-[120px]' name="" id="" cols="10" rows="10"></textarea>
            </div>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● Subject:</label>
              <div className='border-[1px] border-black rounded-lg p-2 lg:w-[600px]'>
                <input type="text" className='w-full' />
              </div>
            </div>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● Grade Level:</label>
              <div className='border-[1px] border-black rounded-lg p-2 lg:w-[600px]'>
                <input type="text" className='w-full' />
              </div>
            </div>
          </div>

          <div className="schedule flex flex-col gap-5 mt-10">
            <h5 className='text-lg font-semibold'>Assignment Schedule:</h5>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● Start Date:</label>
              <input type="date" className='border-[1px] border-black rounded-lg lg:w-[600px] ' />
            </div>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● End Date:</label>
              <input type="date" className='border-[1px] border-black rounded-lg lg:w-[600px] ' />
            </div>
            <div className="title flex justify-between mr-32 items-center">
              <label htmlFor="" className='text-base ml-3'>● Submission Time:</label>
              <div className='border-[1px] border-black rounded-lg p-2 lg:w-[600px]'>
                <input type="time" className='w-full' />
              </div>
            </div>
            <div className="title flex justify-between mr-32 ">
              <label htmlFor="" className='text-base ml-3'>● Materials Needed:</label>
              <textarea className='border-[1px] p-2 outline-none border-black rounded-lg lg:w-[600px] h-[120px]' name="" id="" cols="10" rows="10"></textarea>
            </div>
          </div>


          <div className="btn poppins flex gap-4 justify-center items-center my-10">
            <button className='bg-[#186BAD] transition-all hover:bg-[#124f81] px-5 py-2 rounded-xl text-white'>Save Assignment</button>
            <button className='bg-[#1e86db] transition-all hover:bg-[#124f81] px-5 py-2 rounded-xl text-white'>Notify Student</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAssignment