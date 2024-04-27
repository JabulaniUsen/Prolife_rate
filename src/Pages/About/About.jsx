import React from 'react'
import Hero from './Sections/Hero'
import Header from '../../Components/Header'
import Story from './Sections/Story'
import Mission from './Sections/Mission'
import Breaking from './Sections/Breaking'
import College from './Sections/College'
import Our from './Sections/Our'
import Footer from '../../Components/Footer'

function About() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Story/>
      <Mission/>
      <Breaking/>
      <College/>
      <Our/>
      <Footer/>
    </div>
  )
}

export default About