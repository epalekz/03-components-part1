import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

export default function BasicGrid({ open, setOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          >
            +ADD MOVIE
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            paddingLeft={6}
            paddingTop={6}
          >
            FIND YOUR MOVIE
          </Typography>
        </Grid>
        <Grid item xs={6} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8.5}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80ch" },
            }}
            noValidate
            autoComplete="off"
            paddingLeft={5}
            paddingTop={2}
            paddingBottom={8}
          >
            <TextField
              id="outlined-search"
              label="Search"
              placeholder="What do you want to watch?"
              type="search"
            />
            <Button variant="contained" color="error" size="large">
              SEARCH
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

// import React from "react";

// const Header = () => {
//   return (
//     <div class="container">
//       <Columns>
//         <Columns.Column size={3}>
//           <div class="block">
//             <strong>netflix</strong>roulette
//           </div>
//         </Columns.Column>
//         <Columns.Column size={6} />
//         <Columns.Column size={3}>
//           <a className="button is-light">+ADD MOVIE</a>
//         </Columns.Column>
//       </Columns>
//       <Columns>
//         <Columns.Column size={6} offset={1}>
//           <h2 class="title is-2">FIND YOUR MOVIE</h2>
//         </Columns.Column>
//       </Columns>
//       <Columns>
//         <Columns.Column size={8} offset={1}>
//           <input
//             className="input is-medium"
//             type="text"
//             placeholder="What do you want to watch?"
//           />
//         </Columns.Column>
//         <Columns.Column size={2}>
//           <button className="button is-danger is-medium">Search</button>
//         </Columns.Column>
//       </Columns>
//     </div>
//   );
// };

// export default Header;
