import React, { useState } from 'react';
import './DangNhap.css'; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'example@email.com' && password === 'password') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.');
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(!showForgotPasswordModal);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setShowForgotPasswordModal(false);
    alert(`Yêu cầu đặt lại mật khẩu đã được gửi đến ${forgotPasswordEmail}`);
  };

  return (
    <div className="form">
      <h2>ĐĂNG NHẬP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Nhập Mật Khẩu"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="show-password-button"
            onClick={togglePasswordVisibility}
          >
            <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </div>
        <button className="btnn" type="submit">
          Đăng Nhập
        </button>
      </form>
      <button className="forgot-password-button" onClick={handleForgotPassword}>
        Quên mật khẩu?
      </button>

      {showForgotPasswordModal && (
        <div className="forgot-password-modal">
          <h2>Quên mật khẩu</h2>
          <form onSubmit={handleForgotPasswordSubmit}>
            <input
              type="email"
              name="forgotPasswordEmail"
              placeholder="Nhập Email"
              required
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
            />
            <button type="submit">Gửi yêu cầu đặt lại mật khẩu</button>
          </form>
        </div>
      )}

      <p className="link">
        Chưa có tài khoản? <a href="/register">Đăng ký</a> ở đây
      </p>
    </div>
  );
}

export default Login;
