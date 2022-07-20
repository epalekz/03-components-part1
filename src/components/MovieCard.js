import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function MovieCard({ movie, handleOpenDetails }) {
  const { title, overview, tagline, poster_path } = movie || {};

  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer" }}
      onClick={() => handleOpenDetails(movie)}
    >
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={title}
        subheader={tagline}
      />
      <CardMedia component="img" height="194" image={poster_path} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {overview.substring(0, 100) + "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}

MovieCard.defaultProps = {
  movie: {
    title: "",
    overview: "",
    tagline: "",
    poster_path: "",
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  handleOpenDetails: PropTypes.func.isRequired,
};
