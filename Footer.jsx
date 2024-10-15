
import React from 'react';
import '../styles/Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>NeoSTORE</h2>
          <div className="subscription">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="column">
            <h4>Categories</h4>
            <ul>
              <li>Sofas</li>
              <li>Chairs</li>
              <li>Tables</li>
              <li>Wardrobes</li>
            </ul>
          </div>

          <div className="column">
            <h4>Customer Service</h4>
            <ul>
              <li>Contact Us</li>
              <li>Returns</li>
              <li>Order Tracking</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="column">
            <h4>Furniture</h4>
            <ul>
              <li>Living Room Furniture</li>
              <li>Bedroom Furniture</li>
              <li>Kids Furniture</li>
              <li>Office Furniture</li>
            </ul>
          </div>

          <div className="column">
            <h4>Useful Links</h4>
            <ul>
              <li>Promotions</li>
              <li>Site Map</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NeoSTORE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
