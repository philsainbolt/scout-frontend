<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
=======
import React, {useState, useEffect} from 'react'
import EmployerJobCard from './EmployerJobCard'
>>>>>>> f19fe3c (Completed Project)
import EmployerJobList from './EmployerJobList'

const API_URL = import.meta.env.VITE_API_URL;

const EmployerPortal = () => {
<<<<<<< HEAD
  const [jobTitle, setJobTitle] = useState("");
  const [classification, setClassification] = useState("");
  const [location, setLocation] = useState("");
  const [jobList, setJobList] = useState([]);

  const fetchJobs = () => {
    fetch(`${API_URL}/api/jobs`)
      .then((res) => res.json())
      .then((data) => setJobList(data));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = () => {
    if (!jobTitle || !classification || !location) return;

    fetch(`${API_URL}/api/jobs`, {
=======

const [jobList, setJobList] = useState([]);
const [newJobTitle, setNewJobTitle] = useState("");
const [newJobClassification, setNewJobClassification] = useState("");
const [newJobLocation, setNewJobLocation] = useState("");

const handleJobTitle = (e) => {
  setNewJobTitle(e.target.value)
}

const handleJobClassification = (e) => {
  setNewJobClassification(e.target.value)
}

const handleJobLocation = (e) => {
  setNewJobLocation(e.target.value)
}

const reload = () => {
 fetch(`${import.meta.env.VITE_API_URL}/api/jobs`)
  .then((res)=> res.json())
  .then((data)=> setJobList(data))
}
  
  const addJob = async () => {
    try { 
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`,{
>>>>>>> f19fe3c (Completed Project)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
<<<<<<< HEAD
      body: JSON.stringify({ jobTitle, classification, location })
    })
      .then((res) => res.json())
      .then(() => {
        setJobTitle("");
        setClassification("");
        setLocation("");
        fetchJobs();
      });
  };

  const deleteJob = (id) => {
    fetch(`${API_URL}/api/jobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => fetchJobs());
  };

  const updateJob = (id, updatedFields) => {
    fetch(`${API_URL}/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields)
    })
      .then((res) => res.json())
      .then(() => fetchJobs());
  };

  return (
    <>
      <div className="employer-portal">
        <h3>Job Title</h3>
        <input
          placeholder="Enter your job title here"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <h3>Classification</h3>
        <input
          placeholder="Enter the classification here"
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
        />

        <h3>Location</h3>
        <input
          placeholder="Enter the location here"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button onClick={addJob}>Add the Job</button>
      </div>

      <div>
        <EmployerJobList
          jobList={jobList}
          onDelete={deleteJob}
          onUpdate={updateJob}
        />
      </div>
=======
      body: JSON.stringify({id:5,jobTitle: newJobTitle,classification: newJobClassification, location: newJobLocation})
    })

    if(response.ok){
      reload();
      setNewJobTitle("");
      setNewJobClassification("");
      setNewJobLocation("");
    }
  }
    catch (err) {
      console.err("Detailed Error:"+ err)
    }
  } 

  return (
    <>
    <div className="employer-portal" >
      
      <h3>Job Title</h3>
      <input id="" placeholder="Enter your job title here" value={newJobTitle} onChange={(e)=>handleJobTitle(e)}/>

      <h3>Classification</h3>
      <input id="" placeholder="Enter your job title here" value={newJobClassification} onChange={(e)=>handleJobClassification(e)}/>

      <h3>Location</h3>
      <input id="" placeholder="Enter your job title here" value={newJobLocation} onChange={(e)=>handleJobLocation(e)}/> 

      <button onClick={addJob} className='add-job-btn'>Add the Job</button>
    </div>
    
    <div><EmployerJobList data={jobList} reload={reload}/></div>
    
>>>>>>> f19fe3c (Completed Project)
    </>
  );
};

export default EmployerPortal;
