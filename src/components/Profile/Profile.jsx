import React from 'react'
import Navbar from '../Navbar'

const Profile = () => {
  return (
    <div>
        <Navbar></Navbar>
        This is your profile page, where you will be able to access your account information.<br/>
        You can access and change:
        <ul>
          <li>Name</li>
          <li>Household Members</li>
          <li>Address</li>
        </ul>
    </div>
    
  )
}

export default Profile