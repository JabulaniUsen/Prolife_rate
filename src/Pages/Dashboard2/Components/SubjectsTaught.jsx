import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import SubjectFormModal from './SubjectModal';

const SubjectsTaught = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleAddSubject = () => {
    setIsModalOpen(true);
  };

  const handleSaveSubject = (formData) => {
    if (selectedSubject) {
      // Edit existing subject
      setSubjects((prevSubjects) =>
        prevSubjects.map((subject) =>
          subject.id === selectedSubject.id ? { ...subject, ...formData } : subject
        )
      );
    } else {
      // Add new subject
      setSubjects((prevSubjects) => [...prevSubjects, { id: Date.now(), ...formData }]);
    }

    setIsModalOpen(false);
    setSelectedSubject(null);
  };

  const handleEditSubject = (subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const handleDeleteSubject = (id) => {
    setSubjects((prevSubjects) => prevSubjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className='p-6 shadow lg:h-[380px] rounded-xl overflow-y-scroll waitingRoom'>
      <h3 className='poppins font-semibold text-2xl my-2'>Subjects I teach</h3>

      {/* Display Subjects */}
      <div className="subjectDisplay grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {subjects.map((subject) => (
          <motion.div
            key={subject.id}
            className="bg-white p-4 rounded-lg shadow-md relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <p className="font-bold text-xl">{subject.subject}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-gray-500 cursor-pointer"
                  onClick={() => handleEditSubject(subject)}
                />
                <FontAwesomeIcon
                  icon={faTrash}  
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteSubject(subject.id)}
                />
              </div>
            </div>
            <div className='formRender poppins'>
              <div className="flex flex-col">
                <p className="flex font-semibold gap-1">Grade: <span className='font-normal'> {subject.level}<span className='text-xs'>th</span></span></p>
                <p className="font-semibold">Price: $<span className='font-normal'>{subject.price}/month</span></p>
                <p className="font-semibold">Class Id: <span className='font-normal'>{subject.classId}</span></p>
              </div>
              {/* Schedules */}
              <div className="">
                <h4 className='font-semibold my-1 mt-2 text-xl poppins'>Schedules:</h4>
                {subject.days.map((schedule, index) => (
                  <div key={index} className='p-4 my-2 bg-slate-200 rounded-xl'>
                    <p className='font-semibold'>Day: <span className='font-normal'>{schedule.days}</span></p>
                    <p className='flex gap-1 font-semibold'>
                      Time: 
                      <div className='flex gap-2'>
                        <p className='startTime'><span className="font-normal">{schedule.start_time}</span></p> -
                        <p className='endTime'><span className="font-normal">{schedule.end_time}</span></p>
                      </div>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Subject Button */}
      <div
        className="w-[50px] h-[50px] rounded-full hover:border-[#e6e6e6] hover:border-[2px] border-[0.1px] p-1 mt-4 flex flex-col justify-center items-center gap-3 cursor-pointer"
        onClick={handleAddSubject}
      >
        <FontAwesomeIcon icon={faPlus} className='text-3xl text-gray-400 hover:transition-transform hover:rotate-90 hover:text-[#186BAD] hover:border-[#186BAD]' />
      </div>

      {/* Add/Edit Subject Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SubjectFormModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSave={handleSaveSubject}
              selectedSubject={selectedSubject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubjectsTaught;
