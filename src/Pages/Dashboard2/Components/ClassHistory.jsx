import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import noClass from '../../../Assets/no-class.png'

function ClassHistory() {
  const [classdata, setClassdata] = useState([
    // { id: 1, subject: "Algebra", studentName: "Canny James", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 2, subject: "Matrix", studentName: "Jabulani Usen", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 3, subject: "Equations", studentName: "Goodness James", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 4, subject: "Geometry", studentName: "Edima Mike", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 5, subject: "Angles", studentName: "James Abraham", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 6, subject: "Numerations", studentName: "Amayen Joseph", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    // { id: 7, subject: "Binary Operations", studentName: "Sediong Ibanga", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
    // { id: 8, subject: "Trigonometry", studentName: "Etini Ibanga", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
    // { id: 9, subject: "Quadratic", studentName: "Gold Etokakpan", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
    <div className="grid grid-cols-3 gap-3 inter">
      {filteredClasses.length === 0 ? (
        <div className="flex flex-col gap-3 absolute top-[20rem] rounded-xl border-[1px] border-[#000000] right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noClass} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No History</p>
          </div>
        </div>
      ) : (
        <>
          
          <div className="search-bar absolute right-20 top-[190px] poppins bg-[#F1F1F1] rounded p-2 px-4 lg:w-[400px] w-[300px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#979797] mr-2'/>
            <input
              type="text"
              placeholder="Search by student name, subject, or status"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-[90%] bg-transparent"
            />
          </div>
          {filteredClasses.map((item, index) => (
            <div
              className={`classBox p-3 h-[240px] border-[1px] border-[#000] rounded-xl flex flex-col justify-between items-start ${
                item.status === 'Ongoing' ? 'bg-[#ffecec]' : item.status === 'Starting in 60 Minutes' ? 'bg-[#ecffee]' : 'bg-[#f6f6f6]'
              }`}
              key={index}
            >
              <div className="flex flex-col justify-between gap-10">
                <div className="head">
                  <h2 className="font-semibold text-xl">
                    {item.subject}
                  </h2>
                </div>
                <div className="body">
                  <p className="text-[#989898] my-2 rounded">
                    {item.studentName}
                  </p>
                  <div className="timeAndDate flex gap-4">
                    <p className='text-[#989898] flex gap-x-1 items-center'><FontAwesomeIcon icon={faClock} />{item.time}</p>
                    <p className='text-[#989898] flex gap-x-1 items-center'><FontAwesomeIcon icon={faCalendarDays} />{item.date}</p>
                  </div>
                  <p
                    className={`status text-[#989898] text-sm my-1 p-1 px-3 rounded ${
                      item.status === 'Ongoing' ? 'bg-[#FFDDDD] text-[#F12222]' : item.status === 'Starting in 60 Minutes' ? 'bg-[#DDFFE7] text-[#0CC740]' : 'bg-[#F1F1F1]'
                    }`}
                  >
                    Status: {item.status}
                  </p>
                </div>
              </div>
              <button className={`${item.status === 'Ongoing' ? 'bg-[#0c0c0c]' : 'bg-[#186BAD]'}  w-full p-[0.5rem] rounded text-white transition hover:bg-[#000] font-semibold `}>Attendance</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ClassHistory;