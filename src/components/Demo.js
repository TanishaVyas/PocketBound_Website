import React, { useState, useEffect } from "react";

const Demo = () => {
  const youtubeVideoLink1 = "https://youtu.be/kQLBmA0-HrQ?si=vpyVVwWFqaHa2WLp";

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

  const wrapperStyle = {
    display: "flex",
    backgroundColor: "#241b2d",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 15px",
  };

  const pageTitleStyle = {
    color: "#6942ff",
    textAlign: "center",
    fontSize: fontSize,
    margin: "0",
  };

  const videoContainerStyle = {
    display: "flex",
    marginTop: "15px",
    marginBottom: marginBottom,
    padding: "0px",
  };

  const videoStyle = {
    width: "50%",
    marginRight: window.innerWidth < 600 ? "10px" : "6vw",
    marginLeft: window.innerWidth < 600 ? "10px" : "6vw",
  };

  const iframeStyle = {
    width: "100%",
    height: "300px",
  };

  const videoInfoStyle = {
    flex: 1,
    fontSize: window.innerWidth < 600 ? "3vw" : "1.5vw",
    marginLeft: "10px",
    marginRight: window.innerWidth < 600 ? "0px" : "2vw",
    color: "#ffffff",
    maxHeight: "300px",
    lineHeight: "1.4",
    padding: "0px",
    overflowY: "hidden",
  };

  return (
    <div id="demo" style={wrapperStyle}>
      <h2 style={pageTitleStyle}>DEMO VIDEO</h2>
      <div style={videoContainerStyle}>
        <div style={videoStyle}>
          <iframe
            style={iframeStyle}
            src={youtubeVideoLink1.replace(
              "youtu.be/",
              "www.youtube.com/embed/"
            )}
            title="Embedded YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={videoInfoStyle}>
          <p>
            PocketBound is a groundbreaking project that transforms 3D games
            into mobile virtual reality experiences, addressing accessibility
            and affordability challenges. With a user-friendly game plugin, the
            project facilitates easy one-click conversion of games to VR, aiming
            to democratize and elevate the virtual reality gaming scene.
            Notably, PocketBound offers a DIY headset option, ensuring
            accessibility for all gamers.
            {/* Add more content here if needed */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
