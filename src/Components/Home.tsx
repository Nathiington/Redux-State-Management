import React from "react";
import { Divider, Grid, Typography, RadioGroup, Radio, Fab, AppBar, CssBaseline,Toolbar,IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Context/types";
import { undoColor, updateColor, clearState } from "../Context/slice";
import { ArrowBackIos, Undo } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //useSelector is used to get the state from the store
  const user = useSelector((state: RootState) => state.user);
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>){
    dispatch(updateColor(event.target.value));
  };

  function handleUndo(){
    dispatch(undoColor())
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ height: "60px", padding: "0 16px", mb: 2 }}
        elevation={4}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{ 
              dispatch(clearState());
              navigate("/")
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item xs={11} sm={11} md={11} lg={6} xl={6}>
          {/* Title */}
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Hello {user.name}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Your Email is {user.email}
          </Typography>
          <Divider />
          <RadioGroup value={data.color} onChange={handleRadioChange}>
            <Radio
              value="red"
              sx={{
                color: "red",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
            <Radio
              value="green"
              sx={{
                color: "green",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
            <Radio
              value="blue"
              sx={{
                color: "blue",
                "&.Mui-checked": {
                  color: "blue",
                },
              }}
            />
            <Radio
              value="orange"
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
            <Radio
              value="purple"
              sx={{
                color: "purple",
                "&.Mui-checked": {
                  color: "purple",
                },
              }}
            />
            <Radio
              value="black"
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          </RadioGroup>
          <p>Selected color: {data.color}</p>
          <br />
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            onClick={handleUndo}
          >
            <Undo sx={{ mr: 1 }} />
            Undo
          </Fab>

          <p>Previous colors:</p>
          <ul>
            {data.colorHistory.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
