import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import user from '../Icons/report.png';
import user2 from '../../Dashboard2/Icons/user.png';

const tabs = ['All', 'Incomplete', 'Completed'];

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
          <p className='text-[#898A8B] text-xl'>No Transaction Yet</p>
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
          <tr className="grid grid-cols-6">
            <th className="text-white">img</th>
            <th className="py-5">Name</th>
            <th className="py-5">Subject</th>
            <th className="py-5">Status</th>
            <th className="py-5">Summary</th>
            <th className="py-5">Reports</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-3">
          {filteredData.map((row, index) => (
            <tr
              key={index}
              className="border-separate grid grid-cols-6 gap-5 place-items-center"
            >
              <td>
                <img src={row.img} alt="" className="rounded-full" />
              </td>
              <td className=" py-5">{row.name}</td>
              <td className=" py-5">{row.subject}</td>
              <td className=" py-5">{row.status}</td>
              <td className=" py-5 text-[#186BAD] cursor-pointer">
                {row.summary}
              </td>
              <td className=" py-5 text-[#186BAD] cursor-pointer">
                {row.reports}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    );
  };

  const tabData = [
    
    [
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user2, name: 'Andikan Ime', subject: 'Mathematics', status: '40% Completed', summary: 'Input Summary', reports: 'Generate'},
      { img: user, name: 'Paul Jackson', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user2, name: 'Sema Johnson', subject: 'Mathematics', status: '80% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'Sedion Ibanga', subject: 'Mathematics', status: '90% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user2, name: 'Edima Tiese', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'Etini Asikpo', subject: 'Mathematics', status: '10% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user2, name: 'Edidiong John', subject: 'Mathematics', status: '80% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '90% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '10% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '80% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '90% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '10% Completed', summary: 'Input Summary', reports: 'Generate',},
    ],
    
    [
      // { img: user, name: 'Rite Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'John Adam', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'Andrew Iman', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'Joan Amos', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'King King', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'Bamidele Andrew', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
  ];

  return (
    <div className="">
      <div className="header my-10">
        <h1 className="text-4xl font-semibold text-left ml-10">Report</h1>
      </div>
      <div className="p-12 rounded-xl report-shadow">
        <div className="flex justify-between">
          <div className="flex justfly-between gap-20 my-[0rem] ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2 mr-2 py-4 text-lg ${
                  activeTab === index ? ' font-bold ' : 'text-[#979797]'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="border-[1px] border-[#979797] rounded-3xl p-3 w-[300px] my-auto">
            <input
              type="text"
              placeholder="What do you want to search"
              className="w-[90%]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#979797]"
            />
          </div>
        </div>
        <div className="waitingRoom h-[600px] overflow-y-scroll">
          <Table tabData={tabData[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
