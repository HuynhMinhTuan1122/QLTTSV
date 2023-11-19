// BusinessManager.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BusinessManager.css';

const BusinessManager = () => {
  const [businesses, setBusinesses] = useState([]);
  const [newBusiness, setNewBusiness] = useState({
    id: uuidv4(), // Khởi tạo ID ngẫu nhiên khi tạo mới doanh nghiệp
    name: '',
    industry: '',
    address: '',
    phoneNumber: ''
  });
  const [editingBusiness, setEditingBusiness] = useState(null);

  const handleAddBusiness = () => {
    const isNameValid = newBusiness.name.trim() !== '';
    const isIndustryValid = newBusiness.industry.trim() !== '';
    const isAddressValid = newBusiness.address.trim() !== '';
    const isPhoneNumberValid = /^\d+$/.test(newBusiness.phoneNumber.trim());

    if (isNameValid && isIndustryValid && isAddressValid && isPhoneNumberValid) {
      setBusinesses([...businesses, newBusiness]);
      setNewBusiness({
        id: uuidv4(), 
        name: '',
        industry: '',
        address: '',
        phoneNumber: ''
      });
    } else {
      let errorMessage = 'Vui lòng kiểm tra lại thông tin sau:\n';
      if (!isNameValid) errorMessage += '- Tên doanh nghiệp không được để trống.\n';
      if (!isIndustryValid) errorMessage += '- Ngành nghề không được để trống.\n';
      if (!isAddressValid) errorMessage += '- Địa chỉ không được để trống.\n';
      if (!isPhoneNumberValid) errorMessage += '- Số điện thoại phải là số.\n';

      alert(errorMessage);
    }
  };

  const handleEditBusiness = (index) => {
    setEditingBusiness(index);
  };

  const handleUpdateBusiness = (index, updatedBusiness) => {
    const updatedBusinesses = [...businesses];
    updatedBusinesses[index] = updatedBusiness;
    setBusinesses(updatedBusinesses);
    setEditingBusiness(null);
  };

  const handleDeleteBusiness = (index) => {
    const updatedBusinesses = [...businesses];
    updatedBusinesses.splice(index, 1);
    setBusinesses(updatedBusinesses);
  };

  return (
    <div className="business-manager">
      <h2>QUẢN LÝ DOANH NGHIỆP</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên doanh nghiệp</th>
            <th>Ngành nghề</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business, index) => (
            <tr key={business.id}>
              <td>{business.id}</td>
              <td>
                {index === editingBusiness ? (
                  <input
                    type="text"
                    value={business.name}
                    onChange={(e) => handleUpdateBusiness(index, { ...business, name: e.target.value })}
                  />
                ) : (
                  business.name
                )}
              </td>
              <td>
                {index === editingBusiness ? (
                  <input
                    type="text"
                    value={business.industry}
                    onChange={(e) => handleUpdateBusiness(index, { ...business, industry: e.target.value })}
                  />
                ) : (
                  business.industry
                )}
              </td>
              <td>
                {index === editingBusiness ? (
                  <input
                    type="text"
                    value={business.address}
                    onChange={(e) => handleUpdateBusiness(index, { ...business, address: e.target.value })}
                  />
                ) : (
                  business.address
                )}
              </td>
              <td>
                {index === editingBusiness ? (
                  <input
                    type="text"
                    value={business.phoneNumber}
                    onChange={(e) => handleUpdateBusiness(index, { ...business, phoneNumber: e.target.value })}
                  />
                ) : (
                  business.phoneNumber
                )}
              </td>
              <td>
                {index === editingBusiness ? (
                  <>
                    <button onClick={() => handleUpdateBusiness(index, business)}>Lưu</button>
                    <button onClick={() => setEditingBusiness(null)}>Hủy</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditBusiness(index)}>Sửa</button>
                    <button onClick={() => handleDeleteBusiness(index)}>Xóa</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-business-form">
        <h3>Thêm doanh nghiệp mới</h3>
        <input
          type="text"
          placeholder="Tên doanh nghiệp"
          value={newBusiness.name}
          onChange={(e) => setNewBusiness({ ...newBusiness, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ngành nghề"
          value={newBusiness.industry}
          onChange={(e) => setNewBusiness({ ...newBusiness, industry: e.target.value })}
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          value={newBusiness.address}
          onChange={(e) => setNewBusiness({ ...newBusiness, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={newBusiness.phoneNumber}
          onChange={(e) => setNewBusiness({ ...newBusiness, phoneNumber: e.target.value })}
        />
        <button onClick={handleAddBusiness}>Thêm</button>
      </div>
    </div>
  );
};

export default BusinessManager;
