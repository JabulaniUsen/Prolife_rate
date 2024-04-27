import React from 'react'
import Hero from './Section/Hero'
import Header from '../../Components/Header'
import Form from './Section/Form'
import Newsletter from '../LandingPage/Sections/Newsletter'
import Footer from '../../Components/Footer'

function Contact() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Form/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Contact