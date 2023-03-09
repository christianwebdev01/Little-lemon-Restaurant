import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const initialState = {
    weekday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    saturday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    sunday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
  };

const handleChange = (event) =>{
const date = new Date(event.target.value)
console.log(date)
dispatch({type: 'SELECT_DATE', payload: {dates: date}}) //name prop. could be anything.
//im sending to the reducer function a type of action and the object related to it(payload).
}
function getDayOfWeek(date) {
  const daysOfWeek = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday', 'sunday' ];
  return daysOfWeek[date.getDay()];
}

const reducer = (state, action) =>{
 switch(action.type){
  case 'SELECT_DATE': 
  let dayOfWeek = getDayOfWeek(action.payload.dates)
  if (dayOfWeek === 'saturday' || dayOfWeek === 'sunday'){
    console.log(dayOfWeek)
  } else{
    dayOfWeek = 'weekday'
  }
  let timesAvailable = initialState[dayOfWeek]
  
 
  return{
    ...state,
    selectedDate: action.payload.dates,
    timesAvailable: timesAvailable
    
  };
  
  default:
    return state;
    
 }
}

  let [state, dispatch] = React.useReducer(reducer, {
    selectedDate: null, //initially no date selected and no time available till you select the date
    timesAvailable: [],
  })

  return (
    <>
   <Router>
      <Header />
      <Main handleChange={handleChange} state={state} />
      <Footer />
   </Router>
    </>
  );
}

export default App;
