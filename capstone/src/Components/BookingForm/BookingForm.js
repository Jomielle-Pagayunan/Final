// src/Components/BookingForm/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'; // Import the corresponding CSS file

const BookingForm = () => {
  const [eventType, setEventType] = useState(''); // State to store the selected option

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  return (
    <div className="booking-form-container">
      <h1>Book Your Event</h1>
      <form className="booking-form">
        {/* Event Type (Radio Buttons) */}
        <div className="radio-group">
          <label>Event Type</label>
          <div className="radio-options">
            <label htmlFor="catering">
              <input
                type="radio"
                id="catering"
                name="eventType"
                value="catering"
                checked={eventType === 'catering'}
                onChange={handleEventTypeChange}
                required
              />
              Catering
            </label>
            <label htmlFor="event-center">
              <input
                type="radio"
                id="event-center"
                name="eventType"
                value="event-center"
                checked={eventType === 'event-center'}
                onChange={handleEventTypeChange}
                required
              />
              Event Center
            </label>
          </div>
        </div>

        {/* Event Name */}
        <label htmlFor="eventName">Event Name</label>
        <input type="text" id="eventName" name="eventName" placeholder="Event Name" required />

        {/* Event Date */}
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="text"
          id="eventDate"
          name="eventDate"
          placeholder="DD-MM-YYYY"
          required
          // Add any date validation or formatting here if needed
        />

        {/* Event Location */}
        <label htmlFor="eventLocation">Event Location</label>
        <input type="text" id="eventLocation" name="eventLocation" placeholder="Event Location" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
