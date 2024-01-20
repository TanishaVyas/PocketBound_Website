import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";

const containerStyle = {
  backgroundColor: "#180F22",
  width: "100%",
  maxWidth: "100%",
  marginLeft: 0,
  marginRight: 0,
};

const sectionTitleStyle = {
  textAlign: "left",
  fontSize: "35px",
  marginBottom: "20px",
  color: "white",
};

const contactContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontSize: "18px",
  marginTop: "20px",
};

const contactInfoStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  color: "white",
};

const iconStyle = {
  fontSize: "20px",
  color: "white",
};

function Contact() {
  return (
    <Container style={containerStyle} id="contact">
      <div>
        <Typography
          variant="h4"
          style={{ ...sectionTitleStyle, color: "#6942ff" }}
        >
          About us:
        </Typography>
        <Typography
          variant="body1"
          style={{ ...sectionTitleStyle, fontSize: "15px" }}
        >
          Our team is made up of second-year Symbiosis Institute of Technology
          students pursuing a Bachelor of Computer Science degree. Each member
          contributes a unique experience covering IoT, game development but
          they are all shared passion for making immersive gaming experiences
          accessible to all, our team collaborates seamlessly to tackle the
          challenges of transforming 3D games into mobile VR adventures.
          Together, we push the boundaries of technical innovation, redefining
          the landscape of virtual reality gaming for a more inclusive future.
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          style={{ ...sectionTitleStyle, color: "#6942ff" }}
        >
          Contact us:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography style={{ color: "white" }} variant="subtitle1">
                <b>Email</b>
              </Typography>
              <Typography style={{ color: "white" }}>
                tanisha.vyas.btech2022@sitpune.edu.in
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                <b>Phone</b>
              </Typography>
              <Typography style={{ color: "white" }}>+91 9595915191</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography style={{ color: "white" }} variant="subtitle1">
                <b>LinkedIn</b>
              </Typography>
              <Typography style={{ color: "white" }}>
                https://www.linkedin.com/in/tanisha-vyas-0716a624a/
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Contact;
