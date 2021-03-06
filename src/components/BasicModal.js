import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const selectData = {
  genre: ["Crime", "Documentary", "Horror", "Comedy"],
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Add Movie modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card id="basic-info" sx={{ overflow: "visible" }}>
          <Box p={3}>
            <Typography variant="h5">ADD MOVIE</Typography>
          </Box>
          <Box component="form" pb={3} px={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField label="Title" placeholder="Title" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Release Date" placeholder="Release Date" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Movie URL" placeholder="Movie URL" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Rating" placeholder="Rating" />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField label="Runtime" placeholder="Runtime" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Overview" placeholder="Overview" />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={8}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={2}>
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
}
