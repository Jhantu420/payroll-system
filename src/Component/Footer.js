import React, { useState } from "react";
import "./Footer.css";
import axios from "axios"; // Import axios library

const Footer = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send feedback data to the backend
      await axios.post("http://localhost:7000/submitFeedback",  {
        email: userEmail,
        message: userMessage,
      });

      // Clear the input fields after successful submission
      setUserEmail("");
      setUserMessage("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      alert("Error submitting feedback:", error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet fringilla interdum.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links">
            <li><a href="#">Phone: +1234567890</a></li>
            <li><a href="#">Email: info@example.com</a></li>
            <li><a href="#">Address: 123 Main Street, City, Country</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Send Us Your Feedback</h3>
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">&copy; 2023 Payrole. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
