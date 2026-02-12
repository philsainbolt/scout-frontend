import React from 'react'
import EmployerJobCard from './EmployerJobCard'

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
    </div>
  )
}

export default EmployerJobList
