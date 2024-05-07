import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";

const JobCardContainer = styled(Card)`
  width: 300px;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: relative;
`;

const JobCardContent = styled(CardContent)`
  padding: 20px;
`;

const JobTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const JobDescription = styled(Typography)`
  font-size: 14px;
  color: #666;
`;

const JobButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const JobCards = () => {
  return (
    <JobCardContainer>
      <JobCardContent>
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <Chip
            label="Posted 30Days ago"
            variant="outlined"
            avatar={<HourglassEmptyRoundedIcon />}
          />
        </Box>
        <Box sx={{ display: "flex", margin: "10px" }}>
          <Box
            sx={{
              display: "flex",
              marginRight: "10px",
              width: "25%",
              height: "25%",
            }}
          >
            <img
              alt="Remy Sharp"
              src="https://give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png"
              style={{ width: "100%", height: "100%", objectFit: "content" }}
            />
          </Box>
          <Box sx={{ textAlign: "left", flex: 1 }}>
            <Typography>Company NAme</Typography>
            <Typography>Backend Engineer</Typography>
            <Typography>Banglore</Typography>
          </Box>
        </Box>
        <JobTitle>Estimated Salary: </JobTitle>

        <JobDescription>
          FamPay is building India's first neo-bank exclusively for teens.
          FamPay helps teens make their own online and offline payments through
          UPI, FamPay App and FamCard. FamPay is building India's first neo-bank
          exclusively for teens. FamPay helps teens make their own online and
          offline payments through UPI, FamPay App and FamCard.
        </JobDescription>
        {/* <JobButton color="primary" fullWidth className="button-container">
          <Box className="view-job">View Job</Box>
        </JobButton> */}
        <Box>
          <Button fullWidth variant="contained" sx={{ marginTop: "20px" }}>
            Easy Apply
          </Button>
        </Box>
      </JobCardContent>
    </JobCardContainer>
  );
};

export default JobCards;
