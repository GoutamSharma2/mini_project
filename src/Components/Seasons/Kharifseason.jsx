
import { useState } from "react";
import '../../Components/Seasons/Kharifseason.css';
import kharifimg from '../../assets/kharif.jpg';
import Footer from "../Footer/Footer.jsx";
import ANavbar from "../Navbar/ANavbar.jsx";

const crops = [ 
    { name: "Rice", scientific: "Oryza sativa", duration: "120-150 days", region: "Eastern", image: "" }, 
    { name: "Cotton", scientific: "Gossypium", duration: "150-180 days", region: "Central", image: "" }, 
    { name: "Maize", scientific: "Zea mays", duration: "85-95 days", region: "Northern", image: "" }, 
    { name: "Soybean", scientific: "Glycine max", duration: "100-120 days", region: "Central", image: "" }, 
    { name: "Groundnut", scientific: "Arachis hypogaea", duration: "124-130 days", region: "Southern", image: "" }, 
    { name: "Green Gram", scientific: "Vigna radiata", duration: "65-70 days", region: "Western", image: "" }, 
    { name: "Sugarcane", scientific: "Saccharum officinarum", duration: "12-18 months", region: "Tropical", image: "" }, 
    { name: "Black Gram", scientific: "Vigna mungo", duration: "70-75 days", region: "Central", image: "" }, 
];

export default function Kharif() { const [search, setSearch] = useState(""); 
    const filteredCrops = crops.filter((crop) => crop.name.toLowerCase().includes(search.toLowerCase()));

return ( 
    
<div className="global">
    <ANavbar />
    <div className="above">
    <h1 >Kharif Season</h1>
    <br />
    <p>Kharif crops, also known as monsoon crops or autumn crops, are domesticated plants that are cultivated and harvested in India, Pakistan and Bangladesh during the Indian subcontinent's monsoon season, which lasts from June to November depending on the Monsoon rains may begin as early as May in some parts of the Indian subcontinent, and crops are generally harvested from the third week of September to October. Rice, maize, and cotton are some of the major Kharif crops in India.</p>
    <img src={kharifimg} alt="" id="kharifimg" />
    <br /><br /> 
    <input 
    className="searchbox"
    placeholder="Search crops..." 
    value={search} 
    onChange={(e) => setSearch(e.target.value)} />
    </div> 
     
    <br /><br />
    <div className="local"> 
        {
        filteredCrops.map((crop, index) => ( 
            <div key={index}> 
            <div className="card"> 
                <h3 >{crop.name}</h3> 
                <p>{crop.scientific}</p> 
                <p >Duration: {crop.duration}</p> 
                <p >Suitable for {crop.region} Region</p> 
                <button >Select</button>
                </div> 
             </div> 
            ))}            
                </div>
                <div className="bottom">
                <br /><br />
                < Footer/>
                </div>
                </div> 
                ); 
                }        