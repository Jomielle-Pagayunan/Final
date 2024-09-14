import React, { useState } from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // State to track user role

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
    setUserRole(null); // Reset role when closing modal
  };

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign up as:', userRole);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Tnf Event Center</h1>
        <nav>
          <ul className="nav-links">
            <li><button className="nav-button" onClick={() => onNavigate('home')}>Home</button></li>
            <li><button className="nav-button" onClick={() => onNavigate('about')}>About</button></li>
            <li><button className="nav-button" onClick={() => onNavigate('contact')}>Contact Us</button></li>
            <li><button className="nav-button" onClick={openSignUpModal}>Sign Up</button></li>
          </ul>
        </nav>
      </div>

      {isSignUpOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeSignUpModal}>×</button>
            <div className="modal-inner-content">
              {userRole === null ? (
                <div className="role-selection">
                  <h2>Select Your Role</h2>
                  <div className="role-buttons">
                    <button onClick={() => handleRoleSelection('customer')} className="role-button">Customer</button>
                    <button onClick={() => handleRoleSelection('admin')} className="role-button">Admin</button>
                  </div>
                </div>
              ) : (
                <div className="signup-container">
                  <div className="signup-form">
                    <h2>Sign Up as {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</h2>
                    <p>Register now to get updates and special offers.</p>
                    <form onSubmit={handleSignUpSubmit}>
                      <label htmlFor="signup-name">Name:</label>
                      <input type="text" id="signup-name" name="signup-name" required />
                      
                      <label htmlFor="signup-email">Email:</label>
                      <input type="email" id="signup-email" name="signup-email" required />
                      
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
                  <div className="signup-image">
                  <img src={`${process.env.PUBLIC_URL}/assets/tnf.png`} alt="Event" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
