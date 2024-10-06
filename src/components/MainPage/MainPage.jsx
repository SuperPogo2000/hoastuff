import React from 'react'
import Navbar from '../Navbar'
import Announcements from './Announcements'
import EmergencyInformation from './EmergencyInformation'
import ServiceRequests from './ServiceRequests'
import CommunityHighlights from './CommunityHighlights'
import FAQ from './F.A.Q'


const MainPage = () => {
  return (
    <div>
        <Navbar></Navbar>
       <div> This is the Main Page. Most content will be located here.<br/>
       You can access the following:
        <ul className='p-12'>
          <li>Announcements</li>
          <li>Emergency Information</li>
          <li>Service Requests</li>
          <li>Community Highlights</li>
          <li>F.A.Q</li>
        </ul>
        <Announcements></Announcements>
        <EmergencyInformation></EmergencyInformation>
        <ServiceRequests></ServiceRequests>
        <CommunityHighlights></CommunityHighlights>
        <FAQ></FAQ></div>
      



        
    </div>
    
  )
}

export default MainPage