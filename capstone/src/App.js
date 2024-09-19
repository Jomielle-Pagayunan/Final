// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/Signup/Signup';
import Login from './Components/Signup/Login'; // Import the Login component

import './App.css';

const App = () => {
  // State to track the currently visible section
  const [visibleSection, setVisibleSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showLogin, setShowLogin] = useState(false); // State to control login display

  // Function to handle navigation
  const handleNavigation = (section) => {
    setVisibleSection(section);
  };

  // Function to handle signup success
  const handleSignupSuccess = () => {
    setShowLogin(true); // Show login after signup
  };

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set user as logged in
    setVisibleSection('home'); // Navigate to the home page after login
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      <Hero />
      <main>
        {isLoggedIn ? (
          // Show home, about, or contact if logged in
          <>
            {visibleSection === 'home' && <Home />}
            {visibleSection === 'about' && <About />}
            {visibleSection === 'contact' && <Contact />}
          </>
        ) : (
          // Show login or signup based on state
          <>
            {showLogin ? (
              <Login onLogin={handleLoginSuccess} />
            ) : (
              <SignUp onSignupSuccess={handleSignupSuccess} />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
