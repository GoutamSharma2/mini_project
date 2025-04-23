import { useEffect, useState } from "react";
import '../../Components/Seasons/SeasonCrops.css';
import kharifimg from '../../assets/kharif.jpg';
import Footer from "../Footer/Footer.jsx";
import ANavbar from "../Navbar/ANavbar.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import RiceImg from "../../assets/RiceImg.jpg"
import axios from "axios";
import maizeimg from '../../assets/maize.jpeg';
import jowar from '../../assets/maize.jpeg';
import soyabean from '../../assets/soybean.jpg';
import moong from '../../assets/moong.jpeg';
import linseed from '../../assets/linssed.jpeg';
import mustard from '../../assets/mustard green.jpg';
import peas from '../../assets/peas.jpeg';
import sunflower from '../../assets/sunfower.jpg';
import tur from '../../assets/tur.jpeg';
import urad from '../../assets/urad.jpg';
import wheat from '../../assets/wheat.jpeg';

const cropImages = {
  Rice: RiceImg,
  Maize: maizeimg,
  Jowar: jowar,
  "Bajra/PearlMillet": linseed,
  "Tur/Arhar/PigeonPea":tur,
  "Moong/GreenGram": moong,
  "Urad/BlackGram": urad,
  Soybean: soyabean,
  Groundnut: peas,
  Cotton:mustard,
  Sunflower:sunflower,
  "Sesamum/Til": wheat
  // Add more crop images as needed
};

export default function SeasonCrops() {
    const [search, setSearch] = useState("");
    const [crops, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedSeason = queryParams.get('season'); 
   
    const navigate = useNavigate();
    
    const handleSeasonChange = (season) => {
      navigate(`/crops?season=${season}`);
    };

    const handleCropSelect = (cropName) => {
      if (!cropName) {
        console.error("No crop name provided");
        return;
      }
      navigate(`/pests?crop=${encodeURIComponent(cropName)}`);
    };

    useEffect(() => {
        const fetchCrops = async () => {
          setLoading(true);
          setError(null);
          try {
            const response = await axios.get(
              `http://localhost:3000/crops?season=${selectedSeason}`
            );
            setCrops(response.data);
          } catch (err) {
            setError(err);
            console.error("Error fetching crops:", err);
          } finally {
            setLoading(false);
          }
        };
    
        if (selectedSeason) {
          fetchCrops();
        } else {
          setLoading(false);
        }
      }, [selectedSeason]);
    
      const filteredCrops = crops.filter((crop) =>
        crop.name && crop.name.toLowerCase().includes(search.toLowerCase())
      );
    
      if (loading) {
        return <div>Loading crops for {selectedSeason} season...</div>;
      }
    
      if (error) {
        return <div>Error loading crops: {error.message}</div>;
      }
    
      return ( 
        <div className="global">
            <ANavbar />
            <div className="above">
            <h1 id="seasontitle">{selectedSeason} Season</h1>
            <br />
            <div className="selectseasons">
                <button id="selectbutton" onClick={() => handleSeasonChange("Kharif")}>Kharif Season</button>
                <button id="selectbutton" onClick={() => handleSeasonChange("Rabi")}>Rabi Season</button>
                <button id="selectbutton" onClick={() => handleSeasonChange("Zaid")}>Zaid Season</button>
            </div>

            <input 
              className="searchbox"
              placeholder="Search crops..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
            </div> 
            
            <br /><br />
            <div className="local">
            {filteredCrops.map((crop) => (
                <div key={crop._id}>
                <div className="card">
                <img
                    src={cropImages[crop.name] || kharifimg}
                    alt={crop.name}
                    className="crop-image"
                />
                <h3>{crop.name}</h3>
                <button onClick={() => handleCropSelect(crop.name)}>Select</button>
                </div>
                </div>
            ))}
            </div>
            <div className="bottom">
            <br /><br />
            <Footer/>
            </div>
        </div> 
      ); 
}