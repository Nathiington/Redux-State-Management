import { Typography, Alert, TextField, Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail,updateImage } from "../Context/reducer";
import { RootState } from "../Context/types";


export default function Form() {
const user = useSelector((state:RootState) => state.user);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState<FileList | null>(null);
  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    sessionStorage.setItem("email", email);
    dispatch(updateEmail(email,)
    )
    if(image) {
        dispatch(updateImage(image[0]));
    }
    else{
        setError("Please upload an image");
        alert("Please upload an image");
        return;
    }

    alert("Form Submitted");
    setLoading(false);
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
          {error && <Alert severity="error">{error}</Alert>}

          {/* Text Fields */}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={(e) => setImage(e.target.files)}
            />
            <label htmlFor="contained-button-file">
              <Button component="span" >
                Upload
              </Button>
            </label>

            <Button
              type="submit"
              style={{ marginTop: 30 }}
              variant="contained"
              fullWidth
              color="primary"
              disabled={loading}
            >
              Log In
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
