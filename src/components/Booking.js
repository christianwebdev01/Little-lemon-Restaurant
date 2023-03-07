import { render } from '@testing-library/react'
import React from 'react'
import BookingForm from './BookingForm'

export default function Booking(props) {
  /* react-scripts test */
 

  return (
    <div>
      <h1>Este é o booking</h1>
      <BookingForm handleChange={props.handleChange} state={props.state} />
    </div>
  )
}
