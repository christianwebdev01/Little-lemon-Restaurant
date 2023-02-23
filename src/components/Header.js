import React, { useEffect } from 'react'
import logo from '../Assets/logo.png'
import '../App.css'
import menu from '../Assets/menu.png'
import x from '../Assets/x.png'
import { Routes, Route, Link} from "react-router-dom";


export default function Header() {
  const [classes, setClasses] = React.useState("")
  const [isVisible, setIsVisible] = React.useState("");
  const changeClass = () => {
    if(classes == ""){
      setClasses("active")
      setIsVisible(true)
    } else {
      setClasses("")
      setIsVisible(false);
    }
  }
  const [theme, setTheme] = React.useState("nav-white");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        if (entry.isIntersecting) {
          setTheme("nav-black");
          console.log('isV')
        } else {
          setTheme("nav-white");
          console.log('isNotV')
        }
      },
      { threshold: [0, 1] }
    );
  
    if (isVisible) {
      const pic = document.querySelector("#xx-icon");
      observer.observe(pic);
  
      return () => {
        observer.unobserve(pic);
        setTheme("nav-white");
      };
    }
  }, [isVisible]);


  return (
    <header>
      <div className='logo'><img src={logo} width="320px" height="80px"/></div>
      
      
      <nav className={theme}>
      <ul className={classes}>
      <li>
        <Link to='/'>Home</Link>
        </li>
      {/* <li>
        <Link to='/about'>About</Link>
        </li> */}
      <li>
        <Link to='/menu'>Menu</Link>
        </li>
      <li>
        <Link to='/Booking'>Reservations</Link>
        </li>
      {/* <li>
        <Link to='/ordering'>Order Online</Link>
        </li>
      <li>
        <Link to='/login'>Login</Link>
        </li> */}
      </ul>
      </nav>
      
      
  
      
  
      <div className='menu'>{classes === "" && <img  src={menu} width='50px' height='50px' alt='hamburguer-icon'  onClick={changeClass} />}{classes === "active" && <img id='xx-icon' className='x-icon' alt='closing-icon' src={x} width='50px' height='50px'  onClick={changeClass}  />}</div>
      
    </header>
  )
  }
