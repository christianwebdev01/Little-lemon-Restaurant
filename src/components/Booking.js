import React from 'react'
import BookingForm from './BookingForm'

export default function Booking(props) {
  /* react-scripts test */
 

  return (
    <div>
      <BookingForm handleChange={props.handleChange} state={props.state} />
    </div>
  )
}
