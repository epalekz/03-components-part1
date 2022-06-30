import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PropTypes } from "prop-types";

export default function BasicSelect({ handleSorted }) {
  const [age, setAge] = React.useState("title");

  const handleChange = (event) => {
    setAge(event.target.value);
    handleSorted(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">SORT BY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="order"
          onChange={handleChange}
        >
          <MenuItem value="title">TITLE</MenuItem>
          <MenuItem value="director">DIRECTOR</MenuItem>
          <MenuItem value="description">DESCRIPTION</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

BasicSelect.propTypes = {
  handleSorted: PropTypes.func.isRequired,
};
