// InternshipForm.js
import React, { useState } from 'react';
import './InternshipForm.css';

const InternshipForm = ({ businesses, onRegister }) => {
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [file, setFile] = useState(null); // Added state for file
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleFileChange = (e) => {
    // Handle file changes
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleRegister = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (
      selectedBusiness &&
      studentName &&
      studentEmail &&
      emailRegex.test(studentEmail) &&
      /^\d+$/.test(studentID) &&
      studentClass &&
      file
    ) {
      setIsRegistering(true);

      // Simulate an asynchronous registration process
      setTimeout(() => {
        const registrationSuccess = onRegister({
          businessId: selectedBusiness,
          studentName,
          studentEmail,
          studentID,
          studentClass,
          file, // Include file in registration data
        });

        if (registrationSuccess) {
          setRegistrationStatus('success');
        } else {
          setRegistrationStatus('failure');
        }

        setSelectedBusiness('');
        setStudentName('');
        setStudentEmail('');
        setStudentID('');
        setStudentClass('');
        setFile(null); 
        setIsRegistering(false);
      }, 1000);
    } else {
      setRegistrationStatus('failure');
      alert('Vui lòng điền thông tin hợp lệ và chọn file.');
    }
  };

  return (
    <div className="internship-form">
      <h2>ĐĂNG KÝ THỰC TẬP</h2>
      <label>Chọn doanh nghiệp:</label>
      <select
        value={selectedBusiness}
        onChange={(e) => setSelectedBusiness(e.target.value)}
      >
        <option value="" disabled>
          Chọn doanh nghiệp
        </option>
        {businesses.map((business) => (
          <option key={business.id} value={business.id}>
            {business.name}
          </option>
        ))}
      </select>

      <label>Họ và tên sinh viên:</label>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <label>Email sinh viên:</label>
      <input
        type="email"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
      />

      <label>Mã số sinh viên:</label>
      <input
        type="text"
        value={studentID}
        onChange={(e) => setStudentID(e.target.value)}
      />

      <label>Lớp:</label>
      <input
        type="text"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />

      <label>Chọn CV:</label>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />

      <button onClick={handleRegister} disabled={isRegistering}>
        {isRegistering ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>

      {registrationStatus === 'success' && (
        <p style={{ color: 'green' }}>Đăng ký thành công!</p>
      )}

      {registrationStatus === 'failure' && (
        <p style={{ color: 'red' }}>Đăng ký thất bại. Vui lòng thử lại.</p>
      )}
    </div>
  );
};

export default InternshipForm;
