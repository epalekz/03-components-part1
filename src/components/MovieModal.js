import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const selectData = {
  genre: ["Crime", "Documentary", "Horror", "Comedy"],
};

const MovieModal = ({ open, handleClose, movie, mode }) => {
  const { title, description, image } = movie;
  const modalTitle = mode === "EDIT" ? "EDIT" : "ADD";

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          id="add_movie"
          sx={{ overflow: "visible", width: "80%", height: "80%" }}
        >
          <Box p={3}>
            <Typography variant="h5">{modalTitle} MOVIE</Typography>
          </Box>
          <Box component="form" pb={3} px={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Title"
                  placeholder="Title"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Select Date"
                  placeholder="Select Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Movie URL"
                  placeholder="Movie URL"
                  fullWidth
                  value={image}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Rating" placeholder="Rating" fullWidth />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Autocomplete
                  defaultValue="Crime"
                  options={selectData.genre}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Genre"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Runtime" placeholder="Runtime" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Overview"
                  multiline
                  rows={4}
                  fullWidth
                  value={description}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={3}>
                        <Button
                          variant="outlined"
                          color="error"
                          href="#contained-buttons"
                          align="rigth"
                        >
                          RESET
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Button
                          variant="contained"
                          color="error"
                          href="#contained-buttons"
                          align="rigth"
                        >
                          SUBMIT
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Modal>
    </div>
  );
};

MovieModal.defaultProps = {
  movie: {
    title: "",
    description: "",
    director: "",
    image: "",
  },
};

MovieModal.propTypes = {
  openEdit: PropTypes.bool.isRequired,
  handleCloseEdit: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default MovieModal;
