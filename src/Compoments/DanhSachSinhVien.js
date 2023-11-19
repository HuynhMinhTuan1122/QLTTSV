// DanhSachSinhVien.js
import React from 'react';
import SinhVien from './SinhVien';
import './DanhSachSinhVien.css';

const studentsData = [
  { id: 1, mssv: '20012005556', name: 'Nguyen Van A', internship: 'Company X' },
  { id: 2, mssv: '20012002555', name: 'Tran Thi B', internship: 'Company Y' },
  // Thêm thông tin sinh viên khác nếu cần
];

const DanhSachSinhVien = () => {
  return (
    <div>
      <h2>Danh Sách Sinh Viên</h2>
      <table className="danh-sach-sinh-vien">
        <thead>
          <tr>
            <th>ID</th>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Quá trình thực tập</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <SinhVien key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DanhSachSinhVien;
