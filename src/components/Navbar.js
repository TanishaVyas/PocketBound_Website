import React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import logo from "..//Images//logo.png";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: "#180F22" }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px", marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "20px", md: "24px" }, color: "white" }}
          >
            PocketBound
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button href="#home">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
            >
              Home
            </Typography>
          </Button>
          <Button href="#about">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
            >
              About
            </Typography>
          </Button>
          <Button href="#feature">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
            >
              Features
            </Typography>
          </Button>
          <Button href="#demo">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
            >
              Demo
            </Typography>
          </Button>
          <Button href="#contact">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
            >
              Contact
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
