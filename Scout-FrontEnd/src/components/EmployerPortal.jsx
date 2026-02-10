import React from 'react'
import EmployerJobCard from './EmployerJobCard'
import EmployerJobList from './EmployerJobList'

const EmployerPortal = () => {
  
  const addJob = () =>{
    fetch("http://localhost:3000/api/jobs",{
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Critical: Tells Node to parse the body
      },
      body: {id:"placeholder",jobTitle: "placeholder",classification: "placehoder", location: "placeholder"}
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
