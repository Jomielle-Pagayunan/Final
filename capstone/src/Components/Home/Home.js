// src/components/Home/Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <section id="home" className="home"> {/* This ID should match href in Header */}
      <div className="container">
        <h2>Welcome to TNF Event Center</h2>
        <p>
          Discover the perfect venue for your special events at TNF Event Center. Whether it's a wedding, corporate meeting, or celebration, we offer a beautiful space tailored to your needs.
        </p>
        
        {/* Add three equal boxes */}
        <div className="box-container">
          <div className="box">
            <h3>Box 1</h3>
            <p>This is some random text inside Box 1.</p>
          </div>
          <div className="box">
            <h3>Box 2</h3>
            <p>This is some random text inside Box 2.</p>
          </div>
          <div className="box">
            <h3>Box 3</h3>
            <p>This is some random text inside Box 3.</p>
          </div>
        </div>

        {/* Random text below the boxes */}
        <p className="random-text">
          Here is some additional random text below the boxes. It provides more information or details about the services we offer or other relevant content.
        </p>
      </div>
    </section>
  );
};

export default Home;
