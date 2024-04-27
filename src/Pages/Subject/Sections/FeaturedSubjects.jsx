import React from 'react'
import robotics from './Assets/robotics.png'
import stem from './Assets/stem.png'
import tutor from './Assets/tutor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGripVertical } from '@fortawesome/free-solid-svg-icons'

function FeaturedSubjects() {

    const featuredCourses = [
        { id: 1, title: "Robotics", img: robotics, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        { id: 2, title: "STEM", img: stem, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        { id: 3, title: "Music", img: robotics, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        { id: 4, title: "Programming", img: stem, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        // { id: 5, title: "Robotics", img: robotics, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        // { id: 6, title: "STEM", img: stem, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        // { id: 7, title: "Music", img: robotics, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" },
        // { id: 8, title: "Programming", img: stem, duration: "3 Months", description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor", tutorImg: tutor, tutorName: "Lina", oldPrice: "$100", newPrice: "$80" }
    ]

  return (
    <div className='bg-[#ebf5ff] py-20'>
        <div className="poppins flex justify-between  mb-7 lg:mx-36 mx-5">
            <h1 className="lg:text-3xl text-xl font-semibold">Featured Subjects</h1>
            <button className='text-[#186BAD] font-bold'>See more</button>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center lg:gap-8 gap-2 lg:px-28 px-5 gap-y-10">
            {featuredCourses.map((item, index) => (
                <div className="poppins flex flex-col gap-5 lg:w-[270px] bg-white p-3 rounded-xl" key={index}>
                    <img src={item.img} alt="" />
                    <div className="flex justify-between text-[#186BAD]">
                        <small className='flex items-center gap-x-1 font-semibold'><FontAwesomeIcon icon={faGripVertical} />Design</small>
                        <small className='flex items-center gap-x-1 font-semibold'><FontAwesomeIcon icon={faClock} />{item.duration}</small>
                    </div>
                    <div className="flex flex-col lg:gap-6 gap-3">
                        <h2 className='text-[#186BAD] font-semibold text-lg'>{item.title}</h2>
                        <p className='text-[#186bad] text-sm'>{item.description}</p>
                    </div>
                    <div className="flex justify-between gap-5 lg:gap-0  lg:flex-row flex-col">
                        <div className="flex items-center gap-2">
                            <img src={item.tutorImg} alt="" />
                            <p>{item.tutorName}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className='text-[#808080] line-through text-sm'>{item.oldPrice}</p>
                            <p className='text-[#186bad] font-bold'>{item.newPrice}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedSubjects
