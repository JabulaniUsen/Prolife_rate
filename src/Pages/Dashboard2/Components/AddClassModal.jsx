import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddClassPopup = ({ showModal, closeModal, formData, handleSubmit, handleInputChange }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="popup-container poppins bg-white rounded-md px-10 pb-8"
          >
            <div className="bg-[#186BAD] rounded p-4 mb-10">
              <p className='text-white text-xl text-center'>Add Subject & Availability</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center gap-4">
                <label htmlFor="student" className="block text-base font-semibold text-gray-600">
                  Student Name:
                </label>
                <select
                  name="studentName"
                  id="studentName"
                  className='w-full px-3 py-2 border-gray-500 border-[1px] rounded-md'
                  value={formData.studentName}
                  onChange={handleInputChange}
                >
                  <option value="SelectStudent"></option>
                  <option value="Jabulani">Jabulani Usen</option>
                  <option value="Martins">Martins Olu</option>
                  <option value="Kingsley">Kingsley Donald</option>
                  <option value="Goodness">Goodness Mbak</option>
                </select>
              </div>
              <div className="mb-4 flex items-center gap-4">
                <label htmlFor="subject" className="block text-base font-semibold text-gray-600">
                  Subject:
                </label>
                <select
                  name="subject"
                  id="subject"
                  className='w-full px-3 py-2 border-gray-500 border-[1px] rounded-md'
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="Select a subject"></option>
                  <option value="English">English Language and Composition</option>
                  <option value="Math">Mathematics for Science and Engineering II</option>
                </select>
              </div>

              <div className="mb-4 flex items-center gap-4">
                <label htmlFor="grade" className="block text-base font-semibold text-gray-600">
                  Grade:
                </label>
                <select
                  name="grade"
                  id="grade"
                  className='w-full px-3 py-2 border-gray-500 border-[1px] rounded-md'
                  value={formData.grade}
                  onChange={handleInputChange}
                >
                  <option value="Select a subject"></option>
                  <option value="Grade1"> Grade 1</option>
                  <option value="Grade2"> Grade 2 </option>
                  <option value="Grade3"> Grade 3 </option>
                  <option value="Grade4"> Grade 4 </option>
                  <option value="Grade5"> Grade 5 </option>
                  <option value="Grade6"> Grade 6 </option>
                  <option value="Grade7"> Grade 7 </option>
                  <option value="Grade8"> Grade 8 </option>
                  <option value="Grade9"> Grade 9 </option>
                  <option value="Grade10"> Grade 10 </option>
                </select>
              </div>


              <div className="mb-4 flex items-center gap-4">
              <label htmlFor="date" className="block text-base font-semibold text-gray-600">
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                value={formData.date}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border-gray-500 border-[1px] rounded-md'
              />
            </div>

              <div className="flex gap-10">
                <div className="mb-4 flex items-center gap-4">
                  <label htmlFor="startTime" className="block text-base font-semibold text-gray-600">
                    From:
                  </label>
                  <div className="w-full px-3 py-1 border-gray-500 border-[1px] rounded-md">
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-4">
                  <label htmlFor="endTime" className="block text-base font-semibold text-gray-600">
                    To:
                  </label>
                  <div className="w-full px-3 py-1 border-gray-500 border-[1px] rounded-md">
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-5 mt-8">
                <button
                  type="submit"
                  className="bg-[#186BAD] text-white px-10 py-1 font-semibold rounded-lg hover:bg-blue-800 shadow"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-[#898A8B] text-white px-10 py-1 font-semibold rounded-lg hover:bg-[#626263] shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddClassPopup;
