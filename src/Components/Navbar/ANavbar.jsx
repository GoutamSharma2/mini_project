import React from "react";

import './ANavbar.css';

const ANavbar = () => {
    return(
        <nav class="Anavbar">
        <div class="Anavbar-brand">PestiGuide</div>
        <ul class="Anavbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Environmental Impact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
};


export default ANavbar;