import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function UpcomingActivities() {
    const activities = [
        { number: '31', name: 'Meeting with the VC', link: 'Meeting link//www.zoom.com', time: '10am - 11am', status: 'Due soon' },
        { number: '04', name: 'Meeting with the Jabulani', link: 'Meeting link//www.zoom.com', time: '10am - 11am', status: 'Upcoming' },
        { number: '12', name: 'Send B middle session', link: 'Physical science lab', time: '10am - 11am', status: 'Upcoming' },
        { number: '16', name: 'Send Mr Ayo class', link: 'Send Document via email', time: '10am - 11am', status: 'Upcoming' },
    ];

    return (
        <div className='upcomingActivities relative waitingRoom w-[400px] h-[430px] my-6 rounded-2xl shadow-xl'>
            {activities.length === 0 && (
                <div className="absolute top-[7rem] right-[9rem]">
                <p className='jost text-[#9e9e9e]'>No progress yet</p>
                </div>
            )}
            <div className="m-6 ">
                <div className="flex justify-between pt-6">
                    <h2 className='text-lg jost font-semibold'>Upcoming Activities</h2>
                    <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2>
                </div>
                {activities.map((item, index) => (
                    <div className=" class flex gap-3 bg-[#f0f7ff] my-3 p-3 rounded-lg" key={index}>

                        <p className="num text-white bg-[#186bad] flex items-center justify-center rounded-xl jost w-[3rem] h-[3rem] text-xl">{item.number}</p>

                        <div className="jost w-[170px]">
                            <h3 className='name font-bold overflow-hidden whitespace-nowrap overflow-ellipsis' title={item.name}>
                                {item.name}
                            </h3>
                            <p className={item.link === 'Meeting link//www.zoom.com' ? 'text-[#186BAD] underline font-semibold text-xs' : 'text-gray-500 font-semibold text-xs'}>
                                {item.link}
                            </p>
                        </div>

                        <div className="time jost flex flex-col justify-around">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faCircle} className='text-[#186BAD] text-[6px]' />
                                <p className='text-[#8A8A8A] text-xs'>{item.time}</p>
                            </div> 
                            <p className={`status font-semibold text-sm ${item.status === 'Upcoming' ? 'text-[#FF9924]' : 'text-[#FF1515]'}`}>{item.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingActivities;
