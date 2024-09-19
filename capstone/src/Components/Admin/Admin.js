import React, { useState } from 'react';
import './Admin.css'; 

const Admin = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('Dashboard'); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return (
          <section id="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard! Here you can see an overview of your system.</p>
          </section>
        );
      case 'Calendar':
        return (
          <section id="calendar">
            <h2>Calendar</h2>
            <p>View and manage events on the calendar.</p>
          </section>
        );
      case 'Events':
        return (
          <section id="events">
            <h2>Events</h2>
            <p>Here you can create, update, or delete events.</p>
          </section>
        );
      case 'Emails':
        return (
          <section id="emails">
            <h2>Emails</h2>
            <p>Manage email communications and templates.</p>
          </section>
        );
      case 'Supplies':
        return (
          <section id="supplies">
            <h2>Supplies</h2>
            <p>Track and manage event supplies and inventory.</p>
          </section>
        );
      case 'GuestLists':
        return (
          <section id="guest-lists">
            <h2>Guest Lists</h2>
            <p>Manage guest lists and RSVPs for events.</p>
          </section>
        );
      case 'QrCodeGenerator':
        return (
          <section id="qr-code-generator">
            <h2>QR Code Generator</h2>
            <p>Create and manage QR codes for events.</p>
          </section>
        );
      case 'Settings':
        return (
          <section id="settings">
            <h2>Settings</h2>
            <p>Configure your admin account settings here.</p>
          </section>
        );
      default:
        return <p>Please select an option from the menu.</p>;
    }
  };

  return (
    <div className="admin-container">
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? '✖' : '☰'}
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isNavOpen ? 'open' : 'closed'}`}>
        <nav>
          <button onClick={() => setActiveSection('Dashboard')}>Dashboard</button>
          <button onClick={() => setActiveSection('Calendar')}>Calendar</button>
          <button onClick={() => setActiveSection('Events')}>Events</button>
          <button onClick={() => setActiveSection('Emails')}>Emails</button>
          <button onClick={() => setActiveSection('Supplies')}>Supplies</button>
          <button onClick={() => setActiveSection('GuestLists')}>Guest Lists</button>
          <button onClick={() => setActiveSection('QrCodeGenerator')}>QR Code Generator</button>
          <button onClick={() => setActiveSection('Settings')}>Settings</button>
        </nav>
      </div>

      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
