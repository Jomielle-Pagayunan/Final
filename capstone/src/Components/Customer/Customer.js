// CustomerForm.js
import React from 'react';

const CustomerForm = () => {
  return (
    <div>
      <h2>Customer Registration Form</h2>
      <form>
        {/* Customer registration form fields */}
        <label htmlFor="customer-name">Name:</label>
        <input type="text" id="customer-name" name="customer-name" required />

        <label htmlFor="customer-email">Email:</label>
        <input type="email" id="customer-email" name="customer-email" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerForm;
