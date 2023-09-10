import React from 'react';
import './Footer.css'; // Create a CSS file for your footer styles

function Footer() {
  return (
    <footer className="footer">
        
      <p>&copy; {new Date().getFullYear()} Nitin Singh</p>
    </footer>
  );
}

export default Footer;
