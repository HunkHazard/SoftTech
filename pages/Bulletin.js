import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const stationOne = {
  current_reading: {
    rate_one: 1990,
    rate_two: 2000,
  },
  energy_consumption: {
    low: 345367,
    normal: 789456,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [4, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

const stationTwo = {
  current_reading: {
    rate_one: 987,
    rate_two: 654,
  },
  energy_consumption: {
    low: 123456,
    normal: 789012,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  },
};

const stationThree = {
  current_reading: {
    rate_one: 13579,
    rate_two: 24680,
  },
  energy_consumption: {
    low: 975310,
    normal: 864209,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [2, 4, 6, 8, 10, 8, 6, 4, 2, 0],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 3, 5, 7, 9, 10, 8, 6, 4, 2],
  },
};

const stationFour = {
  current_reading: {
    rate_one: 1111,
    rate_two: 2222,
  },
  energy_consumption: {
    low: 333333,
    normal: 444444,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 4, 3, 2, 1, 1, 2, 3, 4, 5],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
};

export default function Bulletin({ data }) {
  const [selected, setSelected] = useState(0);
  const [Data, setData] = useState(stationOne);

  const setStation = () => {
    if (selected === 0) {
      setData(stationOne);
    } else if (selected === 1) {
      setData(stationTwo);
    } else if (selected === 2) {
      setData(stationThree);
    } else if (selected === 3) {
      setData(stationFour);
    }
  };

  useEffect(() => {
    setSelected(data);
    
  }, [data]);

  useEffect(() => {
    setStation();
  }, [selected]);

  return (
    <Container>
      <Stack direction={"row"} sx={{ mb: 4 }}>
        <Stack
          direction={"column"}
          sx={{ bgcolor: "#eeeeee", mt: 2, pt: 1, pl: 2, pr: 2 }}
          width={"35%"}
          height={"fit-content"}
          spacing={-3}
          mr={8}
        >
          <Typography sx={{ mb: 3 }}>Current Reading</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box height={"fit-content"}>
              <Typography>RATE 1</Typography>
            </Box>
            <p className={styles.testFont}>
              {Data === null || Object.keys(Data).length === 0
                ? null
                : Data.current_reading.rate_one}
            </p>
          </Box>
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Divider sx={{ mb: 2, bgcolor: "black" }}></Divider>
            <Divider sx={{ mb: 4, bgcolor: "black" }}></Divider>
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box height={"fit-content"}>
              <Typography>RATE 2</Typography>
            </Box>
            <p className={styles.testFont}>
              {Data === null || Object.keys(Data).length === 0
                ? null
                : Data.current_reading.rate_two}
            </p>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          sx={{ bgcolor: "#eeeeee", mt: 2, pt: 2, pl: 2, pr: 2, mr: 8 }}
          width={"35%"}
          spacing={-2}
        >
          <Typography sx={{ mb: 2 }}>Energy Consumption</Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "10px", pt: 1, pb: 1 }}>LOW</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "linear-gradient(to right, grey 75%, red 50%)",
                borderRadius: "5px",
                p: 1,
                justifyContent: "space-between",
              }}
              width={"100%"}
            >
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[0]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[1]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[2]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[3]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[4]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.low.toString().split("")[5]}
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  color: "black",
                  p: 0.5,
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
                width={"4%"}
                height={"fit-content"}
              >
                -
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: 1,
                pt: 1,
                pb: 2,
              }}
              width={"80%"}
            >
              <Typography sx={{ mr: 3, fontSize: "10px" }}>10,000</Typography>
              <Typography sx={{ mr: 4, fontSize: "10px" }}>1,000</Typography>
              <Typography sx={{ mr: 5, fontSize: "10px" }}>100</Typography>
              <Typography sx={{ mr: 6, fontSize: "10px" }}>10</Typography>
              <Typography sx={{ mr: 7, fontSize: "10px" }}>1</Typography>
              <Typography sx={{ fontSize: "10px" }}>0.1</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "linear-gradient(to right, grey 75%, red 50%)",
                borderRadius: "5px",
                p: 1,
                justifyContent: "space-between",
              }}
              width={"100%"}
            >
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[0]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[1]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[2]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[3]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[4]}
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: 0.5,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {Data === null || Object.keys(Data).length === 0
                  ? null
                  : Data.energy_consumption.normal.toString().split("")[5]}
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  color: "black",
                  p: 0.5,
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
                width={"4%"}
                height={"fit-content"}
              >
                -
              </Box>
            </Box>
            <Typography sx={{ fontSize: "10px", pt: 1 }}>NORMAL</Typography>
          </Container>
        </Stack>
        <img src="left.svg" className={styles.arrow}></img>
      </Stack>
    </Container>
  );
}
