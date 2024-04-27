import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { createClassAction } from '../../../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearCreateClassStatus } from '../../../Redux/reducers/authReducer';


const SubjectFormModal = ({ isOpen, onClose, onSave, selectedSubject }) => {

  const generateClassId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (authSelector.createClassActionStatus === 'failed') {
      toast.error(`${authSelector.createClassActionError}`);
      dispatch(clearCreateClassStatus());
    }
  }, [authSelector.createClassActionStatus, dispatch]);

  useEffect(() => {
    if (authSelector.createClassActionStatus === 'completed') {
      // Show toast message
      // toast.success('Account created', {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 3000, // 3 seconds
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
      setTimeout(() => {
        
        dispatch(clearCreateClassStatus());
      }, 3000);
    }
  }, [authSelector.createClassActionStatus, dispatch]);


  const [formData, setFormData] = useState({
    subject: '',
    price: '',
    level: '',
    classId: generateClassId(),
    days: [],
    timesPerWeek: '',
    start_time: '',
    end_time: '',
  });
  

  useEffect(() => {
    if (selectedSubject) {
      setFormData({
        subject: selectedSubject.subject || '',
        price: selectedSubject.price || '',
        level: selectedSubject.level || '',
        classId: selectedSubject.classId || generateClassId(),
        days: selectedSubject.days || [],
        start_time: selectedSubject.start_time || '',
        end_time: selectedSubject.end_time || '',
      });
    } else {
      setFormData({
        subject: '',
        price: '',
        level: '',
        classId: generateClassId(),
        days: [],
        start_time: '',
        end_time: '',
      });
    }
  }, [selectedSubject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSchedule = () => {
    setFormData({
      ...formData,
      days: [
        ...formData.days,
        {
          day: '',
        },
      ],
    });
  };
  

  const handleRemoveSchedule = (index) => {
    const updateddays = [...formData.days];
    updateddays.splice(index, 1);
    setFormData({
      ...formData,
      days: updateddays,
    });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedDays = [...formData.days];
    updatedDays[index][field] = value;

    setFormData({
      ...formData,
      days: updatedDays,
    });
  };


  const handleSave = () => {
    dispatch(
      createClassAction({
        subject: formData.subject,
        price: formData.price,
        level: formData.level,
        classId: formData.classId,
        days: formData.days,
        start_time: formData.start_time,
        end_time: formData.end_time,
      })
    );
    onSave(formData);
  };

  

  const isAddScheduleButtonDisabled = () => {
    return formData.days.length === parseInt(formData.timesPerWeek, 10);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-1/1 left-1/1 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className=" flex gap-10 flex-wrap">
            <div className="">
              <div className="grid">
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder='Select subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                    Price
                  </label>
                  <input
                    required
                    type="number"
                    id="price"
                    name="price"
                    placeholder='Price in $ per month'
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="level" className="block text-sm font-medium text-gray-600">
                    level
                  </label>
                  <input
                    required
                    type="number"
                    id="level"
                    name="level"
                    placeholder='What level do you teach'
                    value={formData.level}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="classId" className="block text-sm font-medium text-gray-600">
                    Class ID
                  </label>
                  <input
                    required
                    type="number"
                    id="classId"
                    name="classId"
                    value={formData.classId}
                    onChange={handleChange}
                    readOnly
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-[195px]"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-4">
                <label htmlFor="timesPerWeek" className="block text-sm font-medium text-gray-600">
                  How many times will you teach per week?
                </label>
                <input
                  required
                  type="number"
                  id="timesPerWeek"
                  name="timesPerWeek"
                  value={formData.timesPerWeek}
                  onChange={handleChange}
                  placeholder="Enter number of times per week"
                  className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                />
              </div>


              <div className="mb-4">
                  {formData.days.map((schedule, index) => (
                    <div key={index} className="flex gap-4 items-center mt-2">
                      <div className="flex flex-col">
                        <h4>Day</h4>
                        <select
                          value={schedule.days} // Corrected property name
                          onChange={(e) => handleScheduleChange(index, 'days', e.target.value)} // Corrected property name
                          className="p-2 border bg-slate-100 rounded-md"
                        >

                          <option value="" disabled>Select day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <h4>Start time</h4>
                        <input
                          type="time"
                          value={schedule.start_time}
                          onChange={(e) =>
                            handleScheduleChange(index, 'start_time', e.target.value)
                          }
                          className="p-2 border bg-slate-100 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4>End time</h4>
                        <input
                          type="time"
                          value={schedule.end_time}
                          onChange={(e) =>
                            handleScheduleChange(index, 'end_time', e.target.value)
                          }
                          className="p-2 border bg-slate-100 rounded-md"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveSchedule(index)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  className={`mt-2 text-blue-500 py-2 rounded-md hover:text-blue-600 ${
                    isAddScheduleButtonDisabled() ? 'cursor-not-allowed text-blue-200' : 'cursor-pointer'
                  }`}
                  onClick={handleAddSchedule}
                  disabled={isAddScheduleButtonDisabled()}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className='text-xl'/>
                </button>
              </div>
            </div>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-500 hover:text-gray-700"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubjectFormModal;
