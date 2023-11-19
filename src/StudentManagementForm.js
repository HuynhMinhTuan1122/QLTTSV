import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './StudentManagementForm.css'; 

const StudentManagementForm = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleStudentSelection = (studentId) => {
    const updatedStudents = selectedStudents.includes(studentId)
      ? selectedStudents.filter((id) => id !== studentId)
      : [...selectedStudents, studentId];

    setSelectedStudents(updatedStudents);
  };

  const handleExportExcel = () => {
    const data = selectedStudents.map((studentId) => {
      const student = students.find((s) => s.id === studentId);
      return { StudentName: student.name, StudentId: student.id, Grade: student.grade };
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SelectedStudents');
    XLSX.writeFile(wb, 'selected_students.xlsx');
  };

  return (
    <div className="student-management-form">
      <h2>QUẢN LÍ SINH VIÊN</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <input
              type="checkbox"
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleStudentSelection(student.id)}
            />
            <span>{student.name}</span> - Điểm: {student.grade}
          </li>
        ))}
      </ul>
      <button onClick={handleExportExcel}>Xuất Excel</button>
    </div>
  );
};

export default StudentManagementForm;
