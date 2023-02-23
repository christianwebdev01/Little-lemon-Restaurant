import React from 'react'
import About from './About'
import Testimonials from './Testimonials'
import Weeks from './Weeks'
import HeroSection from './HeroSection'

export default function Homepage() {
  return (
    <>
    <HeroSection />
    <Weeks />
      <Testimonials />
      <About />
    </>
  )
}
