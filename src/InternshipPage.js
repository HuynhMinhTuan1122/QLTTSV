import React, { useState } from 'react';
import InternshipForm from './InternshipForm';
import './InternshipPage.css';

const InternshipPage = ({ businesses }) => {
  const handleRegistration = (registrationData) => {
    console.log('Registration data:', registrationData);
  };

  return (
    <div className="internship-page"> 
      <div className="internship-list">
      </div>
      <div className="internship-form-container">
        <InternshipForm businesses={businesses} onRegister={handleRegistration} />
      </div>
    </div>
  );
};

export default InternshipPage;
