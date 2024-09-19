// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import BookingForm from './Components/BookingForm/BookingForm';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminNavVisible, setIsAdminNavVisible] = useState(false);

  const handleAdminClick = () => {
    setIsAdminNavVisible(true);
    setCurrentPage('admin');
  };

  const handleHomeClick = () => {
    setIsAdminNavVisible(false);
    setCurrentPage('home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Home />
          </>
        );
      case 'about':
        return <About />;
      case 'booking':
        return <BookingForm />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header 
        setCurrentPage={setCurrentPage} 
        isAdminNavVisible={isAdminNavVisible}
        handleAdminClick={handleAdminClick}
        handleHomeClick={handleHomeClick}
      />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
