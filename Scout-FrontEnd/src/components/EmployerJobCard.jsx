import React, { useState } from 'react'

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

  return (
    <div className='cards'>
      <h3>ID: <span>{id}</span></h3>
      <h3>Job Title: <span>{jobTitle}</span></h3>
      <h3>Classification: {classification}</h3>
      <h3>Location: {location}</h3>
      <button onClick={() => setIsEditing(true)}>Update</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default EmployerJobCard
