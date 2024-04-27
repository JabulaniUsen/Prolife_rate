import React from 'react'
import Header from '../../Components/Header'
import Hero from './Sections/Hero'
import Tutors from './Sections/Tutors'
import Newsletter from '../LandingPage/Sections/Newsletter'
import Footer from '../../Components/Footer'

function Tutor() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Tutors/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Tutor