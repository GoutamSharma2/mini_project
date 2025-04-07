import React from "react";

import './ANavbar.css';

const ANavbar = () => {
    return(
        <div className='outer'>
            <h2>PestiGuide</h2>
            <div className='d1'>
                <a href="">Home</a>
                <a href="">Environmental Impact</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};


export default ANavbar;