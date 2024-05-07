import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Select from "react-select";

import makeAnimated from "react-select/animated";
import { filter1 } from "../filterData";
import { TextField } from "@mui/material";

const animatedComponents = makeAnimated();

const JobFilters = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 4, md: 12 }}
      >
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filter1}
            placeholder='Roles'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filter1}
            placeholder='Number of Employees'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filter1}
            placeholder='Experience'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filter1}
            placeholder='Remote'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filter1}
            placeholder='Minimum Salary Pay'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
        <TextField id="outlined-basic" size="small" label="Search Company here" variant="outlined" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobFilters;
