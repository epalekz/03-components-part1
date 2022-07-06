import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Login Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card id="basic-info" sx={{ overflow: "visible" }}>
          <Box p={3}>
            <Typography variant="h5">LOGIN</Typography>
          </Box>
          <Box component="form" pb={3} px={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField label="USER ID" placeholder="USER ID" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="PASSWORD*"
                  placeholder="PASSWORD*"
                  type="password"
                />
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
                          LOG IN
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
