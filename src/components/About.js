import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import imageUrl from "..//Images//Temp.jpg";

const About = () => {
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
            backgroundColor:"#180F22", // Background color for the text container
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "#6942ff",
              marginBottom: "16px",
              fontSize: screenSize,
            }}
          >
            About the Project
          </Typography>
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
