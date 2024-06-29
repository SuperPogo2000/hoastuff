import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const toTest = () =>{
    navigate("/test");
  }

  const toMain = () =>{
    navigate("/");
  }
  return (
    <div>Navbar


      <ul>
        <li><button onClick={toMain}>Main Page</button></li>
        <li><button onClick={toTest}>Test Page</button></li>
      </ul>
    </div>

    

   
    
  )
}

export default Navbar