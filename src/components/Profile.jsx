import React from 'react'
import Navbar from './Navbar'

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
        <div className='hover:scale-105 m-4 p-4 border-2 border-dashed border-emerald-500'>
          <div className="flex items-center justify-center">
            <label  for='Name'>Name</label>
          </div>
          <div className="flex items-center justify-center">
          <input className=" bg-slate-950" type="text" id='Name' name="Name"></input>
          </div>
        </div>
        <div className='hover:scale-105 m-4 p-4 border-2 border-dashed border-lime-500'>
        <div className="flex items-center justify-center">
        <label for='hhm'>Household Members</label>
        <select className='bg-slate-950' name="householdmembers" id="hhm">
          <option value ="1">One household member</option>
          <option value="2">Two household members</option>
          <option value="3">Three household members</option>
          <option value="more">Four or more household members</option>
          </select><br/>
          </div>
          </div>
        <div className='hover:scale-105 m-4 p-4 border-2 border-dashed border-indigo-800'>
        <div className="flex items-center justify-center">
        <label className="content-center" for='Address'>Address</label><br/>
        </div>
        <div className="flex items-center justify-center">
        </div>
        <div className="flex items-center justify-center"><input className="bg-slate-950 content-center" type="text" id='Address' name="Address"></input><br/>
        </div>
        
        </div>
    </div>
    
  )
}

export default Profile