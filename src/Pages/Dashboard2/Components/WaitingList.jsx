import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WaitingList = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

    const [studentData, setStudentData] = useState([
        { id: 1, name: 'John Doe', subject: 'Math', gradeLevel: '10th', contactInfo: 'john.doe@example.com', status: 'Pending' },
        { id: 2, name: 'Jane Smith', subject: 'English', gradeLevel: '11th', contactInfo: 'jane.smith@example.com', status: 'Pending' },
        { id: 3, name: 'Bob Johnson', subject: 'Science', gradeLevel: '9th', contactInfo: 'bob.johnson@example.com', status: 'Pending' },
        { id: 4, name: 'Alice Brown', subject: 'History', gradeLevel: '12th', contactInfo: 'alice.brown@example.com', status: 'Pending' },
        { id: 5, name: 'Charlie Wilson', subject: 'Physics', gradeLevel: '10th', contactInfo: 'charlie.wilson@example.com', status: 'Pending' },
        { id: 6, name: 'Eva Davis', subject: 'Art', gradeLevel: '11th', contactInfo: 'eva.davis@example.com', status: 'Pending' },
        { id: 7, name: 'Frank Miller', subject: 'Chemistry', gradeLevel: '9th', contactInfo: 'frank.miller@example.com', status: 'Pending' },
        { id: 8, name: 'Grace Thompson', subject: 'Music', gradeLevel: '12th', contactInfo: 'grace.thompson@example.com', status: 'Pending' },
        { id: 9, name: 'Harry White', subject: 'Geography', gradeLevel: '10th', contactInfo: 'harry.white@example.com', status: 'Pending' },
        { id: 10, name: 'Ivy Green', subject: 'Physical Education', gradeLevel: '11th', contactInfo: 'ivy.green@example.com', status: 'Pending' },
        { id: 11, name: 'Jack Black', subject: 'Computer Science', gradeLevel: '9th', contactInfo: 'jack.black@example.com', status: 'Pending' },
        { id: 12, name: 'Katie Turner', subject: 'Spanish', gradeLevel: '12th', contactInfo: 'katie.turner@example.com', status: 'Pending' },
        { id: 13, name: 'Liam Harris', subject: 'French', gradeLevel: '10th', contactInfo: 'liam.harris@example.com', status: 'Pending' },
        { id: 14, name: 'Mia Anderson', subject: 'Biology', gradeLevel: '11th', contactInfo: 'mia.anderson@example.com', status: 'Pending' },
        { id: 15, name: 'Noah Martinez', subject: 'Economics', gradeLevel: '9th', contactInfo: 'noah.martinez@example.com', status: 'Pending' },
        { id: 16, name: 'Olivia Robinson', subject: 'Psychology', gradeLevel: '12th', contactInfo: 'olivia.robinson@example.com', status: 'Pending' },
        { id: 17, name: 'Patrick Hall', subject: 'Sociology', gradeLevel: '10th', contactInfo: 'patrick.hall@example.com', status: 'Pending' },
        { id: 18, name: 'Quinn Young', subject: 'Political Science', gradeLevel: '11th', contactInfo: 'quinn.young@example.com', status: 'Pending' },
        { id: 19, name: 'Ryan King', subject: 'Statistics', gradeLevel: '9th', contactInfo: 'ryan.king@example.com', status: 'Pending' },
        { id: 20, name: 'Sophia Turner', subject: 'Philosophy', gradeLevel: '12th', contactInfo: 'sophia.turner@example.com', status: 'Pending' },
      ]);
      
      const openPopup = (student) => {
        setSelectedStudent(student);
      };
    
      const closePopup = () => {
        setSelectedStudent(null);
        setIsAccepting(false);
        setIsRejecting(false);
      };
    
      const handleAccept = () => {
        setIsAccepting(true);
        // Update the status to 'Accepted' in the state
        setStudentData((prevStudentData) =>
          prevStudentData.map((student) =>
            student.id === selectedStudent.id ? { ...student, status: 'Accepted' } : student
          )
        );
        console.log("Student Accepted:", selectedStudent);
        
      };
    
      const handleReject = () => {
        setIsRejecting(true);
        // Update the status to 'Rejected' in the state
        setStudentData((prevStudentData) =>
          prevStudentData.map((student) =>
            student.id === selectedStudent.id ? { ...student, status: 'Rejected' } : student
          )
        );
        console.log("Student Rejected:", selectedStudent);
      };
    
      const popupVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      };
    
      return (
        <div className="m-10 poppins">
          <table className="w-[100%]">
            <thead>
              <tr className="bg-[#186bad] text-white border border-black">
                <th className="p-2">Student ID</th>
                <th className="p-2">Student Name</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Grade Level</th>
                <th className="p-2">Contact Information</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#9ec1dd] cursor-pointer"
                  onClick={() => openPopup(student)}
                 
                >
                  <td className="border border-black p-2">{student.id}</td>
                  <td className="border border-black p-2">{student.name}</td>
                  <td className="border border-black p-2">{student.subject}</td>
                  <td className="border border-black p-2">{student.gradeLevel}</td>
                  <td className="border border-black p-2">{student.contactInfo}</td>
                  <td className="border border-black p-2">{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Pop-up for selecting a student */}
          <AnimatePresence>
            {selectedStudent && (
              <motion.div
                variants={popupVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div className="popup bg-white rounded-lg ">
                    <div className="bg-[#186BAD] rounded-t p-4 ">
                        <p className='text-white text-xl text-center'>Schedule Class with new Student</p>
                    </div>
                  <div className=" p-5 lg:w-[450px] flex flex-col gap-5">
                    <p className="font-semibold">Student Name:    <span className="font-normal">{selectedStudent.name}</span></p>
                    <p className="font-semibold">Grade:    <span className="font-normal">{selectedStudent.gradeLevel}</span></p>
                    <p className="font-semibold">Subject:    <span className="font-normal">{selectedStudent.subject}</span></p>
                    <div className="buttons flex justify-center items-center gap-5">
                        <button className="py-2 px-6 text-white bg-[#186bad] rounded-2xl" onClick={handleAccept}>Accept</button>
                        <button className="py-2 px-6 text-white bg-[#898a8b] rounded-2xl" onClick={handleReject}>Reject</button>
                    </div>
                    {/* <button onClick={closePopup}>Close</button> */}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
          {/* Pop-up for accepting a student */}
          <AnimatePresence>
            {isAccepting && (
              <motion.div
                variants={popupVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" popup-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div className="popup bg-white rounded-lg flex justify-center items-center flex-col py-5 w-[250px]">
                  <h2>Student Accepted!</h2>
                  <button className="py-2 px-6 text-white bg-[#186bad] rounded-2xl" onClick={closePopup}>OK</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
          {/* Pop-up for rejecting a student */}
          <AnimatePresence>
            {isRejecting && (
              <motion.div
                variants={popupVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div className="popup popup bg-white rounded-lg flex flex-col justify-center items-center gap-6 py-5 w-[250px]">
                  <h2>Student Rejected</h2>
                  <button className="py-2 px-6 text-white bg-[#186bad] rounded-2xl" onClick={closePopup}>OK</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };
    
    export default WaitingList;