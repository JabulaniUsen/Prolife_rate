import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AdminName from '../Components/AdminName';
import user  from '../../Dashboard2/Icons/user.png'

const tabs = ['All', 'Active', 'Live', 'Old'];

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const Table = ({ tabData }) => {
    if (tabData.length === 0) {
      // Display fallback content if tabData is empty
      return (
        <div className="flex flex-col gap-3 absolute top-[27rem] right-[30rem] w-[250px] justify-center items-center">
            <p className='text-[#898A8B] text-xl'>No Data Yet</p>
        </div>
      );
    }
    const filteredData = tabData.filter(
      (row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return (
      <div className="">
        {filteredData.length === 0 && (
          <p className="inset-0 flex items-center justify-center text-xl font-semibold my-12 text-[#808080]">
            Sorry, no result for your search
          </p>
        )}
        <table className={`my-7 poppins overflow-y-scroll ${filteredData.length === 0 ? 'hidden' : ''}`}>
        <thead className="">
          <tr className="grid grid-cols-4">
            <th className="py-5">Name</th>
            <th className="py-5">Subject</th>
            <th className="py-5">Grade</th>
            <th className="py-5">mode</th>
          </tr> 
        </thead>
        <tbody className="flex flex-col">
          {filteredData.map((row, index) => (
            <tr
              key={index}
              className="border-separate grid grid-cols-4 gap-5 place-items-center"
            >
              <td className=" py-5 flex items-center gap-4 ">
                <img src={row.img} alt="" className="rounded-full" />  
                {row.name}
              </td>
              <td className=" py-5">{row.subject}</td>
              <td className=" py-5">{row.grade}</td>
              <td className=" py-5 ">{row.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    );
  };

  const tabData = [
    
    [
      {img: user, name: 'John Doe', subject: 'Mathematics', grade: '5', mode: 'Current'},
      {img: user, name: 'Andikan Ime', subject: 'Mathematics', grade: '5', mode: 'Current'},
      {img: user, name: 'Paul Jackson', subject: 'Mathematics', grade: '5', mode: 'Live'},
      {img: user, name: 'Sema Johnson', subject: 'Mathematics', grade: '5', mode: 'Old'},
      {img: user, name: 'Sedion Ibanga', subject: 'Mathematics', grade: '5', mode: 'Current'},
      {img: user, name: 'Edima Tiese', subject: 'Mathematics', grade: '5', mode: 'Current'},
    ],
    
    [
      {img: user, name: 'Rite Doe', subject: 'Mathematics', grade: '5', mode: 'Current', reports: 'Generate', },
    ],
    [
      {img: user, name: 'John Adam', subject: 'Mathematics', grade: '5', mode: 'Current', reports: 'Generate', },
    ],
    [
      {img: user, name: 'Andrew Iman', subject: 'Mathematics', grade: '5', mode: 'Current', reports: 'Generate', },
    ],
    [
      {img: user, name: 'Joan Amos', subject: 'Mathematics', grade: '5', mode: 'Current', reports: 'Generate', },
    ],

  ];

  return (
    <div className="">
      <AdminName/>
      <div className="header my-5">
        <h1 className="text-3xl font-bold text-left ml-5 my-10">Users</h1>
      </div>
      <div className="py-5 px-5 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className='text-xl font-semibold mb-5'>Students</h2>
          </div>
          <div className=" flex gap-5">
            <div className="div lg:w-[228px] rounded-2xl flex items-center gap-2 p-2 bg-[#faf9f9]">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[#979797]"
              />
              <input
                type="text"
                placeholder="What do you want to search"
                className="text-sm bg-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex gap-2">
              <p className='font-semibold px-4 py-1 rounded-xl border'>mode</p>
              <p className='font-semibold px-4 py-1 rounded-xl border'>Subject</p>
              <p className='font-semibold px-4 py-1 rounded-xl border'>Grade</p>
            </div>
          </div>
        </div>
        <div className="flex justfly-between my-5 ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2 mr-2 py-4 text-lg ${
                  activeTab === index ? ' font-semibold ' : 'text-[#979797]'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        <div className="waitingRoom h-[600px] overflow-y-scroll">
          <Table tabData={tabData[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
