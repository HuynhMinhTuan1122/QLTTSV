import React, { useState } from 'react';
import './DocumentManagementForm.css';

const DocumentManagementForm = () => {
  const [studentDocuments, setStudentDocuments] = useState([]);
  const [businessDocuments, setBusinessDocuments] = useState([]);
  const [selectedStudentDocument, setSelectedStudentDocument] = useState(null);
  const [selectedBusinessDocument, setSelectedBusinessDocument] = useState(null);

  const handleUploadDocument = (file, userType) => {
    const newDocument = {
      file,
      userType,
    };

    if (userType === 'student') {
      setStudentDocuments([...studentDocuments, newDocument]);
    } else if (userType === 'business') {
      setBusinessDocuments([...businessDocuments, newDocument]);
    }
  };

  const handleSelectDocument = (document) => {
    if (document.userType === 'student') {
      setSelectedStudentDocument(document);
      setSelectedBusinessDocument(null);
    } else if (document.userType === 'business') {
      setSelectedBusinessDocument(document);
      setSelectedStudentDocument(null);
    }
  };

  return (
    <div>
      <h2>Quản lý tài liệu mềm</h2>
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div>
        <h3>Tài liệu mềm của Sinh viên</h3>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={(e) => handleUploadDocument(e.target.files[0], 'student')}
        />
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên tài liệu</th>
            </tr>
          </thead>
          <tbody>
            {studentDocuments.map((document, index) => (
              <tr key={index} onClick={() => handleSelectDocument(document)}>
                <td>{index + 1}</td>
                <td>{document.file.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div>
        <h3>Tài liệu mềm của Doanh nghiệp</h3>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={(e) => handleUploadDocument(e.target.files[0], 'business')}
        />
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên tài liệu</th>
            </tr>
          </thead>
          <tbody>
            {businessDocuments.map((document, index) => (
              <tr key={index} onClick={() => handleSelectDocument(document)}>
                <td>{index + 1}</td>
                <td>{document.file.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <h3>Chi tiết tài liệu</h3>
        {selectedStudentDocument && (
          <div>
            <p>Tên tài liệu (Sinh viên): {selectedStudentDocument.file.name}</p>
            <p>Loại người dùng: {selectedStudentDocument.userType}</p>
          </div>
        )}
        {selectedBusinessDocument && (
          <div>
            <p>Tên tài liệu (Doanh nghiệp): {selectedBusinessDocument.file.name}</p>
            <p>Loại người dùng: {selectedBusinessDocument.userType}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentManagementForm;
