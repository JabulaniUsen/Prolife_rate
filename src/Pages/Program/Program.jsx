import React from 'react'
import Header from '../../Components/Header'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import KeyFeatures from './Sections/KeyFeatures'
import Benefits from './Sections/Benefits'
import Newsletter from '../LandingPage/Sections/Newsletter'
import Footer from '../../Components/Footer'

function Program() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Features/>
        <KeyFeatures/>
        <Benefits/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Program