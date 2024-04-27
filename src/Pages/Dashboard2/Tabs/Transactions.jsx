import React, { useState } from 'react';
import { faCalendarDays, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noPayment from '../../../Assets/noPayment.png'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


const tabs = ['Transactions'];

const Transactions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAccountDetails, setShowAccountDetails] = useState(false)

  const handleShowAccountDetails = () => {
    setShowAccountDetails(true)
  }
  const handleCloseAccountDetails = () => {
    setShowAccountDetails(false)
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const Table = ({ tabData }) => {
    if (tabData.length === 0) {
      // Display fallback content if tabData is empty
      return (
        <div className="flex flex-col gap-3 absolute top-[22rem] rounded-xl right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noPayment} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Payment</p>
          </div>
        </div>
      );
    }
    return (
      <table className="poppins my-8">
        <thead className=''>
          <tr className=' lg:grid flex justify-between lg:grid-cols-8' >
            <th className='py-5 text-sm '>S.No.</th>
            <th className='py-5 text-sm '>Name</th>
            <th className='py-5 text-sm '>Date</th>
            <th className='py-5 text-sm hidden lg:block'>Trans. ID</th>
            <th className='py-5 text-sm hidden lg:block'>Amount</th>
            {/* <th className='py-5 text-sm '>No. Of Classes</th> */}
            <th className='py-5 text-sm '>Payment Method</th>
            <th className='py-5 text-sm '>Status</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-3'>
        {tabData.map((row, index) => (
          <tr 
            key={index} 
            className='border-2 border-[#cdcdcd] border-separate lg:grid flex justify-around lg:grid-cols-8 lg:gap-5 gap-4 w-[100%] lg:place-items-center'
            >
            <td className='mx-4 py-3'>{row.serialNo}</td>
            <td className='py-3'>{row.name}</td>
            <td className=' py-3'>{row.date}</td>
            <td className=' py-3 hidden lg:block'>{row.transactionId}</td>
            <td className={` py-3 hidden lg:block text-[#2E8760] ${row.specialStyle ? 'text-red-500' : ''}`}>{row.amount}</td>
            {/* <td className=' py-3'>{row.numberOfClasses}</td> */}
            <td className=' py-3 '>{row.paymentMethod}</td>
            <td className=' py-3 pr-5 text-[#2E8760]'>{row.status}</td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };

  const tabData = [
    
    [
      { serialNo: 1, name: 'John Doe', date: '02 Apr 2024', transactionId: '16', amount: '$80,000', numberOfClasses: 13, paymentMethod: 'Wire Transfer', status: 'Successfull' },
      { serialNo: 2, name: 'Amaka David', date: '02 Apr 2024', transactionId: '36', amount: '$80,000', numberOfClasses: 24, paymentMethod: 'Wire Transfer', status: 'Successfull' },
      { serialNo: 3, name: 'David David', date: '02 Apr 2024', transactionId: '24', amount: '$80,000', numberOfClasses: +12, paymentMethod: 'Wire Transfer', status: 'Successfull', },
      { serialNo: 4, name: 'Henry Ola', date: '02 Apr 2024', transactionId: '66', amount: '$80,000', numberOfClasses: +14, paymentMethod: 'Wire Transfer', status: 'Successfull', specialStyle: { color: 'red' }  },
      { serialNo: 5, name: 'Mike Sediong', date: '02 Apr 2024', transactionId: '25', amount: '$80,000', numberOfClasses: +14, paymentMethod: 'Wire Transfer', status: 'Successfull' },
      { serialNo: 6, name: 'Amaka David', date: '02 Apr 2024', transactionId: '45', amount: '$80,000', numberOfClasses: +55, paymentMethod: 'Wire Transfer', status: 'Successfull' },
      { serialNo: 7, name: 'Victor David', date: '02 Apr 2024', transactionId: '67', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Successfull' },
    ],
    
    [
      // { serialNo: 1, name: 'Amaka David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      // { serialNo: 1, name: 'David David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      // { serialNo: 1, name: 'Henry Ola',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      // { serialNo: 1, name: 'Mike Sediong',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      // { serialNo: 1, name: 'Amaka David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      // { serialNo: 1, name: 'Victor David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
  ];

  return (
    <div className="lg:p-4">
      <div className="flex justify-between items-center">

          <div className="flex justfly-between gap-5 mt-[3rem]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2  font-semibold transition hover:text-[#186BAD] ${
                  activeTab === index ? 'text-[#186BAD] border-b-2 border-b-[#186BAD]' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="">
              <button className='text-[#186BAD] py-2 px-6 bg-[#F4EEFF] rounded font-semibold transition hover:bg-[#d9d2e7]'>Expenses</button>
            </div>
            <div className="">
              <button className='border-[1px] border-[#186BAD] text-[#186BAD] rounded font-semibold py-2 px-6 transition hover:bg-[#186BAD] hover:text-white'>Invoice</button>
            </div>
            <div className="">
              <button className='bg-[#186BAD] py-2 px-6 text-white rounded font-semibold flex gap-1 items-center transition hover:bg-[#0f3f66]'><FontAwesomeIcon icon={faFileExport} />Export Data</button>
            </div>
          </div> */}
          
      </div>
      <div className="payments flex justify-between items-center mt-8">
        <div className="dateRange poppins flex items-center gap-3">
          <p>From </p>
          <div className="flex items-center gap-1 bg-[#ededf5] p-1 px-3 rounded">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>12-01-2024</p>
          </div>
          <p> to </p>
          <div className="flex items-center gap-1 bg-[#ededf5] p-1 px-3 rounded">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>12-12-2024</p>
          </div>
        </div>
        <div className="">
          <button onClick={handleShowAccountDetails} className='border-[1px] border-[#3AB690] text-[#3AB690] hover:bg-[#3AB690] hover:text-white transition rounded font-semibold py-2 px-6'>Request Payment</button>
        </div>
      </div>
      <Table tabData={tabData[activeTab]} />

      { showAccountDetails && (
        <AnimatePresence>
          <motion.div
            variants={popupVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-overlay poppins fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
              <div className="popup bg-white rounded-lg lg:w-[700px]">
                <div className="bg-[#186BAD] rounded-t p-4 px-10">
                  <p className='text-white text-xl'>Request Payment</p>
                </div>

                <form action="" className='py-5 gap-5 flex flex-col justify-center px-10'>
                  <div className="flex items-center justify-between gap-2">
                    <label htmlFor="" className='text-base font-bold w-[250px]'>Bank:</label>
                    <input type="text" className='border rounded-full w-full p-2 outline outline-[#999999] outline-[1px]' />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <label htmlFor="" className='text-base font-bold w-[250px]'>Account Name:</label>
                    <input type="text" className='border rounded-full w-full p-2 outline outline-[#999999] outline-[1px]' />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <label htmlFor="" className='text-base font-bold w-[250px]'>Account Number:</label>
                    <input type="number" className='border rounded-full w-full p-2 outline outline-[#999999] outline-[1px]' />
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-3 w-full">
                      <label htmlFor="" className='text-base font-bold '>Payment from:</label>
                      <select className='border rounded-full w-[100%] px-2 py-1 outline outline-[#999999] outline-[1px]' name="" id="">
                        <option value=""></option>
                        <option value=""  >Jabulani Usen</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <label htmlFor="" className='text-base font-bold '>To:</label>
                      <select className='border rounded-full w-[100%] px-2 py-1 outline outline-[#999999] outline-[1px]' name="" id="">
                        <option value=""></option>
                        <option value=""  >Me</option>
                      </select>
                    </div>
                  </div>
                  <div className="buttons flex my-5 justify-center items-center gap-5">
                    <button type="submit" className="py-2 px-6 text-white font-bold bg-[#186bad] rounded-xl" onClick={handleCloseAccountDetails}>Submit</button>
                    <button type="button" className="py-2 px-6 text-gray-500 font-bold rounded-2xl" onClick={handleCloseAccountDetails}>Cancel</button>
                  </div>
                </form>
              </div>

          </motion.div>
        </AnimatePresence>
      ) }
    </div>
  );
};

export default Transactions;
