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
import React, { useRef, useEffect , useState} from "react";
import { useSelector } from "react-redux";

const StationOne = {
  x : [0, 1, 2, 3, 4],
  y : [10, 15, 20, 25, 30],
  airQuality : [10, 20, 40]
};

const StationTwo = {
x : [0, 1, 2, 3, 4],
y : [5, 10, 15, 20, 25],
airQuality : [10, 30, 50]
};

const StationThree = {
x : [0, 1, 2, 3, 4],
y : [24,20,16,12,8],
airQuality : [5, 25, 45]
};

const StationFour = {
x : [0, 1, 2, 3, 4],
y : [2, 4, 6, 8, 10],
airQuality : [15, 35, 55]
};

const stations = [StationOne, StationTwo, StationThree, StationFour];

export default function Graph() {
  const tempChartRef = useRef(null);
  const aqiChartRef = useRef(null);

  const selected = useSelector((state) => state.selectedStation.value);
  const [StationData, setStationData] = useState(stations[selected]);

  useEffect(()=>{
    setStationData(stations[selected]);
  },[selected])

  useEffect(() => {
    const ctx = document.getElementById("barChart").getContext("2d");

    if (tempChartRef.current) {
      tempChartRef.current.destroy();
    }

    tempChartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: StationData.x,
        datasets: [
          {
            label: "Temperature",
            data: StationData.y,
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
  }, [StationData]);
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
            data: StationData.airQuality,
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
  }, [StationData]);

  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction={"column"} sx={{ ml: { md: 4 } }}>
        <Stack direction={"row"} width={"100%"} sx={{ mb: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "#eeeeee",
              mr: { md: 8, sm: 4, xs:2 },
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
              mr: { md: 8, sm: 4, xs:2 },
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
                value={StationData.airQuality[0]}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={StationData.airQuality[0]}
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
              mr: { md: 8, sm: 4, xs:2 },
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
                value={StationData.airQuality[1]}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={StationData.airQuality[1]}
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
              mr: { md: 8, sm: 4, xs:2 },
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
                value={StationData.airQuality[2]}
                sx={{ mb: 2, display: { md: "flex", xs: "none" } }}
                color="success"
                size="7rem"
              ></CircularProgress>
              <CircularProgress
                variant="determinate"
                value={StationData.airQuality[2]}
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
