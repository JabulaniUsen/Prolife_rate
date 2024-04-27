import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCheck } from '@fortawesome/free-solid-svg-icons';
import noAssignment from '../../../Assets/no-assignment.png';

function Assignment() {
const assignment = [
    {
      id: 1,
      subject: 'Algebra',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Jeremy Ching",
      date: "21/09/2023"
    },
    {
      id: 2,
      subject: 'Verb',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Olatunde Michael",
      date: "28/09/2023"
    },
    {
      id: 3,
      subject: 'People and Beliefs',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Jabulani Usen",
      date: "21/09/2023"
    },
    {
      id: 4,
      subject: 'Piano Lessons',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Bello Victor",
      date: "02/10/2023"
    }
  ]

  const [dropdownStates, setDropdownStates] = useState(Array.from({ length: assignment.length }, () => false));
  const [submitting, setSubmitting] = useState(Array.from({ length: assignment.length }, () => false));
  const [uploading, setUploading] = useState(Array.from({ length: assignment.length }, () => false));
  const [uploaded, setUploaded] = useState(Array.from({ length: assignment.length }, () => false));

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const handleUpload = async (index, event) => {
    const file = event.target.files[0];

    if (file) {
      setUploading((prev) => {
        const newUploading = [...prev];
        newUploading[index] = true;
        return newUploading;
      });

      // Add logic for handling file upload here
      // For example, you can use FormData and send it to the server

      // Simulating delay for demonstration purposes
      setTimeout(() => {
        setUploading((prev) => {
          const newUploading = [...prev];
          newUploading[index] = false;
          return newUploading;
        });

        setUploaded((prev) => {
          const newUploaded = [...prev];
          newUploaded[index] = true;
          return newUploaded;
        });
      }, 2000);
    }
  };

  return ( 
    <div className="poppins lg:p-12 py-12 p-5 relative">
      <div className="header text-4xl font-semibold">Home Work</div>

      {assignment.length === 0 ? (
        <div className="flex flex-col gap-3 absolute top-[15rem] rounded-xl border-[1px] border-[#000000] left-[20rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noAssignment} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Home work</p>
          </div>
        </div>
      ) : (
        <div>
          {assignment.map((item, index) => (
            <div
            key={index}>
              <div
                className={`assignment subject relative cursor-pointer rounded-xl ${
                  dropdownStates[index] ? 'active' : ''
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <h2
                  className={`text-3xl font-semibold w-[100wv] border-[1px] bg-[#186BAD] text-white rounded-xl h-[150px] p-8 mt-8 transition-all ${
                    dropdownStates[index] ? 'border-0 ' : ''
                  }`}
                >
                  {item.subject}
                </h2>
                <p className={`view absolute bottom-7 right-12 font-light ${dropdownStates[index] ? 'hidden' : 'block'}`}>View</p>
              </div>

              {dropdownStates[index] && (
                <div className="dropDown bg-[#f2f1f1] p-10 rounded-b-xl mt-[-10px] transition-all">
                  <div className="up">
                    <p>{item.instruction}</p>
                    <div className="names flex lg:flex-row flex-col justify-between lg:items-center pt-10 lg:gap-0 gap-6">
                      <div className="side1 flex flex-col lg:gap-3 gap-2">
                        <h2 className="text-xl font-semibold">Tutor: <span className='font-thin text-lg'>{item.tutor}</span></h2>
                        <h3 className="text-xl font-semibold">Date of Submission: <span className='font-thin text-lg'>{item.date}</span></h3>
                      </div>
                      <div className="side2 flex lg:gap-10 gap-5 items-center">
                        <a href="/" className="text-[#186BAD] font-semibold">
                          Download Materials
                        </a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-[#186BAD] py-3 px-5 rounded-lg text-white ${uploading[index] ? 'cursor-not-allowed' : ''} ${uploaded[index] ? 'bg-gray-300 text-black' : ''}`}
                            disabled={uploading[index] || uploaded[index]}
                          >
                            {uploading[index] ? (
                              'Uploading...'
                            ) : uploaded[index] ? (
                              'Uploaded'
                            ) : (
                              <span>
                                <label htmlFor={`fileInput-${index}`}>
                                  <FontAwesomeIcon icon={faUpload} className="mr-2 cursor-pointer" />
                                  Upload Assignment
                                </label>
                                <input
                                  id={`fileInput-${index}`}
                                  type="file"
                                  style={{ display: 'none' }}
                                  onChange={(e) => handleUpload(index, e)}
                                />
                              </span>
                            )}
                          </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`bg-[#186BAD] py-3 px-5 rounded-lg text-white ${submitting[index] ? 'cursor-not-allowed' : ''}`}
                              disabled={submitting[index]}
                              onClick={() => handleSubmission(index)}
                            >
                              {submitting[index] ? (
                                'Submitting...'
                              ) : (
                                <span>
                                  {submitting[index] ? 'Submitting...' : 'Submit'}
                                </span>
                              )}
                            </motion.button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}

            </div>


          ))}
        </div>
      )}
    </div>
  );
}

export default Assignment;