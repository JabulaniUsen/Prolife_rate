import React from 'react'


function Hero() {

    const handleOptionChange = (event) => {
        console.log(event.target.value);
     };

  return (
    <div className='subject-hero poppins px-10 lg:px-28 lg:py-28 py-10'>
        <div className="grid grid-cols-1 place-items-center gap-10 ">
            <h1 className='text-2xl font-bold text-white'>Subject</h1>
            <div className=" m-auto bg-white lg:p-1 rounded-lg lg:w-[50%] w-[100%]">
                <input type="text" className=" bg-transparent w-[80%] p-2" placeholder='Search Your Subject' />
                <button className='bg-[#186BAD] text-white rounded p-2 lg:text-base text-sm'>Search</button>
            </div>

        </div>
        <div className="flex justify-center gap-4 mt-7">
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-[120px]">
            
                <select className="outline-none lg:text-base text-sm" onChange={handleOptionChange}>
                    <option value="">Grades</option>
                    <option value="option1">Grade 1</option>
                    <option value="option2">Grade 2</option>
                    <option value="option3">Grade 3</option>
                    <option value="option1">Grade 4</option>
                    <option value="option2">Grade 5</option>
                    <option value="option3">Grade 6</option>
                </select>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-[120px]">
                
                <select className="outline-none lg:text-base text-sm" onChange={handleOptionChange}>
                    <option value="">Program</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg w-[120px]">

                <select className="outline-none lg:text-base text-sm" onChange={handleOptionChange}>
                    <option value="">Availability</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Hero