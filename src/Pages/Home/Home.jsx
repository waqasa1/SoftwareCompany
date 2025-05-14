import React from 'react'
import HeroSection from './HeroSection'
import Recognized from './Recognized'
import Contact from '../Contact/Form'
import SuccessStories from './SuccessStories'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <SuccessStories />
        <Contact />
        <Recognized />
    </div>
  )
}

export default Home
