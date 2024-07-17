import React from "react";
import Hero from "../components/Hero";

const AboutUs = () => {
  const imageUrl1 = "/contact.png"; // Define imageUrl variable
`  `
  return (
    <>
      <Hero
        title={"Learn about HealthCare"}
        imageUrl={imageUrl1} // Pass imageUrl as prop to Hero component
      />
      <div className="container ">
        <div className="banner aboutus-content">
          <img src="/about-hos.jfif" alt="hospital" style={{width: "400px"}} /> 
        </div>
        
      </div>
    </>
  );
};

export default AboutUs;
