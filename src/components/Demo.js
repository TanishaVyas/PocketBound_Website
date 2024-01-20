import React from "react";

const Demo = () => {
  const youtubeVideoLink1 = "https://youtu.be/kQLBmA0-HrQ?si=vpyVVwWFqaHa2WLp";

  const wrapperStyle = {
    display: "flex",
    backgroundColor: "#241b2d",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 15px", // Adjusted padding
  };

  const pageTitleStyle = {
    color: "#6942ff",
    textAlign: "center",
    fontSize: window.innerWidth < 600 ? "5vw" : "3vw", // Decreased font size
    margin: "0", // Removed margin for spacing
  };

  const videoContainerStyle = {
    display: "flex", // Updated to flex for horizontal layout
    marginTop: "15px", // Adjusted top margin for spacing
    marginBottom: window.innerWidth < 600 ? "25px" : "40px", // Adjusted bottom margin for spacing
    padding: "0px", // Added padding
  };

  const videoStyle = {
    width: "50%", // Set width to 50% for the video container
    marginRight: window.innerWidth < 600 ? "10px" : "6vw",
    marginLeft: window.innerWidth < 600 ? "10px" : "6vw", // Added right margin for spacing
  };

  const iframeStyle = {
    width: "100%",
    height: "300px",
  };

  const videoInfoStyle = {
    flex: 1, // Let the info container take the remaining width
    fontSize: window.innerWidth < 600 ? "3vw" : "1.2vw",
    marginLeft: "10px", // Added left margin for spacing
    marginRight: window.innerWidth < 600 ? "0px" : "2vw", // Decreased font size
    color: "#ffffff",
    maxHeight: "300px", // Max height for text box
    lineHeight: "1.4", // Adjusted line height
    padding: "0px", // Added padding
    overflowY: "hidden", // Hide overflow and prevent scrolling
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
            and affordability challenges.With a user-friendly game plugin, the
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
