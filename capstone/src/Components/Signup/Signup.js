// src/Components/Signup/SignUp.js
import React from 'react';
import './SignUp.css'; // Ensure the path is correct

const SignUp = ({ onSignupSuccess }) => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Simulate signup logic here
    // After successful signup, call the success callback
    onSignupSuccess();
  };

  return (
    <div className="signup-modal-content">
      <h2>Sign Up</h2>
      <p>Register now to get updates and special offers.</p>
      <form onSubmit={handleSignUpSubmit}>
        <label htmlFor="signup-name">Name:</label>
        <input type="text" id="signup-name" name="signup-name" required />
        
        <label htmlFor="signup-email">Email:</label>
        <input type="email" id="signup-email" name="signup-email" required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
