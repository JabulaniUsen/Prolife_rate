import React, { useState } from 'react';
import moment from 'moment';
import calBg from '../Pages/Dashboard/Icons/calendar-bg.png'

const Calendar2 = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const goToPrevMonth = () => {
    setSelectedDate(moment(selectedDate).subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setSelectedDate(moment(selectedDate).add(1, 'month'));
  };

  const daysInMonth = moment(selectedDate).daysInMonth();
  const firstDayOfMonth = moment(selectedDate).startOf('month').format('d');
  const blanks = Array(parseInt(firstDayOfMonth, 10)).fill(null);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex p-4">
      <div className="w-2/5 ">
        <div className="bg-[#f99393] text-white p-4 px-6 h-[450px]">
            <div className="top flex gap-3 items-center">
                <div className='text-white text-7xl bg-[#57c1f2] p-3 px-7 rounded-full'>{moment().format('D')}</div>
                <div className="">
                    <div className='text-xl text-white'>{moment().format('MMM')}</div>
                    <div className='font-semibold text-2xl text-white flex'>{moment().format('YYYY')}</div>
                </div>
            </div>
            <div className="flex flex-col gap-3 justify-between">
                <div className="">
                    <h2 className='text-xl font-semibold my-2'>TO DO LIST</h2>
                    <h2 className='border-[1px] text-lg border-white text-center'>NOTES TO BE MADE</h2>
                    <h2 className='text-[#0997D9] bg-[#fcc9c9] text-sm font-bold text-center my-2 py-1'>DON'T FORGET ABOUT ACTIVITIES</h2>
                </div>

                <div className="">
                    <h2 className='text-xl font-semibold'>SCHEDULE</h2>
                    <div className="">
                      <p className='text-[#727272]'>No schedule yet</p>
                    </div>
                    {/* <div className="bg-[#fcc9c9] border my-2 border-white flex justify-between p-1 text-black">
                        <p className='text-lg font-bold'>10:00 - 01:10</p>
                        <p className='text-white text-lg px-1 font-bold'>Biology</p>
                    </div>
                    <div className="bg-[#fcc9c9] border my-2 border-white flex justify-between p-1 text-black">
                        <p className='text-lg font-bold'>02:00 - 05:00</p>
                        <p className='text-white text-lg px-1 font-bold'>Chemistry</p>
                    </div>
                    <div className="bg-[#fcc9c9] border my-2 border-white flex justify-between p-1 text-black">
                        <p className='text-lg font-bold'>07:00 - 08:30</p>
                        <p className='text-white text-lg px-1 font-bold'>French</p>
                    </div>
                    <div className="bg-[#fcc9c9] border my-2 border-white flex justify-between p-1 text-black">
                        <p className='text-lg font-bold'>10:00 - 12:30</p>
                        <p className='text-white text-lg px-1 font-bold'>Statistics</p>
                    </div> */}
                </div>
            </div>
        </div>
      </div>
      <div className="w-3/4 relative bg-[#0997D9] p-10">
        <img src={calBg} alt="" className='absolute bottom-0 right-0' />
        <div className="flex justify-between mb-4">
          <button onClick={goToPrevMonth} className="cursor-pointer text-white text-3xl border rounded-full px-4">
            {'<'}
          </button>
        <div className="text-center">
            <div className=" text-2xl text-white flex flex-col">
                {selectedDate.format('MMM')}
            </div>
            <div className="font-bold text-white flex flex-col my-1">
                {selectedDate.format('YYYY')}
            </div>
        </div>
          <button onClick={goToNextMonth} className="cursor-pointer text-white text-3xl border rounded-full  px-4">
            {'>'}
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-white">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="text-center font-bold">
                {day}
                </div>
            ))}
            {blanks.map((_, index) => (
                <div key={index}></div>
            ))}
            {daysArray.map((day) => (
            <div
                key={day}
                className={`cursor-pointer p-2 py-2 w-[40px] text-center rounded-full font-semibold ${
                day === moment().date() &&
                selectedDate.isSame(moment(), 'month')
                    ? ' text-white font-bold border' // Highlight today's date
                    : selectedDate.date(day).day() === 0
                    ? 'bg-[#F99393]' // Highlight Sundays
                    : ''
                }`}
            >
                {day}
            </div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default Calendar2;
