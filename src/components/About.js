import React from 'react'
import '../Css/About.css'
import food from '../Assets/restauranfood.jpg'
import chiefs from '../Assets/marioAdrien.jpg'

export default function About() {
  return (
    <div id='aboutUs' className='about-us-container'>
      <div className='info'>
        <h1 className='about-me-title'>Little Lemon</h1>
        <h2 className='about-me-sub'>Chicago</h2>
        <p className='about-me-para'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."</p>
      </div>
      <div className='about-pictures'>
        <img className='pic pic-one' src={chiefs}/>
        <img className='pic pic-two' src={food}/>
      </div>
    </div>
  )
}
