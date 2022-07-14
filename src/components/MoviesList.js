import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({ handleOpenDetails, movies }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies.map((movie, index) => (
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
  movies: PropTypes.arrayOf(PropTypes.object),
};
