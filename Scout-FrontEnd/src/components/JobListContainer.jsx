import React from 'react'
import JobCard from './JobCard'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL;

const JobListContainer = ({ searchParams }) => {


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
  const params = new URLSearchParams();
  if (searchParams?.jobTitle) params.append("jobTitle", searchParams.jobTitle);
  if (searchParams?.classification) params.append("classification", searchParams.classification);
  if (searchParams?.location) params.append("location", searchParams.location);

  fetch(`${API_URL}/api/jobs?${params.toString()}`)
  .then((res)=> res.json())
  .then((data)=> setJobList(data))
}, [searchParams])

  return (
    <div>
        {jobList.map((job) => {return <JobCard id={job.id} jobTitle={job.jobTitle} classification={job.classification} location={job.location} />})}
    </div>
  )
}

export default JobListContainer
