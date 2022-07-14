import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const MovieDetails = ({ movie, setShowMovieDetail, showMovieDetail }) => {
  const { title, description, image } = movie || {};

  return (
    <Card
      id="movie_DETAILS"
      sx={{
        overflow: "visible",
        width: "100%",
        height: "100%",
        display: showMovieDetail ? "" : "none",
      }}
    >
      <Box p={3}>
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
              onClick={() => setShowMovieDetail(false)}
            >
              &#x1F50D;
            </Button>
          </Grid>
        </Grid>
      </Box>
      <>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </>
    </Card>
  );
};

export default MovieDetails;

MovieDetails.defaultProps = {
  movie: {
    title: "some movie",
    description: "some description",
    director: "some director",
    image: "",
  },
};

MovieDetails.propTypes = {
  // openEdit: PropTypes.bool.isRequired,
  // handleCloseEdit: PropTypes.func.isRequired,
  movie: PropTypes.object,
  setShowMovieDetail: PropTypes.func.isRequired,
  showMovieDetail: PropTypes.bool.isRequired,
};
