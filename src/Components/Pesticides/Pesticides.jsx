import React from "react"; 
import "../../Components/Pesticides/Pesticides.css";
import Footer from "../Footer/Footer.jsx";
import ANavbar from "../Navbar/ANavbar.jsx";

const Pesticides = ({ data }) => {
    return ( 
    <div>
      <ANavbar />
    
    <div className="div1"> 
    <h1>{data.title}</h1> 
    <div id="subdiv1"> 
        <span>{data.formula}</span>
        <span>{data.cas}</span> 
    </div>

<div className="div2">
    {data.infoCards.map((card, index) => (
      <div className="div2card" key={index}>
        <h4>{card.title}</h4>
        <p>{card.content}</p>
      </div>
    ))}
  </div>

  <div id="div3">
    <h3>{data.safetyTitle}</h3>
    <ul className="checklist">
      {data.safetyPrecautions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div id="div4">
    <h3>{data.environmentalTitle}</h3>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Impact Level</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.environmentalImpact.map((row, index) => (
          <tr key={index}>
            <td>{row.category}</td>
            <td>{row.impact}</td>
            <td>{row.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div id="div5">
    <h3>{data.usageTitle}</h3>
    <ul className="checklist">
      {data.usageInstructions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div id="div6">
    <div className="advantages">
      <h4>{data.advantagesTitle}</h4>
      <ul className="warning">
        {data.advantages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="disadvantages">
      <h4>{data.disadvantagesTitle}</h4>
      <ul className="safe">
        {data.disadvantages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
< Footer/>
</div>

); };

export default Pesticides;