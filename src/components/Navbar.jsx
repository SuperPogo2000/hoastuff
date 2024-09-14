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
    <div className='w-24 bg-rose-950'>
      <ul>
        <li className='bg-orange-600 rounded-lg shadow p-2 hover:animate-pulse'><button onClick={toMain}>Main Page</button></li>
        <li className='bg-amber-500 rounded-lg shadow p-2 hover:animate-pulse'><button onClick={toProfile}>Profile</button></li>
        <li className='bg-lime-500 rounded-lg shadow p-2 hover:animate-pulse'><button onClick={toHomes}>Homes</button></li>
        <li className='bg-cyan-700 rounded-lg shadow p-2 hover:animate-pulse'><button onClick={toCoordinator}>Coordinator</button></li>
        <li className='bg-violet-800 rounded-lg shadow p-2 hover:animate-pulse'><button onClick={toAbout}>About</button></li>
      </ul>
    </div>

    

   
    
  )
}

export default Navbar