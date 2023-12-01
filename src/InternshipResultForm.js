// InternshipResultForm.js
import React, { useState } from 'react';
import './InternshipResultForm.css';

const InternshipResultForm = ({ onSubmit }) => {
  const [student1, setStudent1] = useState({ studentName: '', companyName: '', internshipDuration: '', feedback: '' });
  const [student2, setStudent2] = useState({ studentName: '', companyName: '', internshipDuration: '', feedback: '' });

  const handleInputChange = (e, student) => {
    const { name, value } = e.target;
    if (student === 1) {
      setStudent1({ ...student1, [name]: value });
    } else {
      setStudent2({ ...student2, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ student1, student2 });
  };

  return (
    <form onSubmit={handleSubmit} className="InternshipResultForm">
      <div className="student-form">
        <h3>Thông Tin Sinh Viên 1</h3>
        <label>
          Họ và Tên Sinh Viên:
          <input type="text" name="studentName" value={student1.studentName} onChange={(e) => handleInputChange(e, 1)} />
        </label>
        <label>
          Tên Công Ty:
          <input type="text" name="companyName" value={student1.companyName} onChange={(e) => handleInputChange(e, 1)} />
        </label>
        <label>
          Thời Gian Thực Tập:
          <input type="text" name="internshipDuration" value={student1.internshipDuration} onChange={(e) => handleInputChange(e, 1)} />
        </label>
        <label>
          Phản Hồi:
          <textarea name="feedback" value={student1.feedback} onChange={(e) => handleInputChange(e, 1)} />
        </label>
      </div>

      <div className="student-form">
        <h3>Thông Tin Sinh Viên 2</h3>
        <label>
          Họ và Tên Sinh Viên:
          <input type="text" name="studentName" value={student2.studentName} onChange={(e) => handleInputChange(e, 2)} />
        </label>
        <label>
          Tên Công Ty:
          <input type="text" name="companyName" value={student2.companyName} onChange={(e) => handleInputChange(e, 2)} />
        </label>
        <label>
          Thời Gian Thực Tập:
          <input type="text" name="internshipDuration" value={student2.internshipDuration} onChange={(e) => handleInputChange(e, 2)} />
        </label>
        <label>
          Phản Hồi:
          <textarea name="feedback" value={student2.feedback} onChange={(e) => handleInputChange(e, 2)} />
        </label>
      </div>

      <button type="submit">Gửi Kết Quả Thực Tập</button>
    </form>
  );
};

export default InternshipResultForm;
