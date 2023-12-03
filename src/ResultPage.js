import React, { useState } from 'react';
import './ResultPage.css';


const ResultPage = () => {
  const [internshipResults, setInternshipResults] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (isValidStudentId(studentId)) {
      // Giả định dữ liệu mẫu cho hai sinh viên
      const sampleData = [
        { studentId: '2001200216', studentName: 'John Doe', score: 8.5, comment: 'Good performance' },
        { studentId: '2001200218', studentName: 'Jane Doe', score: 9.2, comment: 'Excellent work' }
      ];

      const selectedStudent = sampleData.find(student => student.studentId === studentId);

      if (selectedStudent) {
        setInternshipResults([selectedStudent]);
        setError('');
      } else {
        setError('Không tìm thấy sinh viên');
      }
    } else {
      setError('Mã số sinh viên không hợp lệ');
    }
  };
  const isValidStudentId = (studentId) => {
    return studentId.length === 10 && /^\d+$/.test(studentId);
  };

  return (
    <div>
      <h2>KẾT QUẢ THỰC TẬP</h2>
      <div className="search-container">
        <div className="label-input-container">
            <label>Mã Số Sinh Viên:</label>
            <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            />
        </div>
        <button onClick={handleSearch}>Tìm kiếm</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

      {internshipResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Sinh viên</th>
              <th>Điểm</th>
              <th>Nhận xét</th>
            </tr>
          </thead>
          <tbody>
            {internshipResults.map((result, index) => (
              <tr key={index}>
                <td>{result.studentName}</td>
                <td>{result.score}</td>
                <td>{result.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultPage;
