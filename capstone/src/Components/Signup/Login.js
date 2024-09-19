// src/Components/Login/Login.js
import React, { useState } from 'react';
import './Login.css'; // Ensure this path is correct

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
    if (email && password) {
      onLogin(); // Call onLogin to indicate successful login
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="email"
          id="login-email"
          name="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          name="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
  