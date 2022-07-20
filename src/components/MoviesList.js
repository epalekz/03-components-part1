import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({ handleOpenDetails }) => {
  const state = useSelector((state) => state);
  const { data } = state.movie;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map((movie, index) => (
          <Grid item xs={4} key={index}>
            <MovieCard movie={movie} handleOpenDetails={handleOpenDetails} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  handleOpenDetails: PropTypes.func.isRequired,
};
