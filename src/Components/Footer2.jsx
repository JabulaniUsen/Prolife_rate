import React from 'react';
import logo from '../Assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../Assets/fb.png'
import ig from '../Assets/ig.png'
import li from '../Assets/Linkedin.png'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer2() {
  return (
    <div className='poppins footer2 px-10 lg:px-20 py-20 flex justify-between items-start '>
      <div className="flex flex-col  gap-4">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="socials flex gap-10 my-5">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={li} alt="" />
        </div>
        <form action="">
            <p className='text-white mb-[-20px]'>Subscribe to our Newsletter</p>
            <div className=" flex bg-white my-5 px-2 w-[400px] gap-4 text-black">
                <input type="text" className='bg-transparent outline-none pl-4' placeholder='Enter your email' />
                <button className='bg-[#186bad] px-10 py-2 border-none  text-white ml-[0]'>Subscribe</button>
            </div>
        </form>
      </div>

      <div className="text-white ml-[-200px]">
        <h2 className='text-white text-2xl font-semibold my-5'>CONTACT US</h2>
        <ul className=' flex flex-col gap-2'>
          <li><FontAwesomeIcon icon={faPhone} /> (289)952-2596</li>
          <li><FontAwesomeIcon icon={faEnvelope} /> info@proliferate.ai</li>
        </ul>
      </div>

      <div className="text-white">
        <h2 className='text-white text-2xl font-semibold my-5'>Quick links</h2>
        <ul className=' flex flex-col gap-2'>
          <li className='border-b-2 py-3'>Contact Us</li>
          <li className='border-b-2 py-3'>Refer a Tutor</li>
          <li className='border-b-2 py-3'>Privacy Policy</li>
          <li className='py-3'>Terms & Conditions</li>
        </ul>
      </div>

    </div>
  );
}

export default Footer2;
