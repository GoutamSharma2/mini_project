import HNavbar from "../Navbar/HNavbar.jsx";
import "../Home/Home.css";
import bbgimg from "../../assets/BackGroundHome.jpg";
import img1 from "../../assets/img1.jpg";
import img3 from "../../assets/img3.jpg";
import img2 from "../../assets/img2.jpg";
import Footer from "../../Components/Footer/Footer.jsx";
import Ahome from "../Home/Ahome.jsx";
import ANavbar from "../Navbar/ANavbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [unauthSearchTerm, setUnauthSearchTerm] = useState("");

  const handleSeasonSelect = (season) => {
    console.log(`Season selected: ${season}`);
    navigate(`/crops?season=${season}`);
  };
  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/auth/status", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Error checking auth status:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleUnauthSearchChange = (event) => {
    setUnauthSearchTerm(event.target.value);
  };

  const handleUnauthSearchSubmit = () => {
    const trimmedSearchTerm = unauthSearchTerm.trim();
    if (!trimmedSearchTerm) {
      navigate('/crops'); 
      return;
    }

    const formattedSearchTerm = trimmedSearchTerm.charAt(0).toUpperCase() + trimmedSearchTerm.slice(1).toLowerCase();

    const validSeasons = ["Kharif", "Rabi", "Zaid"];
    if (validSeasons.includes(formattedSearchTerm)) {
      navigate(`/crops?season=${formattedSearchTerm}`);
      return;
    }

    axios
      .get(`http://localhost:3000/crops/search?query=${encodeURIComponent(formattedSearchTerm)}`)
      .then((response) => {
        console.log("Search Results (Unauth):", response.data);
        const matchedCrop = response.data.find((crop) => crop.name === formattedSearchTerm);
        console.log("Matched crop (Unauth):", matchedCrop);
        if (matchedCrop) {
          navigate(`/pests?crop=${encodeURIComponent(matchedCrop.name)}`);
        } else {
          navigate(`/search-results?query=${encodeURIComponent(trimmedSearchTerm)}`);
        }
      })
      .catch((error) => {
        console.error("Error searching:", error);
        navigate(`/search-results?query=${encodeURIComponent(trimmedSearchTerm)}`);
      });
  };
   const handleButtonClickSearch = (searchTerm) => {
      setUnauthSearchTerm(searchTerm);
      let formattedSearchTerm = searchTerm.trim();
      if (formattedSearchTerm) {
      formattedSearchTerm = formattedSearchTerm.charAt(0).toUpperCase() + formattedSearchTerm.slice(1).toLowerCase();
       }
  }

  if (loading) return <div>Loading ....</div>;
  console.log("User logged in :" + isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <ANavbar />
          <Ahome />
        </>
      ) : (
        <>
          <HNavbar />
          <div className="session">
            <img src={bbgimg} alt="" id="backgimg" />
            <h1>
              {" "}
              <span id="title">
                {" "}
                Smart Pesticides Management <br /> For Better Farming{" "}
              </span>
            </h1>

            <div className="images">
              <img src={img1} alt="" id="img1" />
              <img src={img2} alt="" id="img2" />
              <img src={img3} alt="" id="img3" />
            </div>

            <div className="SearchBar">
              <div className="SearchBarLabel">
                <label htmlFor="searchBoxhome">Find What You Need</label>
              </div>
              <div className="SearchInput">
                <input
                  type="text"
                  className="searchBoxhome"
                  placeholder="Search for pesticides, crops..."
                  value={unauthSearchTerm}
                  onChange={handleUnauthSearchChange}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleUnauthSearchSubmit();
                    }
                  }}
                />
              </div>
              <div className="SearchButtons">
              <button onClick={() => handleButtonClickSearch('Rice')}>Rice</button>
               <button onClick={() => handleButtonClickSearch('Rabi')}>Rabi</button>
               <button onClick={() => handleButtonClickSearch('Wheat')}>Wheat</button>
              </div>
            </div>
          </div>
          <div>
            <h2 id="seasonheading">Select Your Season</h2>
            <div className="seasons">
              <button
                id="seasonbutton"
                onClick={() => handleSeasonSelect("Kharif")}
              >
                Kharif Season <br />
                <span>June-October</span>
              </button>
              <button
                id="seasonbutton"
                onClick={() => handleSeasonSelect("Rabi")}
              >
                Rabi Season <br />
                <span>October-March</span>
              </button>
              <button
                id="seasonbutton"
                onClick={() => handleSeasonSelect("Zaid")}
              >
                Zaid Season <br />
                <span>March-June</span>
              </button>
            </div>
          </div>
        </>
      )}
      <h2 className="subheading2">Key Features</h2>
      <div className="Kfeatures">
        <div className="card">
          <h3>Pesticide Database</h3>
          <p>
            Comprehensive information about various pesticides and their
            applications.
          </p>
        </div>

        <div className="card">
          <h3>Comparison Tool</h3>
          <p>Compare different pesticides to make informed decisions.</p>
        </div>

        <div className="card">
          <h3>Usage Guidelines</h3>
          <p>Step-by-step instructions for safe and effective pesticide use.</p>
        </div>

        <div className="card">
          <h3>Environmental Impact</h3>
          <p>Understand the environmental effects of different pesticides.</p>
        </div>
      </div>

      <h2 className="subheading3">Environmental Impact Indicators</h2>
      <div className="Environmentalimpact">
        <div className="card2">
          <h3>Water Impact</h3>
          <p>Moderate Impact Level</p>
        </div>

        <div className="card2">
          <h3>Biodiversity</h3>
          <p>High Impact Level</p>
        </div>

        <div className="card2">
          <h3>Soil Quality</h3>
          <p>Low Impact Level</p>
        </div>
      </div>

      <div className="myfoot">
        <Footer />
      </div>
    </div>
  );
}
