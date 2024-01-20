// Cover.js
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import physioImage from "../Images/hero3.png";

const Cover = () => {
  const getInitialSize = () => {
    const { innerWidth } = window;
    return innerWidth < 600 ? "2rem" : "3.5rem";
  };

  const getUpdatedSize = () => {
    const { innerWidth } = window;
    return innerWidth < 600 ? "2rem" : "3.5rem";
  };

  const [fontSize, setFontSize] = useState("6vw");
  const [screenSize, setScreenSize] = useState(getInitialSize());

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 600 ? "6vw" : "13vw");
      setScreenSize(getUpdatedSize());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#180F22",
    height: "auto", // Set the height to 100vh
    width: "100%",
    margin: 0,
    paddingBottom: window.innerWidth < 600 ? "20vw" : "7vw",
    paddingTop: window.innerWidth < 600 ? "20vw" : "7vw",
  };

  const imageContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    width: "100%",
  };

  const physioMizeStyle = {
    fontSize: window.innerWidth < 600 ? "14vw" : "6vw",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0px",
    color: "white",
    "@media (orientation: portrait)": {
      fontSize: "new value for portrait orientation",
    },
    "@media (orientation: landscape)": {
      fontSize: "new value for landscape orientation",
    },
  };

  const textStyle = {
    fontSize: window.innerWidth < 600 ? "4vw" : "1.75vw",
    fontFamily: "sans-serif",
    color: "#6942FF",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
  };

  return (
    <Box sx={{}} id="home" style={{ height: "100%" }}>
      <div style={containerStyle}>
        <Grid
          container
          spacing={"0.5vw"}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <div className="text-content">
              <p style={physioMizeStyle}>
                <b>PocketBound</b>
              </p>
              <div className="text-content">
                <p style={textStyle}>
                  Unleash Your Reality, Anytime, Anywhere!
                </p>
              </div>
              <a href="#ures" style={{ textDecoration: "none" }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    marginLeft: window.innerWidth < 600 ? "30vw" : "17vw",
                    marginTop: window.innerWidth < 600 ? "13vw" : "5vw",
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: "#ffffe0",
                      color: "black",
                      fontSize: window.innerWidth < 600 ? "1em" : "1.5em",
                      padding: window.innerWidth < 600 ? "1vw" : "2vw",
                      borderRadius: "10px",
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <div className="image-content" style={imageContentStyle}>
              <img
                src={physioImage}
                alt="Physiotherapy Image"
                style={imageStyle}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Cover;
