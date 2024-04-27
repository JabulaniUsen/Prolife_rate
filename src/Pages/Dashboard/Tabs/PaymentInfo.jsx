import React, { useState } from 'react';
import noPayment from '../../../Assets/noPayment.png'

const tabs = ['Reports', 'Transactions', 'Credit', 'Debit', 'Upcoming', 'Due'];

const PaymentInfo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ tabData }) => {
    if (tabData.length === 0) {
      // Display fallback content if tabData is empty
      return (
        <div className="flex flex-col gap-3 absolute top-[22rem] rounded-xl border-[1px] border-[#000000] right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noPayment} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Payment</p>
          </div>
        </div>
      );
    }

    // Render the Table component if tabData is not empty
    return (
      <table className="poppins table-auto w-full my-8 ">
        <thead>
          <tr>
            <th className='py-5'>S.No.</th>
            <th className='py-5'>Name</th>
            <th className='py-5'>Date</th>
            <th className='py-5'>Time</th>
            <th className='py-5'>Transaction ID</th>
            <th className='py-5'>Amount</th>
            <th className='py-5'>Status</th>
          </tr>
        </thead>
        <tbody>
          {tabData.map((row, index) => (
            <tr
              key={index}
              className='border-2 border-[#cdcdcd] border-separate'
            >
              <td className='px-10 py-5'>{row.serialNo}</td>
              <td className='px-10 py-5'>{row.name}</td>
              <td className='px-10 py-5'>{row.date}</td>
              <td className='px-10 py-5'>{row.time}</td>
              <td className='px-10 py-5'>{row.transactionId}</td>
              <td className={`px-10 py-5 text-[#2E8760] ${row.specialStyle ? 'text-red-500' : ''}`}>{row.amount}</td>
              <td className='px-10 py-5 text-[#2E8760]'>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const tabData = [
    
    [
      // { serialNo: 1, name: 'John Doe', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed' },
      // { serialNo: 2, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed' },
      // { serialNo: 3, name: 'David David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed', },
      // { serialNo: 4, name: 'Henry Ola', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed', specialStyle: { color: 'red' }  },
      // { serialNo: 5, name: 'Mike Sediong', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed' },
      // { serialNo: 6, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed' },
      // { serialNo: 7, name: 'Victor David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$80,000', status: 'Completed' },
    ],
    
    [
      // { serialNo: 1, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
    [
      // { serialNo: 1, name: 'David David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
    [
      // { serialNo: 1, name: 'Henry Ola', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
    [
      // { serialNo: 1, name: 'Mike Sediong', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
    [
      // { serialNo: 1, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
    [
      // { serialNo: 1, name: 'Victor David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
    ],
  ];

  return (
    <div className="p-4">
      <button className='bg-[#186BAD] py-2 px-6 text-white rounded-lg float-right mr-8'>Make Payment</button>
      <div className="flex justfly-between gap-20 border-b-[1px] my-[4rem]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 mr-2 py-4 font-semibold ${
              activeTab === index ? 'text-[#8147E7] border-b-2 border-b-[#8147E7]' : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <Table tabData={tabData[activeTab]} />
    </div>
  );
};

export default PaymentInfo;
