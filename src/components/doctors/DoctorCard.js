import React from 'react'
import './Doctors.css';
const DoctorCard = ({name, image, education, mantra}) => {
    console.log(name, image, education, mantra);
  return (
        <div className='doctor-card'>
            
            <img className="doctor-img" src={image} alt="doctor" />

            <span className="name">{name}</span>
            <span className="education">{education}</span>
            <span className="mantra">{mantra}</span>

        </div>
  )
}

export default DoctorCard