import React from 'react'

const EmployerJobCard = (props) => {
  return (
    <div className='cards'>
            <h3>ID:<span>{props.id}</span></h3> 
            
            <h3>Job Title: <span>{props.jobTitle}</span> </h3>
            <h3>Classification: {props.classification} </h3>
            <h3>Location: {props.location} </h3>
            <button>Update</button>
            <button>Delete</button>
    </div>
  )
}

export default EmployerJobCard
