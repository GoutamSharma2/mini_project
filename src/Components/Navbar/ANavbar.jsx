import React from "react";
import './ANavbar.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ANavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/auth/signout");
      localStorage.removeItem("token");
      navigate("/", { state: { forceRefresh: true } });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="Anavbar">
      <button
        className="Anavbar-brand"
        onClick={() => {
          navigate("/");
        }}
      >
        PestiGuide
      </button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default ANavbar;