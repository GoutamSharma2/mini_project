import React from "react";
import Login from "../src/Components/Login/Login.jsx";
import Signup from "../src/Components/Signup/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Kharif from "./Components//Seasons/Kharifseason.jsx";
import Ahome from "../src/Components/Home/Ahome.jsx";
import Crop from "./Components/Crop/Crop.jsx";
import Pesticides from "./Components/Pesticides/Pesticides.jsx";
import Data from "../src/Components/Pesticides/PesticidesData.js";

function App() {
  return (
    <div>
      {/* <Login/>  */}
      {/* <Signup /> */}
      {/* <Kharif /> */}
      {/* <Home/> */}
      <Ahome/>
      {/* <Crop/> */}
      {/* <Pesticides data={Data} /> */}
    </div>
  );
}

export default App;
