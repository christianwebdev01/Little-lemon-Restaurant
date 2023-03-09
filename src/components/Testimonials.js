import React from 'react'
import '../Css/Testimonials.css'

export default function Testimonials() {
  return (
    <section className='section-bg'>
      <h2 id='rateUs'>Be the first one to rate us!</h2>
       <div>
        <h1 className='testi-title'>Testimonials</h1>
       </div>
       <div className='all-testimonials'>
       <article className='testimonial-card one'></article>
        <article className='testimonial-card two'></article>
        <article className='testimonial-card three'></article>
        <article className='testimonial-card four'></article>
       </div>
      </section>
  )
}
