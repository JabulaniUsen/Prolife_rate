import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function PendingAssignments() {
    const room = [
        { assignment: "Python", submissionDate: "04 May", submissonTime: "09:20AM" },
        { assignment: "Excel", submissionDate: "01 Aug", submissonTime: "11:20AM" },
        { assignment: "Statistics", submissionDate: "21, July", submissonTime: "10:20AM" },
        { assignment: "Maths", submissionDate: "10 Feb", submissonTime: "12:20AM" },
        { assignment: "French", submissionDate: "16 Mar", submissonTime: "18:20AM" },
        { assignment: "French", submissionDate: "20 Apr", submissonTime: "20:20AM" }
    ];

    return ( <
        div className = 'classProgress relative ' > {
            room.length === 0 && ( <
                div className = "absolute top-[50%] right-[35%]" >
                <
                p className = 'jost text-[#9e9e9e]' > No Assignment yet < /p> <
                /div>
            )
        } <
        div className = "m-6 " >
        <
        div className = "flex justify-between" >
        <
        h2 className = 'pb-4 jost font-bold' > Assignments < /h2> <
        Link to = './Assignments' > < h2 className = ' jost font-semibold cursor-pointer text-[#186bad]' > See all < /h2></Link >
        <
        /div> <
        div className = "waitingRoom overflow-y-scroll h-[335px] w-[300px] pr-3" > {
            room.map((item, index) => ( <
                div className = "class cursor-pointer border-b"
                key = { index } >
                <
                div className = "jost rounded-lg px-5 py-4 my-2 flex gap-3 items-center" >
                <
                div className = "p-2 px-4 rounded-xl bg-[#f0f7ff]" >
                <
                FontAwesomeIcon icon = { faFileAlt }
                className = 'text-[#0052ba]' / >
                <
                /div> <
                div className = "" >
                <
                h3 className = 'font-bold' > { item.assignment } < /h3> <
                p className = 'text-[#9e9e9e] text-sm' > { item.submissionDate }, { item.submissonTime } < /p> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div>

        <
        /div> <
        /div>
    );
}

export default PendingAssignments;