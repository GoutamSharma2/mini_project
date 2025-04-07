import React from "react";
import './Footer.css';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <div className="footer">
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
      <a href="">Instagram</a>
      <a href="">Twitter</a>
      <a href="">LinkedIn</a>
      <a href="">PestiGuide@gmail.com</a>
          </div>
      </div>
  );
};

export default Footer;