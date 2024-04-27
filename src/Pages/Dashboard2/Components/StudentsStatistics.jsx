import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar } from 'react-chartjs-2';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StudentStatisticsChart = () => {
 const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
 const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

 const getMonthAbbreviation = (monthIndex) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
 };

 const handleChangeMonth = (increment) => {
    const newMonth = (selectedMonth + increment + 12) % 12; // Ensure the result is non-negative
    const newYear = selectedYear + Math.floor((selectedMonth + increment) / 12); // Adjust year
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
 };

 // Dummy data for each month and year
 const dummyData = [
    [20, 45, 30, 80, 60], // January
    [25, 50, 35, 75, 65], // February
    [30, 55, 40, 70, 70], // March
    [35, 60, 45, 65, 75], // April
    [40, 65, 50, 60, 80], // May
    [45, 70, 55, 55, 85], // June
    [50, 75, 60, 50, 90], // July
    [55, 80, 65, 45, 95], // August
    [60, 85, 70, 40, 100], // September
    [65, 90, 75, 35, 105], // October
    [70, 95, 80, 30, 110], // November
    [75, 100, 85, 25, 115], // December
 ];

 const chartData = {
    labels: ['Class A', 'Class B', 'Class C', 'Class D', 'Class E'],
    datasets: [
      {
        label: `Student Statistics - ${getMonthAbbreviation(selectedMonth)} ${selectedYear}`,
        backgroundColor: '#186BAD',
        borderColor: '#186BAD',
        data: dummyData[selectedMonth],
      },
    ],
 };

 const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        barThickness: 7,
      },
    },
 };

 return (
    <div className='w-[400px] flex flex-col p-8 shadow-lg rounded-3xl my-10'>
      <div className='poppins my-5 flex justify-between'>
        <div className="">
          <h2>Student Statistics</h2>
        </div>
        <div className="">
          <button className='text-[#2E3A59] text-lg mx-5' onClick={() => handleChangeMonth(-1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
          <span className='text-[#2E3A59]'>{getMonthAbbreviation(selectedMonth)} {selectedYear}</span>
          <button className='text-[#2E3A59] text-lg mx-5' onClick={() => handleChangeMonth(1)}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <Bar data={chartData} options={chartOptions} />
      {/* <div>{new Date(selectedYear, selectedMonth).toLocaleDateString()}</div> */}
    </div>
 );
};

export default StudentStatisticsChart;