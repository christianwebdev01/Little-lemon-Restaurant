import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Booking from './Booking'
import Menu from './Menu'
import ConfirmationBooking from './ConfirmationBooking'



export default function Main(props) {
  return (
    
      <main id="top">
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/Booking' element={<Booking handleChange={props.handleChange} state={props.state} />} />
        <Route path='/ConfirmationBooking' element={<ConfirmationBooking/> } />
      </Routes>
        {/* <Route path='/menu' element={}/> */}
        {/* <Route path='/ordering' element={HeroSection}/>
        <Route path='/login' element={HeroSection} /> */}
      

    </main>
  )
}
