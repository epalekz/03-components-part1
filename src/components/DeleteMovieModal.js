import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "30%",
  height: "20%",
};

export default function DeleteMovieModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            DELETE MOVIE
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this movie?
          </Typography>
          <Grid
            container
            spacing={3}
            style={{
              paddingTop: "20px",
              paddingLeft: "250px",
            }}
          >
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                color="error"
                href="#contained-buttons"
                align="rigth"
              >
                CONFIRM
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
