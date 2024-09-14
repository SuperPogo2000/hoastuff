import React from 'react'

const ServiceRequests = () => {

  return (
    <div className='hover:animate-bounce m-4 p-4 border-2 border-dashed border-orange-600'>
      Service Requests:
      <br></br>
    <form>
        <label for="Q1">Address:</label><br></br>
        <input className='bg-slate-950' type="text" id='Q1' name='address'/><br/>
        <label for='Q2'>Reason:</label>
        <select className='bg-slate-950' name="reason" id="Q2">
          <option value ="plumb">Plumbing Issues</option>
          <option value="elec">Electrical Issues</option>
          <option value="AC">Air Conditioning Issues</option>
          <option value="other">Other</option>
        </select><br/>
        <label for="Q3">Description:</label>
        <input className='bg-slate-950' type='text' id='Q3' name='Q3'/>


    </form>
    </div>
  )
}

export default ServiceRequests