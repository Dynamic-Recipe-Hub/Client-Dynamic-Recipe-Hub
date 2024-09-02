import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/recipes">Manage Recipes</Link></li>
        <li><Link to="/chefs">Manage Chefs</Link></li>
        <li><Link to="/users">Manage Users</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
