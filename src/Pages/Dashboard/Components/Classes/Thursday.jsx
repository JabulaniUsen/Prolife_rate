import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendar, faCalendarDays, faClock, faL, faMagnifyingGlass, faMap, faMapMarked, faUser } from '@fortawesome/free-solid-svg-icons';
import noClass from '../../../../Assets/no-class.png'
import classData from '../../Components/ScheduleClassData'
// import AddClassPopup from '../AddClassModal';
import JoinClassModal from '../JoinClassModal';

const Thursday = () => {
  const [classdata, setClassdata] = useState(classData);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Create a unique formData for each class box
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    date: '',
    startTime: '',
    endTime: '',
    classid: '',
    tutorsName: ''
  });


  const handleJoinNow = () => {
    setShowJoinModal(true);
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
  };

  const OpenModal = () => {
    // Generate a new random class id and reset formData
    generateRandomClassId();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    generateRandomClassId();
  }, []);

  const generateRandomClassId = () => {
    const randomClassId = Math.floor(100 + Math.random() * 900);
    setFormData({
      subject: '',
      grade: '',
      date: '',
      startTime: '',
      endTime: '',
      tutorsName: '',
      classid: randomClassId.toString(),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the classid already exists in classdata
    const existingClassIndex = classdata.findIndex((item) => item.classid === formData.classid);

    if (existingClassIndex !== -1) {
      // If classid exists, update the existing class data
      const updatedClassData = [...classdata];
      updatedClassData[existingClassIndex] = formData;
      setClassdata(updatedClassData);
    } else {
      // If classid doesn't exist, add the new class data
      setClassdata((prevData) => [...prevData, formData]);
    }

    // Generate a new random class id and reset formData
    generateRandomClassId();
    closeModal();
  };

  const filteredClasses = classdata.filter((item) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return item.subject.toLowerCase().includes(lowerCaseSearchQuery);
  });



  return (
    <div className="grid grid-cols-3 gap-3 inter">
      {filteredClasses.length === 0 ? (
        <div className="flex flex-col gap-3 absolute top-[20rem] rounded-xl border-[1px] border-[#000000] right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noClass} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Classes</p>
          </div>
        </div>
      ) : (
        <>
          {filteredClasses.map((item, index) => (
            <div className="">
              <JoinClassModal
                showModal={showJoinModal} 
                closeModal={closeJoinModal} 
                // roomId={formData.classid}
              />
                <div
                  className="classBox p-3 cursor-pointer rounded-lg flex flex-col justify-center items-center bg-[#e57553]"
                  onClick={handleJoinNow}
                  key={index}
                >
                  <div className="flex flex-col justify-center gap-2 text-center text-[#fff]">
                    <div className="head text-center">
                      <h2 className="font-semibold text-lg py-3">
                        Class ID: {item.classid}
                      </h2>
                      <hr />
                    </div>
                    <div className="flex justify-between">
                      <p className="rounded flex gap-5 items-center justify-center">
                        <FontAwesomeIcon icon={faUser}/>
                        {item.tutorsName}
                      </p>
                      <p className="rounded flex gap-5 items-center justify-center">
                        <FontAwesomeIcon icon={faBook}/>
                        {item.subject}
                      </p>
                    </div>
                    <div className="flex justify-between gap-5 my-4">
                      <p className=' flex gap-x-1 items-center'>
                        <FontAwesomeIcon icon={faCalendar} />
                        {item.date}
                      </p>
                      <p className=' flex gap-x-1 items-center'>
                        <FontAwesomeIcon icon={faClock} />
                        {item.startTime} - {item.endTime}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Thursday;
