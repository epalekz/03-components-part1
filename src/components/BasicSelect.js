import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const categories = ["title", "director", "description"];

export default function BasicSelect() {
  const [category, setCategory] = useState("title");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>SORT BY</InputLabel>
        <Select value={category} label="order" onChange={handleChange}>
          {categories.map((category) => (
            <MenuItem value={category}>{category.toUpperCase()}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
