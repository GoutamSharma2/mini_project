import React from "react";
import './Seasons.css';

const Seasons = () => {
  return (
    <div>
      <h2>Select Your Season</h2>
      <div className="seasons">
        <button>Kharif Season <br /><span>June-October</span></button>
        <button>Rabi Season <br /><span>October-March</span></button>
        <button>Zaid Season <br /><span>March-June</span></button>
      </div>
    </div>
  );
};



export default Seasons;