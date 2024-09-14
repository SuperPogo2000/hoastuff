import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const toAbout = ()=>{
    navigate("/about")
  }

  const toCoordinator = ()=>{
    navigate("/coordinator")
  }

  const toHomes = () =>{
    navigate("/homes")
  }

  const toProfile = () =>{
    navigate("/profile");
  }

  const toMain = () =>{
    navigate("/");
  }
  return (
    <div className='bg-rose-950'>
      <ul>
        <li><button onClick={toMain}>Main Page</button></li>
        <li><button onClick={toProfile}>Profile</button></li>
        <li><button onClick={toHomes}>Homes</button></li>
        <li><button onClick={toCoordinator}>Coordinator</button></li>
        <li><button onClick={toAbout}>About</button></li>
      </ul>
    </div>

    

   
    
  )
}

export default Navbar