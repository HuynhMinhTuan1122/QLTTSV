// SinhVien.js
import React from 'react';

const SinhVien = ({ student }) => {
  const { id, mssv, name, internship } = student;

  return (
    <tr>
      <td>{id}</td>
      <td>{mssv}</td>
      <td>{name}</td>
      <td>{internship}</td>
    </tr>
  );
};

export default SinhVien;
