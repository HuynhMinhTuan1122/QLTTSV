import React from 'react';
import './DisplayInternshipResult.css';

const DisplayInternshipResult = ({ results }) => {
  return (
    <div className="DisplayInternshipResult">
      <h2>Kết Quả Thực Tập</h2>
      {results.map((result, index) => (
        <div key={index} className="result">
          <p>
            <strong>Họ và Tên Sinh Viên:</strong> {result.studentName}
          </p>
          <p>
            <strong>Tên Công Ty:</strong> {result.companyName}
          </p>
          <p>
            <strong>Thời Gian Thực Tập:</strong> {result.internshipDuration}
          </p>
          <p>
            <strong>Phản Hồi về Kết Quả Thực Tập:</strong> {result.feedback}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayInternshipResult;
