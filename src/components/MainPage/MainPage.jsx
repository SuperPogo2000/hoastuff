import React from 'react'
import Navbar from '../Navbar'
import Announcements from './Announcements'
import EmergencyInformation from './EmergencyInformation'
import ServiceRequests from './ServiceRequests'

const MainPage = () => {
  return (
    <div className='main'>
        <Navbar></Navbar>
        This is the Main Page. Most content will be located here. You can access the following:
        <ul>
          <li>Announcements</li>
          <li>Emergency Information</li>
          <li>Service Requests</li>
          <li>Community Highlights</li>
          <li>F.A.Q</li>
        </ul>
        <Announcements></Announcements>
        <EmergencyInformation></EmergencyInformation>
        <ServiceRequests></ServiceRequests>
        



        
    </div>
    
  )
}

export default MainPage