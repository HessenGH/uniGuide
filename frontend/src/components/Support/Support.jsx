import React from 'react';
import './support.css'; 

class SupportComponent extends React.Component {
  render() {
    return (
      <div className="support">
        <h2>Contact Support</h2>
        <p>If you have any questions or need assistance, feel free to contact us:</p>

        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SupportComponent;
