import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../Components/Pesticides/Pesticides.css";
import Footer from "../Footer/Footer.jsx";
import ANavbar from "../Navbar/ANavbar.jsx";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import HNavbar from "../Navbar/HNavbar.jsx";

const Pesticides = () => {
  const { id } = useParams();
  const [pesticide, setPesticide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation();

  useEffect(() => {
    const fetchPesticide = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/pesticides/${id}`
        );
        setPesticide(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch pesticide details"
        );
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPesticide();
  }, [id,navigate, location.pathname]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/status', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Error checking auth status:", error);
      }
    };

    checkAuthStatus();
  })
  if (loading) {
    return (
      <div className="pesticide-loading">
        <ANavbar />
        <div className="loading-spinner"></div>
        <p>Loading pesticide details...</p>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pesticide-error">
        <ANavbar />
        <div className="error-message">
          <h3>Error Loading Pesticide Data</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!pesticide) {
    return (
      <div className="pesticide-not-found">
        <ANavbar />
        <div className="not-found-message">
          <h3>Pesticide Not Found</h3>
          <p>The requested pesticide could not be found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  
  if (!isLoggedIn) {
    return (
      <div className="require-login">
        <HNavbar />
        <div className="login-message">
          <h3>You Need to Be Logged In to View Pesticide Details</h3>
          <p>Please log in to access this page.</p>
          <button onClick={() => {
            navigate(`/auth/signin?redirect=${encodeURIComponent(location.pathname + location.search)}`);
          }}>Login</button>
        </div>
        <Footer />
      </div>
    );
  }
  return (
      <div>
        <ANavbar />
  
        <div className="div1">
          <h1>{pesticide.Name}</h1>
       
  
  <div className="div2">
  {[
    {
      title: "Active Ingredients",
      content: pesticide["Active Ingredients"] || pesticide.Name,
    },
    {
      title: "Application Method",
      content: pesticide["Application Method"] || "Spray",
    },
    pesticide["Target Species"] && {
      title: "Target Species",
      content: pesticide["Target Species"],
    },
  ]
    .filter(Boolean)
    .map((card, index) => (
      <div className="div2card" key={index}>
        <h4>{card.title}</h4>
        <p>{card.content}</p>
      </div>
    ))}
</div>
  
          {pesticide["Safety Precautions"]?.length > 0 && (
            <div id="div3">
              <h3>Safety Precautions</h3>
              <ul className="checklist">
                {pesticide["Safety Precautions"].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
  
  {pesticide["Environmental Impact"] ? (
  <div id="div4">
    <h3>Environmental Impact</h3>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Impact Level</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(pesticide["Environmental Impact"])
          .filter(([category]) => category !== "_id")
          .map(([category, data], index) => (
            <tr key={index}>
              <td>{category}</td>
              <td>{data.Impact_Level || "Low"}</td>
              <td>{data.Notes || "General impact may occur."}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
) : (
  <div id="div4">
    <h3>Environmental Impact</h3>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Impact Level</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Soil</td>
          <td>Low</td>
          <td>May persist in soil to varying degrees.</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>Moderate</td>
          <td>Potential for runoff and contamination.</td>
        </tr>
        <tr>
          <td>Wildlife</td>
          <td>Low</td>
          <td>May pose risks to some wildlife.</td>
        </tr>
        <tr>
          <td>Beneficial Insects</td>
          <td>Moderate</td>
          <td>Potential to affect beneficial insect populations.</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
  
          {pesticide["Usage Instructions"]?.length > 0 && (
            <div id="div5">
              <h3>Usage Instructions</h3>
              <ul className="checklist">
                {pesticide["Usage Instructions"].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
  
          <div id="div6">
            {pesticide.Advantages?.length > 0 && (
              <div className="advantages">
                <h4>Advantages</h4>
                <ul className="warning">
                  {pesticide.Advantages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {pesticide.Disadvantages?.length > 0 && (
              <div className="disadvantages">
                <h4>Disadvantages</h4>
                <ul className="safe">
                  {pesticide.Disadvantages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        < Footer/>
      </div>
    );
  };

export default Pesticides;