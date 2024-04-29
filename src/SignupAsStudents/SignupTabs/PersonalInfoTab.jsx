import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function PersonalInfoTab({ onNext }) {
  const [countryCodes, setCountryCodes] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchCountryCodes();
  }, []);

  const fetchCountryCodes = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const codes = data.map(country => ({
          code: country.cca2,
          name: country.name.common,
          flag: country.flags.svg 
        }));
        setCountryCodes(codes);
      })
      .catch(error => console.error('Error fetching country data:', error));
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+1',
      contactNumber: '',
      gender: '',
      password: ''
    },
    onSubmit: values => {
      onNext({ personalInfo: values });
    },
    validate: values => {
      const errors = {};
      if (!values.firstName || !values.lastName || !values.email || !values.contactNumber || !values.gender || !values.password) {
        errors.allFields = 'All fields are required';
      }
      return errors;
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=''>
      <div className="lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins">
        <h2 className='text-center lg:w-[700px] m-auto mb-16'>Please provide your full name, email address, contact number, gender and Password. Ensure that the information is accurate and up-to-date.</h2>
        <form className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 gap-x-10 '>
          <div className="flex flex-col">
            <label className='text-base font-semibold'>First Name:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} className='w-full' required placeholder='First Name' />
            </div>
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Last Name:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} className='w-full' required placeholder='Last Name' />
            </div>
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Email:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className='w-full' required placeholder='Enter your Email Address'/>
            </div>
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Contact Number:</label>
            <div className="border border-gray-300 bg-white py-3 px-2 rounded-lg flex">
              <select 
                value={formik.values.countryCode} 
                onChange={formik.handleChange} 
                name="countryCode" 
                className='w-1/4 border-r border-gray-300 focus:outline-none text-xs'
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={`+${country.code}`}>{country.name}</option>
                ))}
              </select>
              <input type="number" name="contactNumber" value={formik.values.contactNumber} onChange={formik.handleChange} className='flex-1 pl-2 focus:outline-none' required placeholder='Enter your Contact Number' />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className='text-base font-semibold'>Gender:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <select name="gender" value={formik.values.gender} onChange={formik.handleChange} className='w-full outline-none'>
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
                value={formik.values.password} 
                onChange={formik.handleChange} 
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
          </div>
        </form>
        {formik.errors.allFields && <div className="text-red-500 text-sm mt-5">{formik.errors.allFields}</div>}
      </div>
      <div className="flex items-end justify-end lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
        <button onClick={formik.handleSubmit} type="submit" disabled={!formik.isValid} className='bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>Next</button>
      </div>
    </div>
  );
}

export default PersonalInfoTab;
