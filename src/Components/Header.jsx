import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: menuOpen ? 'translateX(0%)' : 'translateX(100%)',
  });

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='poppins flex justify-between items-center px-5 lg:px-28 py-5 z-30 '>
      <div className="logo lg:w-[250px] w-[120px]">
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="list hidden lg:flex gap-6 text-sm font-semibold">
        <Link to='/tutor'>Find Tutor</Link>
        <Link to='/about'>About us</Link>
        <Link to='/program'>Our Programs</Link>
        {/* <Link to='/pricingpage'>Pricing</Link> */}
        <Link>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </div>

      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl cursor-pointer"
          onClick={handleMenuToggle}
        />
      </div>

      <animated.div
        className={` ${ !menuOpen ? 'hidden' : 'block'} lg:hidden absolute z-10 top-[4.5rem] right-0 h-full w-full m-auto p-10 bg-white`}
        style={menuAnimation}
      >
        <ul className='flex flex-col gap-5 justify-center items-center  text-lg font-semibold'>
          <Link to='/tutor' className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>Find Tutor</Link>
          <Link to='/about' className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>About us</Link>
          <Link to='/program' className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>Our Programs</Link>
          <Link to='/pricingpage' className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>Pricing</Link>
          <Link className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>Blog</Link>
          <Link to='/contact' className='hover:hover:bg-[#186bad] hover:text-white px-3 py-1 rounded-lg transition'>Contact</Link>
            <Link to='/signin'><button className='bg-[#186bad] px-8 flex items-center py-1 text-white rounded-lg'>Login</button></Link>
            <Link to='/register'><button className='bg-transparent px-6 py-1 rounded-lg border-2'>Sign Up</button></Link>
        </ul>
      </animated.div>

      <div className="accounts gap-3 font-semibold hidden lg:flex">
        <Link to='/signin'><p className='bg-[#186bad] px-8 flex items-center py-1 text-white rounded-lg'>Login</p></Link>
        <Link to='/register'><button className='bg-transparent px-6 py-1 rounded-lg border-2'>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Header;
