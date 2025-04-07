import HNavbar from "./HNavbar";
import './Home.css';
import bbgimg from './BackGroundHome.jpg';
import img1 from './img1.jpg';
import img3 from './img3.jpg';
import img2 from './img2.jpg';
import Footer from "./Footer.jsx";

export default function Home(){
    return(
        <div>
            <HNavbar/>

                  <div className="session">
                  <img src={bbgimg} alt="" id="backgimg" />
                  <h1> <span id="title"> Smart Pesticides Management <br /> For Better Farming </span></h1>
    
                  <div className="images">
                  <img src={img1} alt="" id="img1"/>
                  <img src={img2} alt="" id="img2"/>
                  <img src={img3} alt="" id="img3"/>
                  </div>

                  <div className="SearchBar">
                    <div className="SearchBarLabel" ><label htmlFor="searchBoxhome" >Find What You Need</label>
                    </div>
                     <div className="SearchInput">
                         <input type="text" className="searchBoxhome" placeholder="Search for pesticides, crops..." />
                     </div>
                    <div className="SearchButtons">
                    <button>Rice</button>
                    <button>Rabi</button>
                    <button>Wheat</button>
                    </div>
                    </div>

                  </div>

                  <h2 className="subheading2">Key Features</h2>
                  <div className="Kfeatures">
                    <div className="card">
                        <h3>Pesticide Database</h3>
                        <p>Comprehensive information about various pesticides and their applications.</p>
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
    )
}