import React from 'react'
import EmployerJobCard from './EmployerJobCard'
import EmployerJobList from './EmployerJobList'

const EmployerPortal = () => {
  
  const addJob = () =>{
    fetch(`${import.meta.env.VITE_API_URL}/api/jobs`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({jobTitle: "placeholder",classification: "placeholder", location: "placeholder"})
    })
  }
  
  return (
    <>
    <div className="employer-portal" >
      
      <h3>Job Title</h3>
      <input id="" placeholder="Enter your job title here"/>


      <h3>Classification</h3>
      <input id="" placeholder="Enter your job title here"/>

      <h3>Location</h3>
      <input id="" placeholder="Enter your job title here"/> 

      <button>Add the Job</button>
    </div>
    
    <div><EmployerJobList/></div>
    

    </>
  )
}

export default EmployerPortal
