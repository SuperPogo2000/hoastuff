import React from 'react'
import Navbar from '../Navbar'
import Announcements from './Announcements'
import EmergencyInformation from './EmergencyInformation'
import ServiceRequests from './ServiceRequests'
import CommunityHighlights from './CommunityHighlights'
import FAQ from './F.A.Q'


const MainPage = () => {
  return (
    <div className='bg-gradient-to-b from-rose-950 via-slate-800 to-slate-800 text-lime-800 font-serif min-h-screen'>
        <Navbar></Navbar>
       <div> This is the Main Page. Most content will be located here. You can access the following:
        <ul className='p-12'>
          <li className="">Announcements</li>
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