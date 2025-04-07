import React from "react";
import Login from "./Login.jsx";
import './HNavbar.css';

const HNavbar = () => {
    return(
        <div className='outer'>
            <h2>PestiGuide</h2>
            <div className='d1'>
                <p>Home</p>
                <p>Environmental Impact</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='d2'>
                <button id='login' >Login</button>
                <button id='signup'>SignUp</button>
            </div>
        </div>
    );
};


export default HNavbar;