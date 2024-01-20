import React, { useState, useEffect } from "react";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";
import img6 from "../Images/6.png";
import { Typography } from "@mui/material";

const VrFeaturesPage = () => {
  const [fontSize, setFontSize] = useState(
    window.innerWidth < 600 ? "4vw" : "2.5vw"
  );
  const [marginBottom, setMarginBottom] = useState(
    window.innerWidth < 600 ? "20px" : "35px"
  );

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 600 ? "4vw" : "2.5vw");
      setMarginBottom(window.innerWidth < 600 ? "20px" : "35px");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (feature) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  const handleResize = () => {
    const newShowDetails = {};
    features.forEach((feature) => {
      newShowDetails[feature.title] = false;
    });

    setShowDetails(newShowDetails);
  };

  useEffect(() => {
    handleResize(); // Call once to set the initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pageTitleStyle = {
    color: "#6942ff",
    textAlign: "center",
    fontSize: fontSize,
    margin: "0",
  };
  const features = [
    {
      title: "Game Engine Software",
      description: "Turn any 3D game into VR.",
      image: img1,
    },
    {
      title: "Mobile-Centric Approach",
      description: "Use your existing mobile phone for VR.",
      image: img2,
    },
    {
      title: "Microcontroller Integration",
      description: "Diverse controller options for an immersive experience.",
      image: img3,
    },
    {
      title: "DIY Headset Option",
      description: "Personalize your VR setup.",
      image: img4,
    },
    {
      title: "Game Plugin",
      description: "Effortless conversion with a one-click plugin.",
      image: img5,
    },
    {
      title: "Open-Source and Premium Models",
      description: "Community-driven development and enterprise solutions.",
      image: img6,
    },
  ];

  return (
    <div
      id="features"
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#180F22",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={pageTitleStyle}>FEATURES</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#180F22",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-box"
            onClick={() => toggleDetails(feature.title)}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ccc",
              borderRadius: "10px",
              margin: "0 5vw 5vw 0",
              padding: "0",
              cursor: "pointer",
              width: window.innerWidth < 600 ? "45%" : "20%",
              height: "18rem",
              boxSizing: "border-box",
              position: "relative",
              backgroundColor: "white",
              justifyContent: "center", // Center content vertically
              textAlign: "center", // Center text horizontally
            }}
          >
            <img
              src={feature.image}
              alt="Feature Image"
              style={{
                maxWidth: "45%",
                maxHeight: "40%",
                borderRadius: "10px 10px 0 0",
                alignSelf: "center",
              }}
            />
            <h2 style={{ color: "#333", margin: "10px 0" }}>{feature.title}</h2>
            <p
              className={showDetails[feature.title] ? "" : "hidden"}
              style={{ color: "#666" }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VrFeaturesPage;
