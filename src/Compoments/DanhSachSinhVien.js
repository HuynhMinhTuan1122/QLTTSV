import React, { useState } from 'react';
import SinhVien from './SinhVien';
import BaoCaoTienTrinh from './BaoCaoTienTrinh';
import './DanhSachSinhVien.css';

const studentsData = [
  { id: 1, mssv: '20012005556', name: 'Nguyen Van A', internship: 'Company X', progress: 'Đang thực tập' },
  { id: 2, mssv: '20012002555', name: 'Tran Thi B', internship: 'Company Y', progress: 'Đang thực tập' },
  { id: 3, mssv: '20012003557', name: 'Le Van C', internship: 'Company Z', progress: 'Đang thực tập' },
  { id: 4, mssv: '20012004558', name: 'Pham Thi D', internship: 'Company W', progress: 'Đang thực tập' },
  { id: 5, mssv: '20012005559', name: 'Vo Van E', internship: 'Company V', progress: 'Đang thực tập' },
  { id: 6, mssv: '20012006560', name: 'Hoang Thi F', internship: 'Company U', progress: 'Đang thực tập' },
  { id: 7, mssv: '20012007561', name: 'Do Van G', internship: 'Company T', progress: 'Đang thực tập' },
  { id: 8, mssv: '20012008562', name: 'Truong Van H', internship: 'Company S', progress: 'Đang thực tập' },
];


const DanhSachSinhVien = () => {
  const [students, setStudents] = useState(studentsData);

  const handleUpdateProgress = (id, weeklyReport) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, progress: 'Hoàn thành', weeklyReport };
      }
      return student;
    });

    setStudents(updatedStudents);
  };

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
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <React.Fragment key={student.id}>
              <tr>
                <td>{student.id}</td>
                <td>{student.mssv}</td>
                <td>{student.name}</td>
                <td>{student.internship}</td>
                <td>
                  <BaoCaoTienTrinh student={student} onUpdateProgress={handleUpdateProgress} />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DanhSachSinhVien;
