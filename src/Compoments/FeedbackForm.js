import React, { useState } from 'react';
import './FeedbackForm.css';

const StudentFeedbackForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you want to submit both student name and feedback
    onSubmit({ studentName, feedback });
    setStudentName('');
    setFeedback('');
    // Hiển thị thông báo thành công sử dụng alert
    alert('Phản hồi của sinh viên đã được gửi thành công!');
  };

  return (
    <form onSubmit={handleSubmit} className="FeedbackForm">
      <label>
        Họ và Tên Sinh Viên:
        <input type="text" value={studentName} onChange={handleStudentNameChange} />
      </label>
      <label>
        Phản Hồi:
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </label>
      <button type="submit">Gửi Phản Hồi</button>
    </form>
  );
};

export default StudentFeedbackForm;
