// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Compoments/TrangChu';
import Register from './Compoments/DangKy';
import Login from './Compoments/DangNhap';
import DanhSachSinhVien from './Compoments/DanhSachSinhVien';
import BusinessManager from './BusinessManager';
import InternshipPage from './InternshipPage'; 
import StudentManagementForm from './StudentManagementForm';

const ExampleBusinesses = [
  { id: '1', name: 'Company A' },
  { id: '2', name: 'Company B' },
  { id: '3', name: 'Company C' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<DanhSachSinhVien />} />
        <Route path="/business" element={<BusinessManager />} />
        <Route path="/internship" element={<InternshipPage businesses={ExampleBusinesses} />} />
        <Route path="/student_management" element={<StudentManagementForm />} />
      </Routes>
    </Router>
  );
}

export default App;
