import React from 'react'
import JobCard from './JobCard'
import { useState, useEffect } from 'react'

const JobListContainer = () => {


  const [jobList, setJobList] = useState([]);
//     const JobList = {
//   "jobs": [
//     {
//       "id": 1,
//       "jobTitle": "Front-End Engineer",
//       "classification": "Engineering",
//       "location": "Barcelona"
//     },
//     {
//       "id": 2,
//       "jobTitle": "Business Administrator",
//       "classification": "Administration",
//       "location": "Madrid"
//     },
//     {
//       "id": 3,
//       "jobTitle": "Surgeon",
//       "classification": "Medical",
//       "location": "Seville"
//     },
//     {
//       "id": 4,
//       "jobTitle": "GD",
//       "classification": "Designing",
//       "location": "Malaga"
//     }
//   ]
// }

useEffect(()=>{
  // by default, fetch sends the get request
  fetch(`${import.meta.env.VITE_API_URL}/api/jobs`)
  .then((res)=> res.json())
  .then((data)=> setJobList(data))
})

  return (
    <div>
        {jobList.map((job) => {return <JobCard id={job.id} jobTitle={job.jobTitle} classification={job.classification} location={job.location} />})}
    </div>
  )
}

export default JobListContainer
