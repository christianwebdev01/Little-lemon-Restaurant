import React from 'react'
import '../Css/BookingForm.css'

export default function BookingForm(props) {
   

    const [guests, setGuests] = React.useState()

    const changeNum = (e) => {
        setGuests(e.target.value)
        console.log(e.target.value)
    }

    const [occasions, setOccasions] = React.useState({
        option1: "Birthday",
        option2: "Family Dinner",
    })

    function handleSubmit(e){
        console.log('working')
        window.history.replaceState(null, "ConfirmationBooking", "/ConfirmationBooking")

    }

  return (
    <div>
        <fieldset>
            <form onSubmit={handleSubmit}>
                <h3 className='warning'>Available times can  vary on Weekends.</h3>
                <label htmlFor='date' ><sup>*</sup>Choose a date: </label>
                <input aria-label='inserting a date' required className='input' onChange={props.handleChange} type='date' id='date' />
                <label htmlFor='dates'>Choose a time: </label>
                <select aria-label='inserting time' className='select' aria-label='chooses the time for reservation' id='dates'>
                   {props.state.timesAvailable.length === 0 && <option>Choose date</option>}
                   {props.state.timesAvailable.map(item => {
                   return <option key={item}>{item}</option>
                   })}

                    
                </select>
                <label htmlFor='guests'><sup>*</sup>Number of guests</label>
                <input required className='input input-guests' onChange={changeNum} type='number' id='guests' min='1' max='10' placeholder='Max. 10'/>
                <label htmlFor='occasion'>Occasion</label>
                <select aria-label='inserting special occasion' className='select' id='occasion'>
                    <option>{occasions.option1}</option>
                    <option>{occasions.option2}</option>
                </select>
               <button id='submit-form' type='submit' value='make reservation'>Submit</button>
            </form>
        </fieldset>
    </div>
  )
}
