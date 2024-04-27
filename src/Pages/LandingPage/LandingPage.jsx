import React from 'react'
import Header from '../../Components/Header'
import Hero from './Sections/Hero'
import Category from './Sections/Category'
import Tools from './Sections/Tools'
import Works from './Sections/Works'
import College from './Sections/College'
import Tutor from './Sections/Tutor'
import Instructors from './Sections/Instructors'
import Testimonial from './Sections/Testimonial'
import Newsletter from './Sections/Newsletter'
import Footer from '../../Components/Footer'

function LandingPage() {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Hero/>
      <Category/>
      <Tools/>
      <Works/>
      <College/>
      <Tutor/>
      {/* <Instructors/> */}
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default LandingPage