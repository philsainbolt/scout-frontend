import React from 'react'
import { useState, useEffect } from 'react';
import EmployerJobCard from './EmployerJobCard'

<<<<<<< HEAD
const EmployerJobList = ({ jobList, onDelete, onUpdate }) => {
  return (
    <div>
      {jobList.map((job) => (
        <EmployerJobCard
          key={job.id}
          id={job.id}
          jobTitle={job.jobTitle}
          classification={job.classification}
          location={job.location}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
=======
const EmployerJobList = ({data, reload}) => {

// const [jobList, setJobList] = useState([]);

// const reload = () => {
//  fetch(`${import.meta.env.VITE_API_URL}/api/jobs`)
//   .then((res)=> res.json())
//   .then((data)=> setJobList(data))
// }

useEffect(()=>{
  reload()
},[])



  return (
    <div>
        {data.map((job) => {return <EmployerJobCard key={job.id} id={job.id} jobTitle={job.jobTitle} classification={job.classification} location={job.location} refresh={reload} />})}
>>>>>>> f19fe3c (Completed Project)
    </div>
  )
}

export default EmployerJobList
