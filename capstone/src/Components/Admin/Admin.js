// src/Components/Admin/Admin.js
import React, { useState } from 'react';
import './Admin.css'; // Import the corresponding CSS file

const Admin = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to control the opening of the menu

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="admin-container">
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? '✖' : '☰'} {/* Toggle between open and close icons */}
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isNavOpen ? 'open' : 'closed'}`}>
        <nav>
          <button onClick={() => ('manage-events')}>Manage Events</button>
          <button onClick={() => ('manage-users')}>Manage Users</button>
          <button onClick={() => ('settings')}>Settings</button>
          <button onClick={() => ('reports')}>Reports</button>
        </nav>
      </div>

      <div className="admin-content">
        <section id="manage-events">
          <h2>Manage Events</h2>
          <p>Here you can create, update, or delete events.</p>
        </section>

        <section id="manage-users">
          <h2>Manage Users</h2>
          <p>Here you can view, add, or remove users.</p>
        </section>

        <section id="settings">
          <h2>Settings</h2>
          <p>Configure your admin account settings here.</p>
        </section>

        <section id="reports">
          <h2>Reports</h2>
          <p>View event and user activity reports here.</p>
        </section>
      </div>
    </div>
  );
};

export default Admin;
