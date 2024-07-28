import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css'; 

const AdminNavbar = () => {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };


  return (
    <nav className="admin-navbar">

      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/manage-garages">Manage Garages</Link>
        </li>
        <li>
          <Link to="/admin/manage-roles">Manage Roles</Link>
        </li>
      </ul>

      <ul className="right-nav">
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>

    </nav>
  );
};

export default AdminNavbar;
