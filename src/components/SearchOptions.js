import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BasicSelect from "./BasicSelect";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";

const SearchOptions = ({ handleSorted }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={0} direction="row">
            <Button variant="text" color="primary">
              ALL
            </Button>
            <Button variant="text" color="primary">
              DOCUMENTARY
            </Button>
            <Button variant="text" color="primary">
              COMEDY
            </Button>
            <Button variant="text" color="primary">
              HORROR
            </Button>
            <Button variant="text" color="primary">
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
            39 movies found
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
