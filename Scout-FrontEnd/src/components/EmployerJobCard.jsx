<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from "react";
>>>>>>> f19fe3c (Completed Project)

const EmployerJobCard = ({ id, jobTitle, classification, location, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(jobTitle);
  const [editClassification, setEditClassification] = useState(classification);
  const [editLocation, setEditLocation] = useState(location);

  const handleUpdate = () => {
    onUpdate(id, {
      jobTitle: editTitle,
      classification: editClassification,
      location: editLocation,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(jobTitle);
    setEditClassification(classification);
    setEditLocation(location);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className='cards'>
        <h3>ID: {id}</h3>
        <h3>Job Title: <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /></h3>
        <h3>Classification: <input value={editClassification} onChange={(e) => setEditClassification(e.target.value)} /></h3>
        <h3>Location: <input value={editLocation} onChange={(e) => setEditLocation(e.target.value)} /></h3>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

<<<<<<< HEAD
  return (
    <div className='cards'>
      <h3>ID: <span>{id}</span></h3>
      <h3>Job Title: <span>{jobTitle}</span></h3>
      <h3>Classification: {classification}</h3>
      <h3>Location: {location}</h3>
      <button onClick={() => setIsEditing(true)}>Update</button>
      <button onClick={() => onDelete(id)}>Delete</button>
=======
const EmployerJobCard = (props) => {
  const deleteJob = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${props.id}`, {
        method: "DELETE",
      });

      if(response.ok){
        props.refresh();
      }
      
    } catch (err) {
      console.error("Detailed Error:" + err);
    }
  };

  const updateJob = async() => {
    try{

    const updatedData = {
      jobTitle: prompt("Update title"),
      classification: prompt("Update classification"),
      location: prompt("Update location"),
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // <--- MANDATORY
      },
      body: JSON.stringify({
        jobTitle: updatedData.jobTitle,
        classification: updatedData.classification,
        location: updatedData.location,
      }),
    });

    if(response.ok){
    props.refresh();   
    }
<<<<<<< HEAD
    
  return (
    <div className='cards'>
            <h3>ID:<span>{props.id}</span></h3> 
            
            <h3>Job Title: <span>{props.jobTitle}</span> </h3>
            <h3>Classification: {props.classification} </h3>
            <h3>Location: {props.location} </h3>
            <button onClick={updateJob}>Update</button>
            <button onClick={deleteJob}>Delete</button>
>>>>>>> 08ba099 (updated)
    </div>
  );
};
=======
>>>>>>> f19fe3c (Completed Project)

   
    } catch(err){
      console.err("Detaied Error: "+err)
    }
  }; 

  return (
    <div className="cards">
      <h3>
        ID:<span>{props.id}</span>
      </h3>

      <h3>
        Job Title: <span>{props.jobTitle}</span>{" "}
      </h3>
      <h3>Classification: {props.classification} </h3>
      <h3>Location: {props.location} </h3>
      <button onClick={updateJob} className="update-btn">
        Update
      </button>
      <button onClick={deleteJob} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default EmployerJobCard;
