import React from 'react';
import personal from '../../../Assets/PersonalDataProtection.png';
import online from '../../../Assets/Onlineeducation.png';
import resources from '../../../Assets/resourses.png';
import cloud from '../../../Assets/Cloudstorage.png';

import signup from '../../../Assets/signup-bg.png'
import { Link } from 'react-router-dom';

function Features() {
  const features = [
    {
      id: 1,
      img: personal,
      header: 'Personalized Learning Experience',
      body:
        "We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.",
    },
    {
      id: 2,
      img: online,
      header: 'Expert Tutors',
      body:
        'Our program connects you with highly qualified tutors who are experts in their respective subjects. These dedicated educators are committed to helping you achieve your academic and career goals.',
    },
    {
      id: 3,
      img: resources,
      header: 'Diverse Educational Resources',
      body:
        'Access a vast library of educational materials, textbooks, and study resources. Our program provides you with the resources necessary to enhance your knowledge and excel in your studies.',
    },
    {
      id: 4,
      img: cloud,
      header: 'Flexible Learning',
      body:
        'We recognize the importance of flexibility in education. Our program offers various modes of learning, including one-on-one tutoring, group sessions, and self-paced study with resources.',
    },
    {
      id: 5,
      img: personal,
      header: "Personalized Learning Experience",
      body:
        "We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.",
    },
    {
      id: 6,
      img: personal,
      header: "Personalized Learning Experience",
      body:
        "We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.",
    },
  ];

  return (
    <div className='poppins px-5 lg:px-28 my-28'>
      <div className=''>
        <div className='header-text lg:text-left text-center'>
          <h1 className='text-[#186BAD] lg:text-4xl text-2xl font-semibold'>
            What sets our program Apart
          </h1>
          <p className='my-3'>
            At Proliferate.ai, we believe in the transformative power of
            education. Our program is designed to provide you with the tools,
            support, and opportunities you need to excel in your educational
            journey.
          </p>
        </div>

        <div className="flex gap-y-10 flex-row lg:justify-between justify-center items-center flex-wrap my-10">
            {features.map((item, index) => (
            <div
                key={item.id}
                className='body border-2 rounded-2xl p-3 flex flex-col gap-5 items-center text-center bg-[#fafafa] w-[350px] lg:h-[400px]'
            >
                <img src={item.img} className='w-[100px]' alt='' />
                <h3 className='lg:text-2xl text-xl font-bold'>{item.header}</h3>
                <p className=''>{item.body}</p>
            </div>
            ))}
        </div>
      </div>

      <div className="signup relative">
      <iframe className='lg:h-[80vh]'
        width="100%"
        src="https://www.youtube.com/embed/vVCakfUchVI?si=7vi8Xd8TkTIb7K_6"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <Link to='/register'>
          <button className='text-white bg-[#186bad] lg:py-3 py-1 lg:px-12 px-5 rounded-full font-semibold absolute lg:right-[5rem] right-4 lg:bottom-10 bottom-3'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Features;
