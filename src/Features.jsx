import React from "react";
import './Features.css';

const features = [
  { title: "Pesticide Database", description: "Comprehensive information about various pesticides and their applications." },
  { title: "Comparison Tool", description: "Compare different pesticides to make informed decisions." },
  { title: "Usage Guidelines", description: "Step-by-step instructions for safe and effective pesticide use." },
  { title: "Environmental Impact", description: "Understand the environmental effects of different pesticides." }
];

const Features = () => {
  return (
    <div className="outer">
      <h2 id="f2">Key Features</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;