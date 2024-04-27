import React from 'react'
import Hero from './Sections/Hero'
import Header from '../../Components/Header'
import FeaturedCourses from './Sections/FeaturedCourses'
import FeaturedSubjects from './Sections/FeaturedSubjects'
import Footer from '../../Components/Footer'

function Subject() {
  return (
    <div>
        <Header/>
        <Hero/>
        <FeaturedCourses/>
        <FeaturedSubjects/>
        <Footer/>
    </div>
  )
}

export default Subject