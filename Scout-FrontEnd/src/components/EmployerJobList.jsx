import React from 'react'
import EmployerJobCard from './EmployerJobCard'

const EmployerJobList = () => {

    const JobList = {
  "jobs": [
    {
      "id": 1,
      "jobTitle": "Front-End Engineer",
      "classification": "Engineering",
      "location": "Barcelona"
    },
    {
      "id": 2,
      "jobTitle": "Business Administrator",
      "classification": "Administration",
      "location": "Madrid"
    },
    {
      "id": 3,
      "jobTitle": "Surgeon",
      "classification": "Medical",
      "location": "Seville"
    },
    {
      "id": 4,
      "jobTitle": "GD",
      "classification": "Designing",
      "location": "Malaga"
    }
  ]
}

  return (
    <div>
        {JobList.jobs.map((job) => {return <EmployerJobCard id={job.id} jobTitle={job.jobTitle} classification={job.classification} location={job.location} />})}
    </div>
  )
}

export default EmployerJobList
