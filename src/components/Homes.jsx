import React from 'react'
import Navbar from "./Navbar"
import Home1 from '../assets/Home1.jpg'
import Home2 from '../assets/Home2.jpg'
import Home3 from '../assets/Home3.jpg'
import Home4 from '../assets/Home4.jpg'
import Home5 from '../assets/Home5.jpg'

const Homes = () => {
  return (
    <div className = "Homes">
        <Navbar></Navbar>
        Homes:
        <img src={Home1} alt=""/><br/>
        Owner: Lawrence Obama
        <img src={Home2} alt=""/><br/>
        Owner: Pompadour Jones
        <img src={Home3} alt=""/><br/>
        Owner: Gleg Heffney
        <img src={Home4} alt=""/><br/>
        Owner: Giggity Skib
        <img src={Home5} alt=""/><br/>
        Owner: Bessie Karate
   </div>
  )
}

export default Homes