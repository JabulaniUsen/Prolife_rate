import React from 'react'
import Hero from './Sections/Hero'
import Header from '../../Components/Header'
import Plans from './Sections/Plans'
import StartLearning from './Sections/StartLearning'
import Faq from './Sections/Faq'
import Footer from '../../Components/Footer'

function PricingPage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Plans/>
        <StartLearning/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default PricingPage