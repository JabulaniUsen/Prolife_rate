import React, { useState, useEffect } from 'react';

function Preferences({ onNext }) {
  const [formData, setFormData] = useState({
    availability: '',
    additionalPreferences: '',
    communicationLanguage: ''
  });

  const languages = [
    'English',
    'Mandarin Chinese',
    'Hindi',
    'Spanish',
    'French',
    'Arabic',
    'Bengali',
    'Russian',
    'Portuguese',
    'Urdu',
    'Indonesian',
    'German',
    'Japanese',
    'Swahili',
    'Marathi',
    'Telugu',
    'Turkish',
    'Tamil',
    'Vietnamese',
    'Korean',
    'Italian',
    'Yoruba',
    'Thai',
    'Gujarati',
    'Javanese',
    'Filipino',
    'Persian',
    'Polish',
    'Pashto',
    'Kannada'
  ];
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    onNext({ preferences: formData });
  };

  return (
    <div className='lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
      <h2 className='text-center lg:w-[700px] m-auto mb-16'>Please provide your preferences.</h2>
      <form onSubmit={handleNext} className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 gap-x-10 '>
        <div className="flex flex-col">
          <label className='text-base font-semibold'>Availability:</label>
          <div className="border border-gray-300 bg-white p-3 rounded-lg">
            <select name="availability" value={formData.availability} onChange={handleChange} className='w-full outline-none'>
              <option value="">Select</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className='text-base font-semibold'>Additional Preferences/Requirements:</label>
          <div className="border border-gray-300 bg-white p-3 rounded-lg">
            <textarea name="additionalPreferences" value={formData.additionalPreferences} onChange={handleChange} className='w-full outline-none' placeholder='Additional Preferences/Requirements'  />
          </div>
        </div>

        <div className="flex flex-col">
          <label className='text-base font-semibold'>Communication Language:</label>
          <div className="border border-gray-300 bg-white p-3 rounded-lg">
            <select name="communicationLanguage" value={formData.communicationLanguage} onChange={handleChange} className='w-full outline-none'>
              <option value="">Select</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <div className="flex items-end justify-end">
        <button onClick={handleNext} className='mt-10 flex items-end justify-end bg-[#1f70b2] text-white font-semibold px-5 py-2 rounded'>Next</button>
      </div>
    </div>
  );
}

export default Preferences;
