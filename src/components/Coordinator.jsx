import React from 'react'
import Navbar from './Navbar'

const Coordinator = () => {
  return (
    <div className='Coordinator'>
        <Navbar></Navbar>
        Coordinator: This page tells what the coordinator is authorized to do.
        <ul>
          <li>Announce new homeowners who newly moved in</li>
          <li>Allow permission for home renovations</li>
        </ul>
    </div>
  )
}

export default Coordinator