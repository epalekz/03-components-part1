import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({
  handleOpenEdit,
  setMovieSelected,
  movies,
  setShowMovieDetail,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid item xs={4} key={index}>
            <MovieCard
              movie={movie}
              handleOpenEdit={handleOpenEdit}
              setShowMovieDetail={setShowMovieDetail}
              setMovieSelected={setMovieSelected}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  setShowMovieDetail: PropTypes.func.isRequired,
  setMovieSelected: PropTypes.func.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
};
