import React from 'react';
import { Link } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';
const AdminSidebar = () => {
  return (
    <div className="bg-light p-3" style={{ minHeight: '100vh' }}>
      <h4>Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/AdminDashboard">Dashboard</Link>
        </li>
        {/* Add more links if needed */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
