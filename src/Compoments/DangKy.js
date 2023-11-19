import React, { useState } from 'react';
import './DangKy.css'; // Import your CSS file

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
  };

  return (
    <div className="form">
      <h2>ĐĂNG KÝ</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <input type="text" name="hoTen" placeholder="Họ và Tên" required />
        <input type="date" name="ngaySinh" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="soDienThoai" placeholder="Số Điện Thoại" required />
        {/* Uncomment the next line if you want to include the "Tên Trường" input */}
        {/* <input type="text" name="tenTruong" placeholder="Tên Trường" required /> */}
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="Mật Khẩu"
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Xác Nhận Lại Mật Khẩu"
          required
        />
        <span className="show-password" id="showPassword" onClick={togglePasswordVisibility}>
          <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} id="eyeIcon"></i>
        </span>

        <button className="btnn" type="submit">
          Đăng Ký
        </button>
      </form>
      <p className="link">
        Đã có tài khoản? <a href="/login">Đăng nhập</a> ở đây
      </p>
    </div>
  );
}

export default Register;
