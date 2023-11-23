import React, { useState } from 'react';
import './FormTaiLieu.css';

const FormTaiLieu = ({ onUpload }) => {
  const [tenTaiLieu, setTenTaiLieu] = useState('');
  const [file, setFile] = useState(null);

  const handleTenTaiLieuChange = (e) => {
    setTenTaiLieu(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tenTaiLieu && file) {
      const taiLieu = {
        tenTaiLieu,
        file,
      };
      onUpload(taiLieu);
      setTenTaiLieu('');
      setFile(null);
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('printableContent');
    if (printContent) {
      const originalDisplayStyle = printContent.style.display;
      printContent.style.display = 'block';
      window.print();
      printContent.style.display = originalDisplayStyle;
    } else {
      console.error('Không tìm thấy nội dung để in.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="FormTaiLieu">
      <div>
        <label>
          Tên Tài Liệu:
          <input type="text" value={tenTaiLieu} onChange={handleTenTaiLieuChange} />
        </label>
        <label>
          Chọn Tài Liệu:
          <input type="file" onChange={handleFileChange} />
        </label>
      </div>
      <div className="buttons-container">
        <button type="submit">Tải Lên</button>
        <button type="button" onClick={handlePrint}>In</button>
      </div>
      <div id="printableContent" style={{ display: 'none' }}>
        <p>Tên Tài Liệu: {tenTaiLieu}</p>
      </div>
    </form>
  );
};

export default FormTaiLieu;
