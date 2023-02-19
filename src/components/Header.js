import React from 'react'
import logo from '../Assets/logo.png'
import '../App.css'

export default function Header() {
  return (
    <header>
      <div className='logo'><img src={logo} width="320px" height="80px"/></div>
      <nav>
        <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
        </ul>
    </nav>
      <div className='heroSection'></div>
    </header>
  )
}
