import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";

export default function Header({ handleOpen, showMovieDetail }) {
  return (
    <Box sx={{ flexGrow: 1, display: showMovieDetail ? "none" : "" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography
            variant="body2"
            color="#F65261"
            align="left"
            paddingTop={2}
            paddingBottom={2}
          >
            <strong>netflix</strong>roulette
          </Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="error"
            href="#contained-buttons"
            align="rigth"
            onClick={handleOpen}
          >
            +ADD MOVIE
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            paddingLeft={6}
            paddingTop={6}
          >
            FIND YOUR MOVIE
          </Typography>
        </Grid>
        <Grid item xs={6} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8.5}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80ch" },
            }}
            noValidate
            autoComplete="off"
            paddingLeft={5}
            paddingTop={2}
            paddingBottom={8}
          >
            <TextField
              id="outlined-search"
              label="Search"
              placeholder="What do you want to watch?"
              type="search"
            />
            <Button variant="contained" color="error" size="large">
              SEARCH
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  showMovieDetail: PropTypes.bool.isRequired,
};
