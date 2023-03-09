import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import chief from '../Assets/chef.jpg'

export default function Footer() {
  return (
    <footer>
       <div className='container'>
       <div id='footer-pic'>
            <img src={chief} width="159px" height="289px"/>
        </div>
      <address>
        <div>
            <p>Navigations</p>
            <ul>
        <li><a href='#top'>Home</a></li>
        <li><a href='#aboutUs'>About</a></li>
        <li><Link to="/Booking">Reservations</Link></li>
        </ul>
        </div>
        <div>
            <p>Contact</p>
            <ul>
        <li><a href='#'>Address</a></li>
        <li><a href='#'>Phone number</a></li>
        <li><a href='#'>Email</a></li>
        </ul>
        </div>
        <div>
            <p>Social medias</p>
            <ul>
        <li><a href='#'>Meta</a></li>
        <li><a href='#'>Instagram</a></li>
        <li><a href='#'>Whatssap</a></li>
        </ul>
        </div>
      </address>
       </div>
    </footer>
  )
}
