// MaterialUIComponent.js
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import imageUrl from "..//Images//Temp.jpg";

const MaterialUIComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper style={{ backgroundColor: "#241b2d" }} elevation={0}>
          <img src={imageUrl} style={{ maxWidth: "100%", height: "auto" }} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ backgroundColor: "#241b2d" }} elevation={0}>
          <Typography variant="body1">
            dfghjkl;ertyuiol;sdfvbnm,sdfghjktyuio
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MaterialUIComponent;
