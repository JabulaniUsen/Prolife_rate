import React from 'react';

function Documents() {
    
    const activities = [
        { name: 'Class A 1st semester result', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', time: '03:23am'},
        { name: 'Kelvin college application', message: 'Please schedule your class test', time: '10:25am', },
        { name: 'Class E attendance sheet', message: 'Please resend last session', time: '12:25am', },
        { name: 'Kelvin college application', message: 'Send Document via email', time: '04:30am', },
        { name: 'Class B 1st semester result', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', time: '01:14pm'},
        { name: 'Kelvin college application', message: 'Please schedule your class test', time: '10:25am', },
        { name: 'Akindele Odumayo', message: 'Please resend last session', time: '12:25am', },
        { name: 'Goodness Emmanuel', message: 'Send Document via email', time: '04:30am', },
    ];

    return (
        <div className='waitingRoom overflow-y-scroll relative lg:w-[350px] w-[400px] lg:h-[330px] h-[400px] my-6 mx-2 rounded-2xl shadow-xl lg:p-0 p-5'>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[7rem]">
                <p className='jost text-[#9e9e9e]'>No progress yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold'>Documents</h2>
                    <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2>
                </div>
                {activities.map((item, index) => (
                    <div className="class flex gap-3 border-t-2 py-5" key={index}>

                        <p className="num text-[#186bad] bg-[#f0f7ff] flex items-center justify-center rounded-xl jost w-[3rem] h-[3rem] text-xl">{item.initials}</p>

                        <div className="jost w-[170px]">
                            <h3 className='name font-bold lg:w-[200px]' title={item.name}>
                                {item.name}
                            </h3>
                            <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                {item.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Documents;


