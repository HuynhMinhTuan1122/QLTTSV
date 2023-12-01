import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './StudentManagementForm.css';

const StudentManagementForm = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [students, setStudents] = useState([
    { id: 2001200218, name: 'Nguyễn Văn A', grade: 8.5 },
    { id: 2001200219, name: 'Trần Thị B', grade: 7.2 },
  ]);
  const [interviewList, setInterviewList] = useState([]);

  const handleStudentSelection = (studentId) => {
    const updatedStudents = selectedStudents.includes(studentId)
      ? selectedStudents.filter((id) => id !== studentId)
      : [...selectedStudents, studentId];

    setSelectedStudents(updatedStudents);
  };

  const handleExportExcel = () => {
    const data = interviewList.map((studentId) => {
      const student = students.find((s) => s.id === studentId);
      return { StudentName: student.name, StudentId: student.id, Grade: student.grade };
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'InterviewedStudents');
    XLSX.writeFile(wb, 'interviewed_students.xlsx');
  };

  const handleInterviewSelection = () => {
    setInterviewList([...selectedStudents]);
    setSelectedStudents([]);
  };

  const handleRevokeInterview = (studentId) => {
    const updatedInterviewList = interviewList.filter((id) => id !== studentId);
    setInterviewList(updatedInterviewList);
  };

  return (
    <div className="student-management-form">
      <h2>QUẢN LÝ SINH VIÊN</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tên Sinh Viên</th>
            <th>Mã Sinh Viên</th>
            <th>Điểm</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleStudentSelection(student.id)}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleExportExcel}>Xuất Excel</button>
      <button onClick={handleInterviewSelection}>Chọn Phỏng Vấn</button>
      <div className="interview-section">
  <h3>DANH SÁCH SINH VIÊN ĐƯỢC CHỌN PHỎNG VẤN</h3>
  {interviewList.length > 0 ? (
    <ul className="interview-list">
      {interviewList.map((studentId) => {
        const student = students.find((s) => s.id === studentId);
        return (
          <li key={studentId} className="interview-item">
            <div className="student-info">
              <div className="student-name">{student.name}</div>             
            </div>
            <button onClick={() => handleRevokeInterview(studentId)}>Thu Hồi</button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Chưa có sinh viên nào được chọn phỏng vấn.</p>
  )}
</div>
    </div>
  );
};

export default StudentManagementForm;
