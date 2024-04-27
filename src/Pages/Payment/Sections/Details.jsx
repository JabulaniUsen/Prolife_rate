import React from 'react'
import name from '../../../Assets/name.png'
import sub from '../../../Assets/sub.png'
import grade from '../../../Assets/grade.png'
import learningStyle from '../../../Assets/learning-style.png'
import calender from '../../../Assets/calendar.png'
import time from '../../../Assets/time.png'

function Details() {
    const handleOptionChange = (event) => {
        console.log(event.target.value);
     };
  return (
    <div className='payment-bg poppins px-10 lg:px-28 py-10 pb-16 rounded-lg'>
        <div className="">
            <h1 className='text-4xl font-semibold text-white'>Payment Options</h1>
            <h3 className='text-xl text-white my-2'>Process Payment Now</h3>
        </div>
        {/* <div className="grid grid-cols-3 gap-10  mt-10">

            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={name} alt="" />
                <input type="text" className=" bg-transparent w-full" placeholder='Bamidele John' />
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={grade} alt="" />
                <select className="w-full" onChange={handleOptionChange}>
                    <option value="">Grade</option>
                    <option value="option1">Grade 1</option>
                    <option value="option2">Grade 2</option>
                    <option value="option3">Grade 3</option>
                    <option value="option3">Grade 4</option>
                    <option value="option3">Grade 5</option>
                    <option value="option3">Grade 6</option>
                    <option value="option3">Grade 7</option>
                    <option value="option3">Grade 8</option>
                    <option value="option3">Grade 9</option>
                    <option value="option3">Grade 10</option>
                    <option value="option3">Grade 11</option>
                    <option value="option3">Grade 12</option>
                </select>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={calender} alt="" />
                <select className="w-full" onChange={handleOptionChange}>
                    <option value="">1 time a week</option>
                    <option value="option1">2 times a week</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={sub} alt="" />
                <select className="w-full" onChange={handleOptionChange}>
                    <option value="">Maths/Science</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={learningStyle} alt="" />
                <select className="w-full" onChange={handleOptionChange}>
                    <option value="">1-on-1 Tutoring</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-200px">
                <img src={time} alt="" />
                <select className="w-full" onChange={handleOptionChange}>
                    <option value="">2.5 Hours</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div> */}
    </div>
  )
}

export default Details