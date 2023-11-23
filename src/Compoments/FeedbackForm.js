import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback('');
    // Hiển thị thông báo thành công sử dụng alert
    alert('Phản hồi đã được gửi thành công!');
  };

  return (
    <form onSubmit={handleSubmit} className="FeedbackForm">
      <label>
        Phản Hồi:
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </label>
      <button type="submit">Gửi Phản Hồi</button>
    </form>
  );
};

export default FeedbackForm;
