import React from 'react'
import '../App.css'
import chief from '../Assets/chef.jpg'

export default function Footer() {
  return (
    <footer>
        <div>
            <img src={chief} width="159px" height="289px"/>
        </div>
      <address>
        <div>
            <p>Navigations</p>
            <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
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
            <p>Social media links</p>
            <ul>
        <li><a href='#'>Meta</a></li>
        <li><a href='#'>Instagram</a></li>
        <li><a href='#'>Whatssap</a></li>
        </ul>
        </div>
      </address>
    </footer>
  )
}
