

import React, { useState } from 'react';

const Contact = () => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Do something with the form data, e.g., send it to a server
    console.log('Submitted:', { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
