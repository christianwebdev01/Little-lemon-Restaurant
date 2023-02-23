import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/HeroSection.css'
import outside from '../Assets/restaurant-outside.jpg'

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-container'>
      <div>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p className='para'>We are a family owned restaurant that comes<br/> from traditional ways of cooking with a<br/> modern twist.</p>
      <button  className='btn-res'><Link className='reserve-link' to='/Booking'>Reserve</Link></button>
      </div>
      <div><img className='hero-img' src={outside} /></div>
      
      </div>
    </div>
  )
}
