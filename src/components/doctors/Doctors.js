import React from 'react'
import './Doctors.css';
import DoctorCard from './DoctorCard';
import doctors from './data.json';

const Doctors = () => {
  return (
    <div className='doctor-container'>
        <div className='doctor-left'>
            <h2>Meet Our doctors</h2>
            <p>
                Our empanelled team of doctors will help you save up to 72% on every order
            </p>
            <div className='doctor-button-container'>
                <button><img src="https://www.truemeds.in/static/media/prev.3a1697ee.svg" alt="scroll"/></button>
                <button><img src="https://www.truemeds.in/static/media/next.a6438e65.svg" alt="scroll"/></button>
            </div>
        </div>
        <div className='doctor-right'>
            {doctors.map((doctor, ind)=>{
                return(
                    <DoctorCard key={ind} name={doctor.name} image={doctor.image} education={doctor.education} mantra={doctor.mantra} />
                )
            })}

        </div>
    </div>
  )
}

export default Doctors