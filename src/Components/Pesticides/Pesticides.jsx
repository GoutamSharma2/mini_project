import React from "react";
import ANavbar from "../Navbar/ANavbar";
import "./Pesticides.css";

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
{ 
    title: "Spider Mites", 
    desc: "Microscopic pests that cause yellowing and webbing.", 
    image: "https://example.com/spidermites.jpg", 
}, 
], 

// growth: [ 
//     { 
//         title: "Nitrogen Boost", 
//         desc: "High-nitrogen fertilizer for vegetative growth.", 
//         image: "https://example.com/nitrogen.jpg", 
//     }, 
//     { 
//         title: "Root Enhancer", 
//         desc: "Promotes strong root development and nutrient uptake.", 
//         image: "https://example.com/rootenhancer.jpg", 
//     }, 
//     { 
//         title: "Bloom Booster", 
//         desc: "Phosphorus-rich formula for flower and fruit production.", 
//         image: "https://example.com/bloom.jpg", 
//     }, 
//     { 
//         title: "Micronutrient Mix", 
//         desc: "Essential minerals for overall plant health.",
//         image: "https://example.com/micronutrients.jpg", 
//     }, 
// ], 
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

export default function Pesticides() {
    return (
        <div>
        <ANavbar/> 
    <div className="container"> 
    <h1 className="main-title">Pesticides For -</h1> 
    <p className="subtitle">Comprehensive guide for pest control and growth management</p>

<div className="grid">
    <div className="section">
      <h2 className="section-title">Pest Management</h2>
      <div className="card-grid">
        {data.pests.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <button className="button">View More Pests</button>
    </div>

    {/* <div className="section">
      <h2 className="section-title">Growth Production</h2>
      <div className="card-grid">
        {data.growth.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <button className="button">View More Products</button>
    </div> */}
  </div>
</div>
</div>

); }