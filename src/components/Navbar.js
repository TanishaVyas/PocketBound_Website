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
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "..//Images//logo.png";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLinkClick = (to) => () => {
    const targetElement = document.getElementById(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Features", to: "feature" },
    { text: "Demo", to: "demo" },
    { text: "Contact", to: "contact" },
    // Add other menu items as needed
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: "#180F22" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
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
            {menuItems.map((item, index) => (
              <Button key={index} onClick={handleLinkClick(item.to)}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust the offset as needed
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      color: "white",
                    }}
                  >
                    {item.text}
                  </Typography>
                </ScrollLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleLinkClick(item.to)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
