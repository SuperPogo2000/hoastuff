import React from 'react'
import Navbar from '../Navbar'
import Announcements from './Announcements'
import EmergencyInformation from './EmergencyInformation'
import ServiceRequests from './ServiceRequests'
import CommunityHighlights from './CommunityHighlights'
import FAQ from './F.A.Q'
import './CSS/mainpage.css'

const MainPage = () => {
  return (
    <div className='main_page_bg main_page_txt'>
        <Navbar></Navbar>
       <div className=""> This is the Main Page. Most content will be located here. You can access the following:
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
        <CommunityHighlights></CommunityHighlights>
        <FAQ></FAQ></div>
      



        
    </div>
    
  )
}

export default MainPage