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


  crops.forEach(crop => console.log("  Crop Name:", JSON.stringify(crop.name)));
  const handleSeasonSelect = (season) => {
    navigate(`/crops?season=${season}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    let formattedSearchTerm = '';
    const trimmedSearchTerm = searchTerm.trim();
    console.log("Formatted search term:", formattedSearchTerm);

    if (trimmedSearchTerm) {
      formattedSearchTerm = trimmedSearchTerm.charAt(0).toUpperCase() + trimmedSearchTerm.slice(1).toLowerCase();
    }

    if (!trimmedSearchTerm) {
      navigate('/crops'); // Maybe navigate to a page showing all seasons?
      return;
    }

    const validSeasons = ['Kharif', 'Rabi', 'Zaid'];
    if (validSeasons.includes(formattedSearchTerm)) {
      navigate(`/crops?season=${formattedSearchTerm}`);
      return;
    }

    // Fetch crops from backend based on the search term
    axios.get(`http://localhost:3000/crops/search?query=${encodeURIComponent(formattedSearchTerm)}`)
      .then(response => {
        setCrops(response.data);
        console.log("Search Results for Crops:", response.data);
        const matchedCrop = response.data.find(crop => crop.name === formattedSearchTerm);
        console.log("Matched crop:", matchedCrop);
        if (matchedCrop) {
          navigate(`/pests?crop=${encodeURIComponent(matchedCrop.name)}`);
        } else {
          navigate(`/search-results?query=${encodeURIComponent(trimmedSearchTerm)}`);
        }
      })
      .catch(error => {
        console.error("Error searching for crops:", error);
        navigate(`/search-results?query=${encodeURIComponent(trimmedSearchTerm)}`);
      });
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