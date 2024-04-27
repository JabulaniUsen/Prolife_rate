import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, CartesianAxis } from 'recharts';

const generateDummyData = (month, year) => {
  return [
    {
      class: 'Maths',
      value: Math.floor(Math.random() * 10),
    },
    {
      class: 'Chem',
      value: Math.floor(Math.random() * 10),
    },
    {
      class: 'Phy',
      value: Math.floor(Math.random() * 10),
    },
    {
      class: 'DP',
      value: Math.floor(Math.random() * 10),
    },
  ];
};

const getMonthAbbreviation = (month) => {
  const monthsAbbreviation = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthsAbbreviation[month - 1];
};

const StackedBarChart = () => {
  const [currentMonth, setCurrentMonth] = useState(1); // Initial month
  const [currentYear, setCurrentYear] = useState(2023); // Initial year

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const data = generateDummyData(currentMonth, currentYear);

  return (
    <div>
      <div className="jost my-5 flex justify-between">
         <div className="text-[#2E3A59] mx-5 font-bold">
            <h2>Student Statistics</h2>
         </div>
         <div style={{ textAlign: 'right', marginBottom: '10px' }}>
          <button onClick={handlePrevMonth} className='text-[#2E3A59]  mx-2'><FontAwesomeIcon icon={faAngleLeft} /></button>
          <span style={{ margin: '0 10px' }} className='text-[#2E3A59]'>
              {`${getMonthAbbreviation(currentMonth)} ${currentYear}`}
          </span>
          <button onClick={handleNextMonth} className='text-[#2E3A59]  mx-2'><FontAwesomeIcon icon={faAngleRight} /></button>
         </div>
      </div>
      <BarChart
        width={340}
        height={350}
        data={data}
        className='jost'
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="class" className='text-xs' />
        <YAxis tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#186bad" />
      </BarChart>
    </div>
  );
};

export default StackedBarChart;
