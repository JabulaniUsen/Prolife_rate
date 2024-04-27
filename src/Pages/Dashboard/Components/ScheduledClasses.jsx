import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faMagnifyingGlass, faEdit, faEllipsisVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import noClass from '../../../Assets/no-class.png'
import classData from '../../Dashboard2/Components/ScheduleClassData';
import ClassModal from '../../Dashboard2/Components/AddClassModal';
import JoinClassModal from '../../Dashboard2/Components/JoinClassModal';
import { motion } from 'framer-motion';

function ScheduledClasses() {

  const [classdata, setClassdata] = useState(classData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const handleJoinNow = () => {
    setShowJoinModal(true);
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
  };

  const filteredClasses = classdata.filter((item) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      item.studentName.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.subject.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.status.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <div className="flex flex-wrap justify-between gap-3 inter">
      {filteredClasses.length === 0 && (
        <div className="flex flex-col gap-3 lg:absolute top-[20rem] m-auto rounded-xl border-[1px] border-[#cccccc] right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noClass} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Classes</p>
          </div>
        </div>
      )}

      {filteredClasses.length > 0 && (
        <>
          <div className="addClassBtn absolute lg:right-20 right-2 lg:top-[130px] top-[90px]">
            <button className='bg-[#2977B5] hover:bg-[#405c74] text-white py-2 px-8 rounded-lg' onClick={openModal}>+ Add Class</button>
          </div>
        </>
      )}
      {filteredClasses.map((item, index) => (
        <div
          className={`classBox p-3 border-[1px] border-[#000] rounded-xl flex flex-col justify-between items-start relative ${
            item.status === 'Ongoing'
              ? 'bg-[#ffecec]'
              : item.status === 'Starting in 60 Minutes'
              ? 'bg-[#ecffee]'
              : ''
          }`}
          key={index}
        >
          <div className="editOptions absolute right-3">
            <FontAwesomeIcon icon={faEllipsisVertical} className='text-xl cursor-pointer' onClick={() => setEditIndex(index)} />
            {editIndex === index && (
              <motion.div 
                className={`absolute right-0 bg-slate-200 px-3 w-[90px] py-2 flex flex-col gap-2 rounded ${editIndex === index ? 'visible' : 'hidden'}`}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <button onClick={() => handleEdit(item)} className='flex items-center justify-between'>Edit <FontAwesomeIcon icon={faEdit} className="text-gray-500 text-sm ml-1" /></button>
                <button onClick={() => deleteClass(item.classid)} className='flex items-center justify-between'>Delete <FontAwesomeIcon icon={faTrash} className="text-gray-500 text-sm ml-1"/></button>
              </motion.div>
            )}
          </div>
          <div className="flex flex-col justify-center lg:w-[300px] sm:w-[180px] w-[300px] gap-5">
            <div className="head">
              <h2 className="font-semibold text-xl">
                {item.subject}
              </h2>
            </div>
            <div className="body">
              <p className="text-[#989898] rounded">
                {item.studentName}
              </p>
              <div className="timeAndDate flex gap-4 my-1">
                <p className='text-[#989898] flex gap-x-1 items-center'><FontAwesomeIcon icon={faClock} />{item.time}</p>
                <p className='text-[#989898] flex gap-x-1 items-center'><FontAwesomeIcon icon={faCalendarDays} />{item.date}</p>
              </div>
              <div className="flex items-center gap-5">
                <p
                  className="status text-sm my-1 p-1 px-3 rounded bg-[#F1F1F1]"
                >
                  Class ID: <span className='text-base'>{item.classid}</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleJoinNow}
            className="bg-[#0c0c0c] w-full p-[0.5rem] mt-1 rounded text-white transition hover:bg-[#000] font-semibold"
          >
            Join Now
          </button>
        </div>
      ))}

      {/* Join Now Modal */}
      <JoinClassModal 
        showModal={showJoinModal} 
        closeModal={closeJoinModal} 
      />
    </div>
  );
}

export default ScheduledClasses;
