import React, { useState } from 'react'
import UserCard from './UserCard';

const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [about,setAbout] = useState("");
    
  return (
    <div className='flex justify-center my-10 gap-4'>
       <div className='flex justify-center'>
      <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile</h2>
    <div className=''>
      <legend className="fieldset-legend">First Name :</legend>
      <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} type="text" className="input"  />
    </div>
     <div className=''>
      <legend className="fieldset-legend">Last Name :</legend>
      <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" className="input"  />
    </div>
     <div className=''>
      <legend className="fieldset-legend">Photo URL :</legend>
      <input value={photoUrl} onChange={(e)=>{setPhotoUrl(e.target.value)}} type="text" className="input"  />
    </div>
     <div className=''>
      <legend className="fieldset-legend">Age :</legend>
      <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="text" className="input"  />
    </div>
     <div className=''>
      <legend className="fieldset-legend">Gender :</legend>
      <input value={gender} onChange={(e)=>{setGender(e.target.value)}} type="text" className="input"  />
    </div>
    <div className='mb-2'>
      <legend className="fieldset-legend">About :</legend>
      <input value={about} onChange={(e)=>{setAbout(e.target.value)}} type="password" className="input"  />
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" >Save Profile</button>
    </div>
  </div>
</div>
    </div>

    <UserCard/>
    </div>
  )
}

export default EditProfile
