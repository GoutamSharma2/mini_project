// frontend/src/Pages/AHome.jsx
import '../../Components/Home/Ahome.css';
import bghome from '../../assets/Bg Home.jpg';
import ANavbar from "../../Components/Navbar/ANavbar";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Ahome() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [crops, setCrops] = useState([]);
  const [pesticides, setPesticides] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/crops')
      .then(response => setCrops(response.data))
      .catch(error => console.error("Error fetching crops:", error));

    axios.get('http://localhost:3000/api/pesticides')
      .then(response => setPesticides(response.data))
      .catch(error => console.error("Error fetching pesticides:", error));
  }, []);

  const handleSeasonSelect = (season) => {
    navigate(`/crops?season=${season}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    if (!trimmedSearchTerm) {
      navigate('/crops'); // Or handle empty search as needed
      return;
    }

    if (['kharif', 'rabi', 'zaid'].includes(trimmedSearchTerm)) {
      navigate(`/crops?season=${trimmedSearchTerm}`);
      return;
    }

    // Check for crop name match (case-insensitive)
    const matchedCrop = crops.find(crop => crop.Name && crop.Name.toLowerCase() === trimmedSearchTerm);
    if (matchedCrop) {
      navigate(`/pests?crop=${encodeURIComponent(matchedCrop.Name)}`);
      return;
    }

    // Check for pesticide name match (case-insensitive)
    const matchedPesticide = pesticides.find(pesticide => pesticide.Name && pesticide.Name.toLowerCase() === trimmedSearchTerm);
    if (matchedPesticide) {
      navigate(`/pesticides/${matchedPesticide._id || matchedPesticide.id}`);
      return;
    }

    // Basic check if the search term might be a pesticide ID
    const possiblePesticideId = parseInt(trimmedSearchTerm, 10);
    if (!isNaN(possiblePesticideId)) {
      const pesticideById = pesticides.find(pesticide => (pesticide._id || pesticide.id) === possiblePesticideId);
      if (pesticideById) {
        navigate(`/pesticides/${possiblePesticideId}`);
        return;
      }
    }

    // If no match found, navigate to a search results page
    navigate(`/search-results?query=${trimmedSearchTerm}`);
  };
  return (
    <div>
      <ANavbar />
      <div className="Asession">
        <img src={bghome} alt="" id="bghome" />
        <h1> <span id="Atitle"> Smart Pesticides Management For Better Farming </span></h1>
        <p>Get expert recommendations based on your season and crop type</p>
        <div className="ASearchBar">
          <div className="ASearchInput">
            <input type="text" 
            className="searchBoxhome"
             placeholder="Search for pesticides, crops..."
             value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              />
          </div>
        </div>
        <h2 id="seasonheading-ahome">Select Your Season</h2>
        <div className="seasons-ahome">
          <button id="seasonbutton-ahome" onClick={() => handleSeasonSelect('Kharif')}>Kharif Season <br /></button>
          <button id="seasonbutton-ahome" onClick={() => handleSeasonSelect('Rabi')}>Rabi Season <br /></button>
          <button id="seasonbutton-ahome" onClick={() => handleSeasonSelect('Zaid')}>Zaid Season <br /></button>
        </div>
      </div>
    </div>
  );
}