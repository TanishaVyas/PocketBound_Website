// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach/detach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#000000",
        borderRadius: "50%",
        color: "#fff",
        border: "none",
        padding: "10px",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        transition: "opacity 0.3s",
      }}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon style={{ color: "white" }} />
    </div>
  );
};

export default ScrollToTopButton;
