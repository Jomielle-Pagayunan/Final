// src/components/About/About.js
import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <section id="about" className="about"> {/* This ID should match href in Header */}
      <div className="container">
        <h2>About Us</h2>
        <p>
          TNF Event Center is a premier venue for all types of events. Established in [Year], we have hosted numerous successful events ranging from intimate gatherings to grand celebrations. Our dedicated team ensures that every event is memorable and exceeds expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
