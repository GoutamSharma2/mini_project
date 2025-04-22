import React from "react";
import ANavbar from "../Navbar/ANavbar";
import "./Crop.css";

const data = { pests: [ 
    { 
    title: "Tomato Hornworm", 
    desc: "Large green caterpillars that can destroy plant foliage.", 
    image: "https://example.com/hornworm.jpg", 
}, 
{ 
    title: "Aphids", 
    desc: "Small sap-sucking insects that cluster on stems and leaves.", 
    image: "https://example.com/aphids.jpg", 
}, 
{
    title: "Whiteflies", 
    desc: "White flying insects that feed on plant sap.",  
    image: "https://example.com/whiteflies.jpg", 
}, 
], 

};

const Card = ({ item }) => (

  <div className="card">
    <img src={item.image} alt={item.title} className="card-img" />
    <div className="card-content">
      <h3 className="card-title">
        {item.icon} {item.title}
      </h3>
      <p className="card-desc">{item.desc}</p>
    </div>
  </div>
);

export default function Crop() {
    return (
        <div>
        <ANavbar/> 
    <div className="container"> 
    <h1 className="main-title">Pesticides For -</h1> 
    <p className="subtitle">Comprehensive guide for pest control and growth management</p>

    <div className="section">
      <h2 className="section-title">Pest Management</h2>
      <div id="cards">
      <div className="card-grid">
        {data.pests.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      </div>
      <div id="session-button">
      <button className="button">View More</button>
      </div>
    </div>
  </div>
</div>

); }