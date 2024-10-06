import React from 'react'
import A from '../../assets/A.jpg'
import B from '../../assets/B.jpg'
import C from '../../assets/C.jpg'
import D from '../../assets/D.jpg'

const CommunityHighlights = () => {
  return (
    <div className='hover:scale-105 m-4 p-4 border-2 border-dashed border-blue-900'>Community Highlights:<br/>
    <img src={A} alt=""/><br/>
    <img src={B} alt=""/><br/>
    <img src={C} alt=""/><br/>
    <img src={D} alt=""/>
    </div>
  )
}

export default CommunityHighlights