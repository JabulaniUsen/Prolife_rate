import React, {useEffect} from 'react';
import tei from '../Icons/totalEarnings.png';
import ts from '../Icons/totalSessions.png';
import cs from '../Icons/completedSessions.png';

const Overview=() => {

    return (
        <div className='poppins flex justify-between my-10'>
            <div className="earnings flex flex-col items-start gap-2 bg-[#FFE2E5] rounded-2xl p-10">
                <img src={tei} alt="" />
                <p className='text-4xl font-bold'>{tutorProfile?.totalEarnings}</p>
                <p>Total Earnings</p>
                <p className='text-sm text-[#4079ED]'>+8% from yesterday</p>
            </div>
            <div className="totalSessions bg-[#FFF4DE] flex flex-col items-start gap-2 rounded-2xl p-10">
                <img src={ts} alt="" />
                <p className='text-4xl font-bold'>{tutorProfile?.totalSessions}</p>
                <p>Total Sessions</p>
                <p className='text-sm text-[#4079ED]'>+8% from yesterday</p>
            </div>
            <div className="completedSessions bg-[#DCFCE7] flex flex-col items-start gap-2 rounded-2xl p-10">
                <img src={cs} alt="" />
                <p className='text-4xl font-bold'>{tutorProfile?.completedSessions}</p>
                <p>Completed Sessions</p>
                <p className='text-sm text-[#4079ED]'>+1.2% from yesterday</p>
            </div>
            <div className="completedSessions bg-[#F3E8FF] flex flex-col items-start gap-2 rounded-2xl p-10">
                <img src={tei} alt="" />
                <p className='text-4xl font-bold'>{tutorProfile?.newStudents}</p>
                <p>New Students</p>
                <p className='text-sm text-[#4079ED]'>0.5% from yesterday</p>
            </div>
        </div>
    );
};

export default Overview;
