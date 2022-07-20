import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PropTypes } from "prop-types";
import { setSortBy } from "../actions/movieActions";

const categories = [
  "title",
  "tagline",
  "overview",
  "vote_average",
  "vote_count",
  "release_date",
];

export default function BasicSelect({ handleSorted }) {
  const [category, setCategory] = useState("title");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSortBy(e.target.value));
    setCategory(e.target.value);
    handleSorted(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>SORT BY</InputLabel>
        <Select value={category} label="order" onChange={handleChange}>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

BasicSelect.propTypes = {
  handleSorted: PropTypes.func.isRequired,
};
