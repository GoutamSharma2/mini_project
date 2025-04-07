import React from "react";
import Login from "./Login.jsx";
import './HNavbar.css';

const HNavbar = () => {
    return(
        <nav class="navbar">
  <div class="navbar-brand">PestiGuide</div>
  <ul class="navbar-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Environmental Impact</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="navbar-buttons">
    <a href="#" class="btn login">Login</a>
    <a href="#" class="btn signup">Sign Up</a>
  </div>
</nav>
    );
};


export default HNavbar;