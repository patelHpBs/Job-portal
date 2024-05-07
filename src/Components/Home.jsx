import React, { useEffect, useState } from "react";
import JobFilters from "./JobFilters";
import { Box, Grid } from "@mui/material";
import JobCards from "./JobCards";
import axios from "axios";

export const Home = () => {
  const [jobData, setJobData] = useState();

  //https://api.weekday.technology/adhoc/getSampleJdJSON

  const getJobs = async () => {
    const payload = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    try {
      const result = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        payload
      );
      // console.log(result,'****');
      setJobData(result.data.jdList);
    } catch (error) {}
  };
  console.log(jobData, "jobs");
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Box m={5}>
      <JobFilters />
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {jobData?.map((val) => (
          <Grid item xs={2} sm={4} md={3} key={val.jdUid}>
            <JobCards
              logo={val.logoUrl}
              location={val.location}
              jobName={val.companyName}
              role={val.jobRole}
              description={val.jobDetailsFromCompany}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
