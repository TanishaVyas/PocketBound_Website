import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "..//Images//logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: "#180F22" }}
      >
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Your existing desktop navigation buttons */}

            <Button>
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
            <Button href="#features">
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
                demo
              </Typography>
            </Button>
            <Button href="#contact">
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "16px", md: "20px" }, color: "white" }}
              >
                contact
              </Typography>
            </Button>

            {/* Add other desktop buttons as needed */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Responsive Drawer for smaller screens */}
      <Hidden mdUp>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {[
              { text: "Home", to: "home" },
              { text: "About", to: "about" },
              { text: "Features", to: "feature" },
              { text: "Demo", to: "demo" },
              { text: "Contact", to: "contact" },
              // Add other menu items as needed
            ].map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust the offset as needed
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </Box>
  );
}

export default Navbar;
