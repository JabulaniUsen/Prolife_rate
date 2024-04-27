import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function EducationalInfomation() {
  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="inter header text-center">
          <h1 className="lg:text-3xl text-2xl  ">Educational Information</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form flex justify-center flex-col">
            <div className="my-2">
              <p className=" mb-1 ">Grade Level</p>
              <div className="flex flex-col justify-end border border-[#e9eaf0] pr-5 py-1">
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className=' p-3 lg:w-[450px] w-[300px] outline-none rounded-sm text-[#8a8a8a]'
                >
                  <option value="Choose your grade level" className='text-[#dadada]'>Choose your grade level</option>
                  <option value="driver's license">Pre-K and Early Education</option>
                  <option value="International Passport">Elementary School (Grades K-5)</option>
                  <option value="Voter ID card">Middle School (Grades 6-8)</option>
                  <option value="Provincial ID Card">High School (Grades 9-12)</option>
                  <option value="Residence Card">Elective Subjects</option>
                </select>
                
              </div>
            </div>

            <div className="my-2">
              <p className=" mb-1 ">Preferred Subjects</p>
              <div className="flex flex-col justify-end border border-[#e9eaf0] pr-5 py-1">
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className=' p-3 lg:w-[450px] w-[300px] outline-none rounded-sm text-[#8a8a8a]'
                >
                  <option value="Select your preferred subjects" className='text-[#dadada]'>Select your preferred subjects</option>
                  <option value="driver's license">Driver's license</option>
                  <option value="International Passport">International Passport</option>
                  <option value="Voter ID card">Voter ID card</option>
                  <option value="Provincial ID Card">Provincial ID Card</option>
                  <option value="Residence Card">Residence Card</option>
                  <option value="National ID Card">National ID Card</option>
                </select>
                
              </div>
            </div>

            <div className="my-2">
              <p className=" mb-1 ">Grade Level</p>
              <div className="flex flex-col justify-end border border-[#e9eaf0] pr-5 py-1">
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className=' p-3 lg:w-[450px] w-[300px] outline-none rounded-sm'
                >
                  <option value="" className='text-[#dadada]'></option>
                  <option value="driver's license">Driver's license</option>
                  <option value="International Passport">International Passport</option>
                  <option value="Voter ID card">Voter ID card</option>
                  <option value="Provincial ID Card">Provincial ID Card</option>
                  <option value="Residence Card">Residence Card</option>
                  <option value="National ID Card">National ID Card</option>
                </select>
                
              </div>
            </div>

            <div className="my-2">
              <p className=" mb-1 ">Grade Level</p>
              <div className="flex flex-col justify-end border border-[#e9eaf0] pr-5 py-1">
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className=' p-3 lg:w-[450px] w-[300px] outline-none rounded-sm'
                >
                  <option value="" className='text-[#dadada]'></option>
                  <option value="driver's license">Driver's license</option>
                  <option value="International Passport">International Passport</option>
                  <option value="Voter ID card">Voter ID card</option>
                  <option value="Provincial ID Card">Provincial ID Card</option>
                  <option value="Residence Card">Residence Card</option>
                  <option value="National ID Card">National ID Card</option>
                </select>
                
              </div>
            </div>

            <div className="my-2 flex items-start">
              <input type="checkbox" name="" id="" className='w-[30px] mt-1' />
              <p>
                To ensure a secure learning environment, <br />
                a background check may be required.
              </p>
            </div>

            <Link to='/verifyemail'><button
            //   onClick={handleSignUp}
              type="submit"
              className={`signup text-white  py-2 px-10 bg-[#186BAD] opacity-50 cursor-not-allowed}`}
            >
              Sign up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalInfomation;
