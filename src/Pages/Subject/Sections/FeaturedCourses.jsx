import React from 'react'
import science from './Assets/science.png'
import chef from './Assets/chef.png'
import swimming from './Assets/swimming.png'
import aerobic from './Assets/aerobic.png'
import language from './Assets/language.png'
import craft from './Assets/craft.png'
import green from './Assets/green.png'
import music from './Assets/music.png'

function FeaturedCourses() {

    const featuredCourses = [
        { id: 1, title: "Kids Science Course", img: science},
        { id: 2, title: "Kids Chef Course", img: chef},
        { id: 3, title: "Kids Music Course", img: music},
        { id: 4, title: "Kids Swimming Course", img: swimming},
        { id: 5, title: "Kids Aeobic Course", img: aerobic},
        { id: 6, title: "Kids Languages Course", img: language},
        { id: 7, title: "Kids Craft & Art Course", img: craft},
        { id: 8, title: "Kids Go Green Course", img: green}
    ]

  return (
    <div className=''>
        <h1 className="text-[#186BAD] flex justify-center my-10 lg:text-3xl text-xl font-bold">
            Our Featured Course at Proliferate
        </h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center lg:mx-36 mx-5 gap-y-10">
            {featuredCourses.map((item, index) => (
                <div className="flex flex-col gap-1 items-start justify-start" key={index}>
                    <img src={item.img} alt="" className='lg:w-[200px] w-[180px]' />
                    <p className='text-[#186BAD] font-bold lg:text-lg mt-1'>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedCourses