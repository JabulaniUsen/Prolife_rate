import React, { useState } from 'react';

const Calendar = () => {
 const [date, setDate] = useState(new Date());
 const [selectedDate, setSelectedDate] = useState(null);

 const renderHeader = () => {
    const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
    return (
      <div className="flex items-center justify-between px-0 py-5 border-b  text-center text-xl font-bold">
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 border border-[#A7A7A7] rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>{monthFormat.format(date)}</div>
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 border border-[#A7A7A7] rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
 };

 const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 gap-2 p-2 text-lg text-gray-600">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
 };

 const renderCells = () => {
    const monthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return (
      <div className="grid grid-cols-7 gap-3 p-2 cursor-pointer">
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={index}></div>
        ))}
        {[...Array(monthDays)].map((_, index) => {
          const currentDay = new Date(date.getFullYear(), date.getMonth(), index + 1);
          const isSelected = selectedDate && selectedDate.toDateString() === currentDay.toDateString();
          const isWeekend = currentDay.getDay() === 0 || currentDay.getDay() === 6;
          return (
            <div
              key={index + firstDayOfMonth}
              className={`text-center text-lg border-gray-200 p-2 font-semibold ${
                isSelected ? 'bg-[#d9d9d9] rounded-xl border' : ''
              } ${isWeekend ? '' : ''}`}
              onClick={() => setSelectedDate(currentDay)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    );
 };

 const [time, setTime] = useState('');
   
 const handleChange = (e) => {
    setTime(e.target.value);
 };
 return (
    <div className="bg-white rounded-lg shadow p-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      
    </div>
 );
};

export default Calendar;