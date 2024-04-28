import React, { useState } from 'react';

function LearningGoals({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    shortTermGoals: '',
    longTermGoals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    onNext({ learningGoals: formData });
  };

  return (
    <div className="">
      <div className='lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
        <h2 className='text-center lg:w-[700px] m-auto mb-16'>
          Describe any challenges and short-term goals you want to achieve. Outline your long-term goals. 
          This information will help us tailor the tutoring experience to meet your needs.
        </h2>
        <form onSubmit={handleNext} className='grid lg:grid-cols-1 grid-cols-1 gap-14 gap-x-10 '>
          <div className="flex flex-col">
            <label className='text-base font-semibold'>Short-term Goals:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <textarea name="shortTermGoals" value={formData.shortTermGoals} onChange={handleChange} className='w-full outline-none' placeholder='Short-term Goals' />
            </div>
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Long-term Goals:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <textarea name="longTermGoals" value={formData.longTermGoals} onChange={handleChange} className='w-full outline-none' placeholder='Long-term Goals' />
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-end justify-between lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
        <button className=' flex border border-[#1f70b2] text-[#1f70b2] hover:bg-[#1f70b2] transition-all hover:text-white font-semibold px-10 py-2 rounded' onClick={onBack}>Back</button>
        <button type="submit" className=' flex bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default LearningGoals;
