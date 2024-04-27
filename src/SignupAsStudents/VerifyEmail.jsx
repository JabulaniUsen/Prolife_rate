import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function VerifyEmail() {
  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className="lg:text-3xl text-2xl font-semibold text-[#186BAD]">Verify Email</h1>
        </div>
        <div className="poppins m-auto flex flex-col gap-7 items-center justify-center py-10">
            <p className='lg:w-[700px] text-center text-3xl'>
                Check your inbox for an email from Proliferate.ai 
                and click the verification link to confirm your email address.
            </p>
            <Link to='/dashboard'>
                <button className='bg-[#186BAD] py-2 px-10 text-white rounded-full'>Confirm Email</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
