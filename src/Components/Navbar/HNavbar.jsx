import React from "react";
import '../../Components/Navbar/HNavbar.css';

const HNavbar = () => {
    return(
        <nav className="navbar">
  <div className="navbar-brand">PestiGuide</div>
  <ul className="navbar-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Environmental Impact</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div className="navbar-buttons">
    <a href="#" className="btn login">Login</a>
    <a href="#" className="btn signup">Sign Up</a>
  </div>
</nav>
    );
};



export default HNavbar;