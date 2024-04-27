import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import user from '../Icons/report.png'

const tabs = ['All', 'Incomplete', 'Completed',];

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ tabData }) => {

    if (tabData.length === 0) {
      return (
        <div className="flex flex-col gap-3 m-auto mt-28 lg:absolute top-[27rem] right-[30rem] w-[250px] justify-center items-center">
            <p className='text-[#898A8B] text-xl'>No Transaction Yet</p>
        </div>
      );
    }
    
    return (
      <table className="poppins table-auto w-full my-8 ">
        <thead>
          <tr >
            <th className='text-white'>img</th>
            <th className='py-5'>Name</th>
            <th className='py-5'>Subject</th>
            <th className='py-5'>Status</th>
            <th className='py-5'>Summary</th>
            <th className='py-5'>Reports</th>
          </tr>
        </thead>
        <tbody>
        {tabData.map((row, index) => (
          <tr 
            key={index} 
            className='border-separate'
            >
            <td><img src={row.img} alt="" /></td>
            <td className='px-10 py-5'>{row.name}</td>
            <td className='px-10 py-5'>{row.subject}</td>
            <td className='px-10 py-5'>{row.status}</td>
            <td className='px-10 py-5 text-[#186BAD] cursor-pointer'>{row.summary}</td>
            <td className='px-10 py-5 text-[#186BAD] cursor-pointer'>{row.reports}</td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };

  const tabData = [
    
    [
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate',},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '40% Completed', summary: 'Input Summary', reports: 'Generate'},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '80% Completed', summary: 'Input Summary', reports: 'Generate',},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '90% Completed', summary: 'Input Summary', reports: 'Generate',},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      // { img: user, name: 'John Doe', subject: 'Mathematics', status: '10% Completed', summary: 'Input Summary', reports: 'Generate',},
    ],
    
    [
      // { img: user, name: 'Rite Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      // { img: user, name: 'John Adam', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ]
  ];

  return (
    <div className="pt-16 px-12 " >
      <div className="header">
        <h1 className='text-4xl font-semibold text-center lg:m-0 mb-10'>Report</h1>
      </div>
      <div className="">
        <div className="border-[1px] border-[#979797] rounded-3xl p-3 w-[300px] lg:float-right m-auto">
          <input type="text" placeholder='What do you want to to search' className='w-[90%]' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#979797]'/>
        </div>
        <div className="flex justfly-between gap-20  lg:my-[4rem] my-[2rem] ">
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
        <Table tabData={tabData[activeTab]}   />
      </div>
    </div>
  );
};

export default Reports;
