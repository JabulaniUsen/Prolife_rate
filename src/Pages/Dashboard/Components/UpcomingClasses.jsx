import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Link} from 'react-router-dom';

function UpcomingClasses() {
    const activities=[
        {number: '1', name: 'Maths', tutorName: 'Williams Odunayo', date: '10/04/2024', status: 'Due'},
        {number: '2', name: 'Statistics', tutorName: 'Williams Odunayo', date: '23/03/2024', status: 'Upcoming'},
        {number: '3', name: 'Excel', tutorName: 'Ekemini Udo', date: '10/05/2024', status: 'Upcoming'},
        {number: '4', name: 'Python', tutorName: 'Peter Griffen', date: '03/14/2024', status: 'Upcoming'},
        {number: '4', name: 'Python', tutorName: 'Peter Griffen', date: '03/14/2024', status: 'Upcoming'},
        {number: '4', name: 'Python', tutorName: 'Peter Griffen', date: '03/14/2024', status: 'Upcoming'},
        {number: '4', name: 'Python', tutorName: 'Peter Griffen', date: '03/14/2024', status: 'Upcoming'},
    ];

    return (
        <div className='upcomingActivities relative my-6  rounded-2xl shadow-lg border'>
            {activities.length===0&&(
                <div className="absolute top-[7rem] right-[9rem]">
                    <p className='jost text-[#9e9e9e]'>No upcoming classes yet</p>
                </div>
            )}
            <div className="m-6 ">
                <div className="flex justify-between pb-3">
                    <h2 className='text-lg jost font-semibold'>Upcoming Classes</h2>
                    <Link to='./classes'><h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2></Link>
                </div>
                <div className="overflow-y-scroll waitingRoom pr-4 h-[340px]">
                    {activities.map((item, index) => (
                        <div className=" class flex gap-3 cursor-pointer bg-[#f0f7ff] my-3 p-3 rounded-lg" key={index}>

                            <p className="num text-white bg-[#186bad] flex items-center justify-center rounded-xl jost w-[3rem] h-[3rem] text-xl">{item.number}</p>

                            <div className="jost w-[150px]">
                                <h3 className='name font-bold overflow-hidden whitespace-nowrap overflow-ellipsis' title={item.name}>
                                    {item.name}
                                </h3>
                                <p className=" text-gray-500 font-semibold text-xs">
                                    {item.tutorName}
                                </p>
                            </div>

                            <div className="date jost flex flex-col justify-around">
                                <div className="flex items-center gap-1">
                                    <p className='text-[#8A8A8A] text-xs'>{item.date}</p>
                                </div>
                                <p className={`status font-semibold text-sm ${item.status==='Upcoming'? 'text-[#FF9924]':'text-[#FF1515]'}`}>{item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default UpcomingClasses;
