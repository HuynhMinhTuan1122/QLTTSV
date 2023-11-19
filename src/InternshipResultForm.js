// InternshipResultForm.js
import React, { useState } from 'react';
import './InternshipResultForm.css';

const InternshipResultForm = ({ internshipResults }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedResult, setSearchedResult] = useState(null);

  const searchResult = () => {
    const studentId = searchInput.trim();

    const validStudentId = /^\d+$/.test(studentId);

    if (!validStudentId) {
      setSearchedResult({ error: 'Mã số sinh viên không hợp lệ. Vui lòng nhập số.' });
      return;
    }

    const result = internshipResults.find((item) => item.studentId === studentId);

    setSearchedResult(result ? { data: result } : { error: 'Không tìm thấy kết quả thực tập.' });
  };

  return (
    <div className="internship-result-form">
      <h1>Kết Quả Thực Tập Sinh Viên</h1>
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          placeholder="Nhập Mã SV..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchResult}>Tìm Kiếm</button>
      </div>
      <div id="resultContainer">
        {searchedResult && (
          <div className={searchedResult.error ? 'error-message' : 'result-item'}>
            {searchedResult.error ? (
              <p style={{ color: 'red' }}>{searchedResult.error}</p>
            ) : (
              <>
                <p><strong>Mã số sinh viên:</strong> {searchedResult.data.studentId}</p>
                <p><strong>Họ và tên sinh viên:</strong> {searchedResult.data.studentName}</p>
                <p><strong>Kết quả:</strong> {searchedResult.data.result}</p>
                <p><strong>Ghi chú:</strong> {searchedResult.data.note}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipResultForm;
