import '../../Components/Home/Ahome.css';
import bghome from '../../assets/Bg Home.jpg';
import ANavbar from "../../../src/Components/Navbar/ANavbar";

export default function Ahome(){
    return(
        <div>
            <ANavbar/>
                  <div className="Asession">
                  <img src={bghome} alt="" id="bghome" />
                  <h1> <span id="Atitle"> Smart Pesticides Management For Better Farming </span></h1>
                  <p>Get expert recommendations based on your season and crop type</p>
                  <div className="ASearchBar">
                     <div className="ASearchInput">
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
    );
};