import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import imageUrl from "..//Images//page2.png";

const About = () => {
  const [fontSize, setFontSize] = useState(
    window.innerWidth < 600 ? "7vw" : "2.5vw"
  );
  const [marginBottom, setMarginBottom] = useState(
    window.innerWidth < 600 ? "20px" : "35px"
  );

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 600 ? "9vw" : "2.5vw");
      setMarginBottom(window.innerWidth < 600 ? "20px" : "35px");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [screenSize, setScreenSize] = useState("3.5rem");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = "";

      if (innerWidth < 768) {
        newSize = "2rem";
      } else {
        newSize = "3.5rem";
      }

      setScreenSize(newSize);
    };

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

  return (
    <Paper id="about" style={{ backgroundColor: "#180F22", padding: "16px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: screenSize === "2rem" ? "column" : "row",
        }}
      >
        <div
          style={{
            flex: "1",
            marginRight: screenSize === "2rem" ? "0" : "16px",
            flexDirection: "column",
          }}
        >
          <img src={imageUrl} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div
          style={{
            flex: "1",
            padding: "10px",
            flexDirection: "column",
            backgroundColor: "#180F22", // Background color for the text container
          }}
        >
          <h2 style={pageTitleStyle}>ABOUT POCKETBOUND</h2>
          <Typography variant="body1" style={{ color: "#fff" }}>
            PocketBound transforms 3D games into mobile VR experiences, tackling
            accessibility and affordability challenges. With a mobile-centric
            approach, it utilizes existing phones, diverse microcontrollers, and
            offers a DIY headset option. The project includes a game plugin for
            easy one-click conversion of games to VR, aiming to democratize and
            enhance the VR gaming scene through community-driven development in
            the growing market.
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default About;
