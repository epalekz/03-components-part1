import * as React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BasicSelect from "./BasicSelect";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { setFilter } from "../actions/movieActions";

const SearchOptions = ({ handleSorted, moviesLength }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setFilter(e.target.value));
    handleSorted();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={0} direction="row">
            <Button
              variant="text"
              color="primary"
              value="all"
              onClick={handleClick}
            >
              ALL
            </Button>
            <Button
              variant="text"
              color="primary"
              value="documentary"
              onClick={handleClick}
            >
              DOCUMENTARY
            </Button>
            <Button
              variant="text"
              color="primary"
              value="comedy"
              onClick={handleClick}
            >
              COMEDY
            </Button>
            <Button
              variant="text"
              color="primary"
              value="horror"
              onClick={handleClick}
            >
              HORROR
            </Button>
            <Button
              variant="text"
              color="primary"
              value="crime"
              onClick={handleClick}
            >
              CRIME
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <BasicSelect handleSorted={handleSorted} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom paddingLeft={1}>
            {`${moviesLength} movies found`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchOptions;

SearchOptions.propTypes = {
  handleSorted: PropTypes.func.isRequired,
};
