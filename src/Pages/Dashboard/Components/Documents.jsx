import { faCloudArrowDown, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import chatBubble from '../Icons/Vector (1).svg'
import user from '../../../Assets/user1.png'
import user2 from '../../../Assets/user.png'

function Documents() {
    
    const activities = [
        { img: user, name: 'Bamidele Johnson'},
        { img: user2, name: 'Victoria Ekanem'},
    ];

    return (
        <div className='relative '>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[7rem]">
                <p className='jost text-[#9e9e9e]'>No progress yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold ml-5'>Tutors</h2>
                    {/* <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2> */}
                </div>
                <div className="waitingRoom overflow-y-scroll h-[300px] pr-5">
                    {activities.map((item, index) => (
                        <div className="class p-6 my-2 shadow-lg rounded-lg" key={index}>
                            <div className="jost flex items-center justify-between">
                                <h3 className='name flex items-center gap-3 font-semibold lg:w-[270px] text-lg' >
                                    <div className="tutorImg">
                                        <img src={item.img} className='w-10' alt="" />
                                    </div>
                                    {item.name}
                                </h3>
                                    <img src={chatBubble} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Documents;


