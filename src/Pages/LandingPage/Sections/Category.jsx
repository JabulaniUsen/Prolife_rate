import React from 'react'
import label from '../../../Assets/label.png'
import business from '../../../Assets/business.png'
import finance from '../../../Assets/finance.png'
import it from '../../../Assets/it.png'
import personal from '../../../Assets/personal.png'
import office from '../../../Assets/office.png'
import marketing from '../../../Assets/marketing.png'
import photography from '../../../Assets/photography.png'
import lifestyle from '../../../Assets/lifestyle.png'
import design from '../../../Assets/design.png'
import health from '../../../Assets/health.png'
import music from '../../../Assets/music.png'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='poppins py-20 flex flex-col items-center gap-20 justify-center'>
        <div className="cat-header text-center">
            <h1 className=' text-[#186BAD] lg:text-5xl text-3xl font-bold'>Browse top category </h1>
            <h3 className='lg:text-2xl font-semibold text-center my-7'>Dive into a World of Knowledge</h3>
        </div>

        <div className="cats grid lg:grid-cols-4 grid-cols-2 gap-5 px-5">

            <div className="cat bg-[#ebebff] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={label} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Mathematics</h3>
                    <p className='text-[#6E7485] text-sm'>63,476 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#e1f7e3] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={business} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Science</h3>
                    <p className='text-[#6E7485] text-sm'>52,822 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#fff2e5] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={finance} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Language Arts </h3>
                    <p className='text-[#6E7485] text-sm'>33,841 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#fff0f0] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={it} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Computer Science & Programming</h3>
                    <p className='text-[#6E7485] text-sm'>22,649 Courses</p>
                </div>
            </div>

            <div className="cat bg-[#ffff] shadow-lg p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-[#ff6636] p-2 rounded">
                    <img src={personal} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>History</h3>
                    <p className='text-[#6E7485] text-sm'>20,126 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#fff0f0] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={office} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Geography</h3>
                    <p className='text-[#6E7485] text-sm'>13,932 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#ebebff] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={marketing} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Marketing</h3>
                    <p className='text-[#6E7485] text-sm'>12,068 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#f5f7fa] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={photography} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Foreign Languages </h3>
                    <p className='text-[#6E7485] text-sm'>6,196 Courses</p>
                </div>
            </div>

            <div className="cat bg-[#fff2e5] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={lifestyle} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Physical Education & Sports</h3>
                    <p className='text-[#6E7485] text-sm'>2,736 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#ffeee8] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={design} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Economics & Business Studies</h3>
                    <p className='text-[#6E7485] text-sm'>2,600 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#e1f7e3] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={health} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Art & Design</h3>
                    <p className='text-[#6E7485] text-sm'>1,678 Courses</p>
                </div>
            </div>
            <div className="cat bg-[#fff2e5] p-5 lg:w-[300px] flex gap-4 rounded">
                <div className="icons lg:block hidden bg-white p-2 rounded">
                    <img src={music} alt="" />
                </div>
                <div className="text flex flex-col items-left justify-center gap-[5px]">
                    <h3 className='font-semibold lg:w-[200px] text-[#1D2026]'>Music</h3>
                    <p className='text-[#6E7485] text-sm'>959 Courses</p>
                </div>
            </div>

        </div>

        <div className="more px-11">
            <h2>
                We have more category & subcategory. <Link to='/program'><span className='text-[#186bad] font-bold text-lg ml-2 cursor-pointer'>Browse All</span></Link>
            </h2>
        </div>
    </div>
  )
}
export default Category