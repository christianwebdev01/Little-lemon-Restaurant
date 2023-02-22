import React, { useEffect } from 'react'
import logo from '../Assets/logo.png'
import '../App.css'
import menu from '../Assets/menu.png'
import x from '../Assets/x.png'
import HeroSection from './HeroSection'

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
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
        </ul>
    </nav>
      <div className='menu'>{classes === "" && <img  src={menu} width='50px' height='50px' alt='hamburguer-icon'  onClick={changeClass} />}{classes === "active" && <img id='xx-icon' className='x-icon' alt='closing-icon' src={x} width='50px' height='50px'  onClick={changeClass}  />}</div>
      <HeroSection />
    </header>
  )
  }
