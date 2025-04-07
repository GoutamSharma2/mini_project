import HNavbar from "./HNavbar";
import './Home.css';
import bbgimg from './BackGroundHome.jpg';
import img1 from './img1.jpg';
import img3 from './img3.jpg';
import img2 from './img2.jpg';


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
        </div>
    )
}