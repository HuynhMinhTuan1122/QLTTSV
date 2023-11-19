import React from 'react';
import './TrangChu.css'; 
function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">HUIT</h2>
        </div>

        <div className="menu">
          <ul>
            <li><a href="/home">TRANG CHỦ</a></li>
            <li className="dropdown">
              <a href="#">SINH VIÊN</a>
              <ul className="submenu">
                <li><a href="/students">Danh Sách Sinh Viên</a></li>
                <li><a href="/internship_results">Kết quả thực tập</a></li>
                <li><a href="#">Đánh giá doanh nghiệp</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">DOANH NGHIỆP</a>
              <ul className="submenu">
                <li><a href="/business">Danh sách doanh nghiệp</a></li>
                <li><a href="/internship">Đăng ký thực tập</a></li>
                <li><a href="/student_management">Quản lý sinh viên </a></li>

              </ul>
            </li>
            <li><a href="/contact">LIÊN HỆ</a></li>
          </ul>
        </div>

        <div className="search">
          <input className="srch" type="search" name="" placeholder="Tìm kiếm" />
          <a href="#"><button className="btn">Tìm Kiếm</button></a>
        </div>
        <div className="user-actions">
          <a href="/login" className="user-link">Đăng Nhập</a>
          <a href="/register" className="user-link">Đăng Ký</a>
        </div>
      </div>
      <div className="content">
        <h1>Quản Lý <br /><span>Thực Tập Sinh Viên</span> <br />HUIT</h1>
        <p className="par">Hệ thống quản lý thực tập sinh viên (HQTTSV) là một phần mềm hoặc ứng dụng
          được thiết kế để quản lý quá trình thực tập của sinh viên trong các tổ chức, doanh nghiệp hoặc trường học.
          <br /> HQTTSV giúp tổ chức quản lý thông tin của sinh viên thực tập, theo dõi tiến trình thực tập, lên kế hoạch
          <br /> và thực hiện các hoạt động quản lý liên quan đến thực tập sinh viên một cách hiệu quả</p>
      </div>
    </div>
  );
}
export default Home;