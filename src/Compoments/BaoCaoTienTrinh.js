import React, { useState } from 'react';
import './BaoCaoTienTrinh.css';
const BaoCaoTienTrinh = ({ student, onUpdateProgress }) => {
  const [weeklyReport, setWeeklyReport] = useState('');

  const handleReportChange = (e) => {
    setWeeklyReport(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProgress(student.id, weeklyReport);
    console.log(`Báo cáo hàng tuần của ${student.name}: ${weeklyReport}`);
  };

  return (
    <tr>
      <td colSpan="4">
        <form onSubmit={handleSubmit}>
          <label>
            Báo cáo hàng tuần:
            <textarea value={weeklyReport} onChange={handleReportChange} />
          </label>
          <button type="submit">Cập nhật tiến trình</button>
        </form>
      </td>
    </tr>
  );
};

export default BaoCaoTienTrinh;
