import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GradeSubjects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State for input values
  const [gradeLevels, setGradeLevels] = useState({
    elementary: false,
    middle: false,
    high: false,
  });

  const [subjects, setSubjects] = useState({
    mathematics: false,
    english: false,
    science: false,
    socialStudies: false,
    history: false,
    foreignLanguages: false,
    computerScience: false,
    fineArt: false,
    physicalEducation: false,
    other: '',
  });

  const handleGradeLevelsChange = (event) => {
    const { name, checked } = event.target;
    setGradeLevels((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubjectsChange = (event) => {
    const { name, value, checked } = event.target;
    setSubjects((prev) =>
      name === 'other' ? { ...prev, [name]: value } : { ...prev, [name]: checked }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here
    setFormSubmitted(true);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormSubmitted(false);
  };

  return (
    <div className='poppins flex flex-col gap-12'>
      <div className='gradeLevels'>
        <h4 className='font-semibold text-xl'>Grade Levels</h4>
        <p className='my-3 text-lg'>Please select the grade levels you are comfortable tutoring:</p>
        <ul className='flex flex-col gap-2 w-[400px]'>
          {/* Input for Elementary School */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='elementary' className='text-base'>
              • Elementary School (Grade K - 5)
            </label>
            <input
              type='checkbox'
              name='elementary'
              id='elementary'
              checked={gradeLevels.elementary}
              onChange={handleGradeLevelsChange}
            />
          </li>
          {/* Input for Middle School */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='middle' className='text-base'>
              • Middle School (Grade 6 - 8)
            </label>
            <input
              type='checkbox'
              name='middle'
              id='middle'
              checked={gradeLevels.middle}
              onChange={handleGradeLevelsChange}
            />
          </li>
          {/* Input for High School */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='high' className='text-base'>
              • High School (Grade 9 - 12)
            </label>
            <input
              type='checkbox'
              name='high'
              id='high'
              checked={gradeLevels.high}
              onChange={handleGradeLevelsChange}
            />
          </li>
        </ul>
      </div>

      <div className='subjects'>
        <h4 className='font-semibold text-xl'>Subjects</h4>
        <p className='my-3 text-lg'>Please select the subjects you are comfortable tutoring:</p>
        <ul className='flex flex-col gap-2 w-[400px]'>
          {/* Input for Mathematics */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='mathematics' className='text-base'>
              • Mathematics
            </label>
            <input
              type='checkbox'
              name='mathematics'
              id='mathematics'
              checked={subjects.mathematics}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for English Language Arts */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='english' className='text-base'>
              • English Language Arts
            </label>
            <input
              type='checkbox'
              name='english'
              id='english'
              checked={subjects.english}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Science */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='science' className='text-base'>
              • Science
            </label>
            <input
              type='checkbox'
              name='science'
              id='science'
              checked={subjects.science}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Social Studies */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='socialStudies' className='text-base'>
              • Social Studies
            </label>
            <input
              type='checkbox'
              name='socialStudies'
              id='socialStudies'
              checked={subjects.socialStudies}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for History */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='history' className='text-base'>
              • History
            </label>
            <input
              type='checkbox'
              name='history'
              id='history'
              checked={subjects.history}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Foreign Languages */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='foreignLanguages' className='text-base'>
              • Foreign Languages
            </label>
            <input
              type='checkbox'
              name='foreignLanguages'
              id='foreignLanguages'
              checked={subjects.foreignLanguages}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Computer Science */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='computerScience' className='text-base'>
              • Computer Science
            </label>
            <input
              type='checkbox'
              name='computerScience'
              id='computerScience'
              checked={subjects.computerScience}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Fine Art */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='fineArt' className='text-base'>
              • Fine Art
            </label>
            <input
              type='checkbox'
              name='fineArt'
              id='fineArt'
              checked={subjects.fineArt}
              onChange={handleSubjectsChange}
            />
          </li>
          {/* Input for Physical Education */}
          <li className='flex justify-between items-center gap-10'>
            <label htmlFor='physicalEducation' className='text-base'>
              • Physical Education
            </label>
            <input
              type='checkbox'
              name='physicalEducation'
              id='physicalEducation'
              checked={subjects.physicalEducation}
              onChange={handleSubjectsChange}
            />
          </li>
        </ul>
      </div>

      <div className='additionalInfo'>
        <h4 className='font-semibold text-xl'>Please Note</h4>
        <p className='my-3 text-lg'>
          Please provide any additional information about your grade and subject preferences, such as specific topics
          or areas of expertise. This will help us match you with suitable students and assignments.
        </p>
      </div>

      <button className='bg-[#186BAD] rounded-lg px-6 py-3 text-white w-[100px] m-auto' onClick={handleSubmit}>
        Submit
      </button>

      {/* Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50'
        >
          <div className='bg-white p-8 rounded shadow-lg flex flex-col justify-start items-center'>
            <h2 className='text-xl mb-4'>Profile and Settings Completed</h2>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={closePopup}>
              OK
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GradeSubjects;
