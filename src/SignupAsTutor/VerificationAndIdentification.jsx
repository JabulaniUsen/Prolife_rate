import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer2 from '../Components/Footer2';

function VerificationAndIdentity() {
  const [fileUploadStatus, setFileUploadStatus] = useState('');

  const handleFileUpload = (inputId) => {
    const fileInput = document.getElementById(inputId);

    setTimeout(() => {
      setFileUploadStatus('File uploaded successfully');
    }, 2000);

    fileInput.value = '';
  };

  const [fileUploadStatus2, setFileUploadStatus2] = useState('');

  const handleFileUpload2 = (inputId) => {
    const fileInput2 = document.getElementById(inputId);

    setTimeout(() => {
      setFileUploadStatus2('File uploaded successfully');
    }, 2000);

    fileInput2.value = '';
  };

  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className="lg:text-3xl text-2xl font-semibold text-[#186BAD]">Verification & Confirmation</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form flex justify-center flex-col">
            <div className="my-7">
              <p className="text-[#186BAD] text-sm lg:text-base mb-1 font-semibold">Means of Identification</p>
              <div className="flex flex-col justify-end">
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className='bg-[#F2F1F1] p-3 lg:py-4 lg:w-[600px] w-[300px] outline-none rounded-sm'
                >
                  <option value="" className='text-[#dadada]'></option>
                  <option value="driver's license">Driver's license</option>
                  <option value="International Passport">International Passport</option>
                  <option value="Voter ID card">Voter ID card</option>
                  <option value="Provincial ID Card">Provincial ID Card</option>
                  <option value="Residence Card">Residence Card</option>
                  <option value="National ID Card">National ID Card</option>
                </select>
                <div className="flex justify-end">
                    <label htmlFor="fileUpload1" className="fileUpload text-right mt-1 lg:text-base text-[#186bad] font-semibold cursor-pointer">
                    {fileUploadStatus || 'Upload file here'}
                    </label>
                    <input
                    type="file"
                    id="fileUpload1"
                    name="fileUpload1"
                    style={{ display: 'none' }}
                    onChange={() => handleFileUpload('fileUpload1')}
                    />
                </div>
              </div>
            </div>

            <div className="my-7">
              <p className="text-[#186BAD] text-sm lg:text-base mb-1 font-semibold">What is your highest Educational Qualification?</p>
              <div className="flex flex-col justify-end">
                <select
                  id="dropdown2"
                  name="dropdown2"
                  className='bg-[#F2F1F1] p-3 lg:py-4 lg:w-[600px] w-[300px] outline-none rounded-sm'
                >
                  <option value="" className='text-[#dadada]'></option>
                  <option value="High School Diploma">High School Diploma</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                  <option value="Master’s Degree">Master’s Degree</option>
                  <option value="Doctoral Degree (Ph.D)">Doctoral Degree (Ph.D)</option>
                  <option value="Specialized Certification">Specialized Certification</option>
                </select>
                <div className="flex justify-end">
                    <label htmlFor="fileUpload2" className="fileUpload text-right mt-1 lg:text-base text-[#186bad] font-semibold cursor-pointer">
                    {fileUploadStatus2 || 'Upload file here'}
                    </label>
                    <input
                    type="file"
                    id="fileUpload2"
                    name="fileUpload2"
                    style={{ display: 'none' }}
                    onChange={() => handleFileUpload2('fileUpload2')}
                    />
                </div>
              </div>
            </div>

            <div className="my-7 flex items-start">
              <input type="checkbox" name="" id="" className='w-[30px] mt-1' />
              <p className='text-sm'>
                To ensure a secure learning environment, 
                a background check may be required.
              </p>
            </div>

            <Link to='/verifyemail'>
              <p className='text-right poppins cursor-pointer text-lg font-semibold'>Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' /></p>
            </Link>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}

export default VerificationAndIdentity;
