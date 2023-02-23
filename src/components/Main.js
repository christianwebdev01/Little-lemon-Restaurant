import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Booking from './Booking'
import Menu from './Menu'


export default function Main() {
  return (
    
      <main>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/Booking' element={<Booking/>} />
      </Routes>
        {/* <Route path='/menu' element={}/> */}
        {/* <Route path='/ordering' element={HeroSection}/>
        <Route path='/login' element={HeroSection} /> */}
      
      
    </main>
  )
}
