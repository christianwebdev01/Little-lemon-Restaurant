import React from 'react'
import '../Css/Weeks.css'
import england from '../Assets/england.jpg'
import ordering from '../Assets/ordering.png'
import greek from '../Assets/greekSalad.jpg'
import brusch from '../Assets/bruschetta.jpg'
import { Link } from 'react-router-dom'

export default function Weeks() {
  const [englandPrice, setEnglandPrice] = React.useState("12.99$")
  const [greekPrice, setgreekPrice] = React.useState("12.99$")
  const [bruschPrice, setBruschPrice] = React.useState("15.99$")
  return (
      <section className='weekSpecials'>
        <div className='labels'>
          <h1 className='week-title-main'>Specials</h1>
          <button className='btn-week'><Link className='online-menu' to="/menu">Online menu</Link></button>
      </div>
          <div className='all-weekly'>
          <article className='weekly-special '>
            <div>
              <img className='card-pic' src={england} width='279px' height='160px'/>
            </div>

            <div className='card-infos1'>
              <h4 className='card-title'>England Salad</h4>
              <h4 className='price'>{englandPrice}</h4>
              
            </div>
            <div className='card-info2'>
            <p className='card-para'>A traditional Greek salad consists<br/> of sliced cucumbers, tomatoes, <br/>green bell pepper, red onion,<br/> olives, and feta cheese.</p>
            </div>
            <div className='card-order one'>
              <h3 className='card-add'>Order online</h3>
              <img className='card-order-pic ' src={ordering} />
            </div>
          </article>
          <article className='weekly-special'>
            <div>
              <img className='card-pic' src={greek} width='279px' height='160px'/>
            </div>

            <div className='card-infos1'>
              <h4 className='card-title'>Greek Salad</h4>
              <h4 className='price'>{greekPrice}</h4>
              
            </div>
            <div className='card-info2'>
            <p className='card-para'>A traditional English salad <br/>consists of double sliced<br/> cucumbers, no tomatoes, <br/>green bell pepper, <br/>red onion, olives, and colby cheese.</p>
            </div>
            <div className='card-order  two'>
              <h3 className='card-add'>Order online</h3>
              <img className='card-order-pic' src={ordering} />
            </div>
          </article>
          <article className='weekly-special'>
            <div>
              <img className='card-pic' src={brusch} width='279px' height='160px'/>
            </div>

            <div className='card-infos1'>
              <h4 className='card-title'>Bruschetta</h4>
              <h4 className='price'>{bruschPrice}</h4>
              
            </div>
            <div className='card-info2'>
            <p className='card-para'>Bruschetta is a recipe that<br/> originated in the Italian <br/> countryside, where Italian <br/>farmers felt the need to <br/>keep bread. That's why<br/>  it is toasted, seasoned with<br/> oil and salt and rubbed with<br/> raw garlic.</p>
            </div>
            <div className='card-order three'>
              <h3 className='card-add'>Order online</h3>
              <img className='card-order-pic ' src={ordering} />
            </div>
          </article>
          
          </div>
        </section>
  
  )
}
