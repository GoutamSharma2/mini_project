import ANavbar from "./ANavbar";
import './AHome.css';
// import backgimg from './backimg2.jpg';
import Aimg from './Aimg.jpg';
import Footer from "./Footer.jsx";


export default function AHome(){
    return(
        <div>
            <ANavbar/>
            <div className="gb">
            <div className="outer">
                  <img src={Aimg} alt="" id="Aimg" />
                  <h1> <span id="title"> PestiGuide </span></h1>
                    <input type="text" className="searchBox" placeholder=" Search for pesticides, Season, Crop ..." />
                    <p> Rice &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Wheat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cotton&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Rabi</p>
                  </div>
                
                  <h2 className="subheading1"> Select Season</h2>
                  <div className="seasons">
                    <button>Rabi</button>
                    <button>Kharif</button>
                    <button>Zaid</button>
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

            </div>
            <div className="myfoot">
            <Footer />
            </div>
            
        </div>
    )
}