import React, { useState } from 'react';
import placeholderImage from '../../Icons/placeholder.jpg'

const Credential = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div>
        <form action="">
        <div className="bg-white lg:py-9   flex items-center justify-between border-b-2">
          <div className="">
            <p className='text-sm poppins mb-2'>Your Profile Picture</p>
            <div className="flex items-center relative">
              <div className="w-[92.48px] h-[82.68px] bg-[#EDF2F6] border-dotted border-[2px] border-[#4c535f] rounded-2xl overflow-hidden">
                
                <label htmlFor="displayPhoto"
                  className="w-full h-full bg-cover cursor-pointer bg-center p-10 bg-no-repeat "
                  style={{
                    backgroundImage: `url(${selectedImage || placeholderImage})`,
                    backgroundSize: '90px', 
                    paddingBottom: '90px',
                    paddingLeft: '48px'
                  }}
                  onChange={handleImageChange}
                >
                </label>
              </div>
              <div className="">
                <input
                  className="hidden"
                  id='displayPhoto'
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="poppins grid grid-cols-2 gap-5 my-10">
          <div className="">
            <p>Full name</p>
            <input type="text" className='w-[320px] rounded bg-[#EDF2F6] p-3' 
            placeholder='Please enter your full name'
            />
          </div>
          <div className="">
            <p>Email</p>
            <input type="email" className='w-[320px] rounded bg-[#EDF2F6] p-3' 
            placeholder='Please enter your email'
            />
          </div>
          <div className="">
            <p>Username</p>
            <input type="text" className='w-[320px] rounded bg-[#EDF2F6] p-3' 
            placeholder='Please enter your username'
            />
          </div>
          <div className="">
            <p>Phone number</p>
            <input type="text" className='w-[320px] rounded bg-[#EDF2F6] p-3' 
            placeholder='+1    Please enter your phone number'
            />
          </div>
          <div className="col-span-2">
            <p>Bio</p>
            <textarea  
              className='w-full rounded bg-[#EDF2F6] p-3 h-[180px] outline-none' 
              placeholder='Write your Bio here e.g your hobbies, interests ETC'
            />
          </div>
        </div>
        <div className="buttons">
          <button className='text-white bg-[#186BAD] rounded px-4 py-2 font-bold'>Update Profile</button>
          <button className=' text-[#186BAD] rounded px-4 py-2 font-semibold'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Credential