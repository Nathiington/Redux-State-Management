import React from 'react'
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item xs={11} sm={11} md={11} lg={6} xl={6}>
          {/* Title */}
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Home
          </Typography>
          <br />

        </Grid>
      </Grid>
    </>
  );
}
