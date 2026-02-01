import React from 'react'

const JobCard = (props) => {
  return (
    <div>
            <p>ID: {props.id} </p>
            <h3>Job Title: {props.jobTitle} </h3>
            <h3>Classification: {props.classification} </h3>
            <h3>Location: {props.location} </h3>
    </div>
  )
}

export default JobCard
