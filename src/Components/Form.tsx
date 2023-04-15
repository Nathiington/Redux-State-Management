import { Typography, TextField, Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateEmail,updateName } from "../Context/slice";
import { useNavigate } from "react-router-dom";


export default function Form() {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    dispatch(updateEmail(email))
    dispatch(updateName(name))

    setLoading(false);
    navigate('/home')
  }

  return (
    <>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item xs={11} sm={11} md={11} lg={4} xl={4}>
          {/* Title */}
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Log In
          </Typography>
          <br />

          {/* Error Alert */}
          {/* {error && <Alert severity="error">{error}</Alert>} */}

          {/* Text Fields */}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              fullWidth
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="name"
              fullWidth
              label="Name"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button
              type="submit"
              style={{ marginTop: 30 }}
              variant="contained"
              fullWidth
              color="primary"
              disabled={loading}
            >
              Proceed
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
