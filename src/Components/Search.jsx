import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div 
    // className="search flex bg-white my-5 px-2 py-[1px] w-[520px] gap-4 text-black rounded-lg shadow-lg"
    >
        {/* <select id="dropdown bg-transparent border-none">
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <input type="text" className='bg-transparent outline-none' placeholder='Class/Course' /> */}
        <Link to='/signin'>
          <button className='signup bg-[#186bad] px-7 py-[7px] my-5 border-none rounded-lg text-white'>Get Started</button>
        </Link>
    </div>
  )
}

export default Search