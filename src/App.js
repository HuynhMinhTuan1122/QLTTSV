import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Compoments/TrangChu';
import Register from './Compoments/DangKy';
import Login from './Compoments/DangNhap';
import DanhSachSinhVien from './Compoments/DanhSachSinhVien';
import BusinessManager from './BusinessManager';
import InternshipPage from './InternshipPage';
import FormTaiLieu from './FormTaiLieu';
import FeedbackForm from './Compoments/FeedbackForm';


const ExampleBusinesses = [
  { id: '1', name: 'Company A' },
  { id: '2', name: 'Company B' },
  { id: '3', name: 'Company C' },
];

function App() {
  const [taiLieus, setTaiLieus] = useState([]);

  const handleUpload = (taiLieu) => {
    setTaiLieus([...taiLieus, taiLieu]);
  };

  const handleFeedbackSubmit = (feedback) => {
    fetch('https://example.com/api/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });

    console.log('Phản hồi từ sinh viên:', feedback);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<DanhSachSinhVien />} />
        <Route path="/business" element={<BusinessManager />} />
        <Route path="/internship" element={<InternshipPage businesses={ExampleBusinesses} />} />
        <Route path="/form_tai_lieu" element={<FormTaiLieu onUpload={handleUpload} />} />
        <Route path="/feedback_form" element={<FeedbackForm onSubmit={handleFeedbackSubmit} />} />
     
      </Routes>
    </Router>
  );
}

export default App;
