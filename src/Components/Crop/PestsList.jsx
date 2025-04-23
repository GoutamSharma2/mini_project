import React, { useEffect, useState } from "react";
import ANavbar from "../Navbar/ANavbar";
import "./PestsList.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import img1 from '../../assets/FRAME1.png';
import img2 from '../../assets/FRAME2.png';
import img3 from '../../assets/FRAME3.png';

// const pestimages = [
//   Mancozeb: img1,
//   img2,
//   img3
// ];

const Card = ({ item,onClick,pestimages }) => (
  <div className="card" onClick={() => onClick(item)}>
    <img 
      src={item.imageUrl || '/default-pesticide.jpg'} 
      alt={item.Name} 
      className="card-img" 
    />
    {/* <img
      src={pestimages[item.Name]}
      alt={item.Name}
      className="card-img"
                /> */}
    <div className="card-content">
      <h3 className="card-title">{item.Name}</h3>
      <p className="card-desc">
        <strong>Active Ingredients:</strong> {item["Active Ingredients"]}
      </p>
      <p className="card-method">
        <strong>Application:</strong> {item["Application Method"]}
      </p>
    </div>
  </div>
);

export default function PestsList() {
  const [pests, setPests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPesticide, setSelectedPesticide] = useState(null);
  const [pesticideDetail, setPesticideDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const cropName = new URLSearchParams(location.search).get('crop');

  useEffect(() => {
    const fetchPests = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/pests?crop=${encodeURIComponent(cropName)}`
            );
            setPests(response.data);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Failed to fetch pests");
        } finally {
            setLoading(false);
        }
    };

    if (cropName) fetchPests();
}, [cropName]);

useEffect(() => {
  const fetchPesticideDetails = async () => {
    if (!selectedPesticide) return;
    
    try {
      setDetailLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/pesticides/${selectedPesticide._id}`
      );
      setPesticideDetail(response.data);
      setDetailError(null);
      navigate(`/pesticide/${selectedPesticide._id}`);
    } catch (err) {
      setDetailError(err.response?.data?.message || err.message || "Failed to fetch pesticide details");
    } finally {
      setDetailLoading(false);
    }
  };

  fetchPesticideDetails();
}, [selectedPesticide, navigate]); 

const handleCardClick = (pesticide) => {
  setSelectedPesticide(pesticide);
};
  if (!cropName) return <div className="error">No crop specified</div>;
  if (loading) return <div className="loading">Loading pests for {cropName}...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <ANavbar/> 
      <div className="container"> 
        <h1 className="main-title">Pesticides For - {cropName}</h1> 
        <p className="subtitle">Comprehensive guide for pest control and growth management</p>

        <div className="section">
          <h2 className="section-title">Pest Management</h2>
          {pests.length > 0 ? (
            <>
              <div className="card-grid">
                {pests.map((pest, index) => (
                  <Card key={index} item={pest} onClick={handleCardClick} />
                ))}
              </div>
            </>
          ) : (
            <p className="no-results">No pesticides found for this crop</p>
          )}
        </div>
      </div>
    </div>
  );
}