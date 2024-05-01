import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

function PersonalInfoTab({ onNext }) {
  const [showPassword, setShowPassword] = useState(false); 
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    gender: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
    
    setErrors({
      ...errors,
      [name]: undefined
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    // Check if all fields are filled
    if (!values.firstName || !values.lastName || !values.email || !values.contactNumber || !values.gender || !values.password) {
      newErrors.allFields = 'All fields are required';
    }
    
    if (!passwordRegex.test(values.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
    }
    
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      onNext({ personalInfo: values });
    } else {
      setErrors(newErrors);
    }
  };
  

  return (
    <div className=''>
      <form action="" onSubmit={handleSubmit}>
        <div className="lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins">
          <h2 className='text-center lg:w-[700px] m-auto mb-16'>Please provide your full name, email address, contact number, gender and Password. Ensure that the information is accurate and up-to-date.</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 gap-x-10 '>
            <div className="flex flex-col">
              <label className='text-base font-semibold'>First Name:</label>
              <div className="border border-gray-300 bg-white p-3 rounded-lg">
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} className='w-full' required placeholder='First Name' />
              </div>
            </div>

            <div className="flex flex-col">
              <label className='text-base font-semibold'>Last Name:</label>
              <div className="border border-gray-300 bg-white p-3 rounded-lg">
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} className='w-full' required placeholder='Last Name' />
              </div>
            </div>

            <div className="flex flex-col">
              <label className='text-base font-semibold'>Email:</label>
              <div className="border border-gray-300 bg-white p-3 rounded-lg">
                <input type="email" name="email" value={values.email} onChange={handleChange} className='w-full' required placeholder='Enter your Email Address'/>
              </div>
            </div>

            <div className="flex flex-col">
              <label className='text-base font-semibold'>Contact Number:</label>
              <PhoneInput
                defaultCountry='ng'
                value={values.contactNumber}
                onChange={phone => setValues({ ...values, contactNumber: phone })}
              />
            </div>
            
            <div className="flex flex-col">
              <label className='text-base font-semibold'>Gender:</label>
              <div className="border border-gray-300 bg-white p-3 rounded-lg">
                <select name="gender" value={values.gender} onChange={handleChange} className='w-full outline-none'>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className='text-base font-semibold'>Password:</label>
              <div className="border border-gray-300 bg-white flex items-center rounded-lg pr-3">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  name="password" 
                  value={values.password} 
                  onChange={handleChange} 
                  className='flex-1 p-3 focus:outline-none'
                  required 
                  placeholder='Enter your Password'
                />
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  className="cursor-pointer" 
                  onClick={togglePasswordVisibility} 
                />
              </div>
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>

          </div>
          {errors.allFields && <div className="text-red-500 text-sm mt-5">{errors.allFields}</div>}
        </div>
        <div className="flex items-end justify-end lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
          <button type="submit" className='bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>Next</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoTab;
