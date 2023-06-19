import {
  Container,
  Stack,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";

export default function Graph() {
  const tempChartRef = useRef(null);
  const aqiChartRef = useRef(null);
  useEffect(() => {
    const ctx = document.getElementById("barChart").getContext("2d");

    if (tempChartRef.current) {
      tempChartRef.current.destroy();
    }

    tempChartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [0, 1, 2, 3, 4],
        datasets: [
          {
            label: "Temperature",
            data: [10, 15, 20, 25, 30],
            backgroundColor: "#9fa8da",
            borderColor: "#9fa8da",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);
  useEffect(() => {
    const ctx1 = document.getElementById("barChart1").getContext("2d");

    if (aqiChartRef.current) {
      aqiChartRef.current.destroy();
    }

    aqiChartRef.current = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["Current AQI", "1 Hour AQI", "Nowcast AQI"],
        datasets: [
          {
            label: "Air Quality",
            data: [0, 20, 40],
            backgroundColor: "#9fa8da",
            borderColor: "#9fa8da",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 40,
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction={"column"} sx={{ ml: { md: 4 } }}>
        <Stack direction={"row"} width={"100%"} sx={{ mb: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              mr: { md: 8, sm: 4 },
              borderRadius: "16px",
              p: 2,
            }}
            width={"41%"}
          >
            <Typography sx={{ mb: 3, fontWeight: "bold" }}>
              Temperature
            </Typography>
            <canvas id="barChart" style={{ backgroundColor: "white" }}></canvas>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              borderRadius: "16px",
              p: 2,
            }}
            width={"41%"}
          >
            <Typography sx={{ mb: 3, fontWeight: "bold" }}>
              Air Quality
            </Typography>
            <canvas id="barChart1"></canvas>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              mr: { md: 8, sm: 4 },
              borderRadius: "16px",
              p: 2,
            }}
            width={"25%"}
          >
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Air Quality
            </Typography>
            <Typography sx={{ fontSize: "12px", mb: 2 }}>
              Current AQI
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "none", sm: "flex" } }}
                color="success"
                size="5rem"
              ></CircularProgress>
              {/* <Typography position="absolute" top="110px">
                Good
              </Typography>
              <Typography position="absolute" top="130px">
                50
              </Typography> */}
            </Box>
            <Typography sx={{ fontSize: "10px" }}>
              Based on xyz calculations
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              mr: { md: 8, sm: 4 },
              borderRadius: "16px",
              p: 2,
            }}
            width={"25%"}
          >
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Air Quality
            </Typography>
            <Typography sx={{ fontSize: "12px", mb: 2 }}>1 Hour AQI</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "none", sm: "flex" } }}
                color="success"
                size="5rem"
              ></CircularProgress>
              {/* <Typography position="absolute" top="110px">
                Good
              </Typography>
              <Typography position="absolute" top="130px">
                50
              </Typography> */}
            </Box>
            <Typography sx={{ fontSize: "10px" }}>
              Based on xyz calculations
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              mr: { md: 8, sm: 4 },
              borderRadius: "16px",
              p: 2,
            }}
            width={"25%"}
          >
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Air Quality
            </Typography>
            <Typography sx={{ fontSize: "12px", mb: 2 }}>
              24 Hour AQI
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={50}
                sx={{ mb: 2, display: { md: "none", sm: "flex" } }}
                color="success"
                size="5rem"
              ></CircularProgress>
              {/* <Typography position="absolute" top="110px">
                Good
              </Typography>
              <Typography position="absolute" top="130px">
                50
              </Typography> */}
            </Box>
            <Typography sx={{ fontSize: "10px" }}>
              Based on xyz calculations
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
