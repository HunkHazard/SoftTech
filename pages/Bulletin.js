import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Bulletin({ data }) {
  const [Data, setData] = useState(null);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <Container>
      <Stack
        sx={{
          mb: { md: 6, sm: 3, xs: 3 },
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            bgcolor: "#eeeeee",
            borderRadius: "16px",
            mt: { md: 6, xs: 3 },
            ml: { md: 4, sm: 2, xs: 2 },
            mr: { md: 8, sm: 4 },
            p: 1,
            width: { md: "35%", sm: "40%", xs: "80%" },
          }}
          height={"fit-content"}
        >
          <Typography sx={{ mb: 3 }}>Current Reading</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 2,
                mr: { md: 4, sm: 2, xs: 7 },
              }}
            >
              <Typography>RATE</Typography>
              <Typography sx={{ textAlign: "center" }}>1</Typography>
            </Box>
            <Typography
              className={styles.testFont}
              sx={{ fontSize: { md: "3rem", xs: "2rem" } }}
            >
              {Data === null || Object.keys(Data).length === 0
                ? null
                : Data.current_reading.rate_one}
            </Typography>
          </Box>
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Divider sx={{ mb: 2, mt: 2, bgcolor: "black" }}></Divider>
            <Divider sx={{ mb: 2, bgcolor: "black" }}></Divider>
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 2,
                mr: { md: 4, sm: 2, xs: 7 },
              }}
            >
              <Typography>RATE</Typography>
              <Typography sx={{ textAlign: "center" }}>2</Typography>
            </Box>
            <Typography
              className={styles.testFont}
              sx={{ pb: 3, fontSize: { md: "3rem", xs: "2rem" } }}
            >
              {Data === null || Object.keys(Data).length === 0
                ? null
                : Data.current_reading.rate_two}
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            bgcolor: "#eeeeee",
            mt: { md: 6, xs: 3 },
            ml: { xs: 2 },
            p: 1,
            mr: { md: 8, sm: 4 },
            borderRadius: "16px",
            width: { md: "35%", sm: "40%", xs: "80%" },
          }}
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
                background: "linear-gradient(to right, grey 75%, red 25%)",
                borderRadius: "9px",
                p: 1,
                justifyContent: "space-between",
                mb: 3,
              }}
              width={"100%"}
            >
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: 0.35,
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
                width={"4%"}
              >
                -
              </Box>
            </Box>
            {/* <Box
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
            </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "linear-gradient(to right, grey 75%, red 50%)",
                borderRadius: "9px",
                p: 1,
                justifyContent: "space-between",
              }}
              width={"100%"}
            >
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
                  p: { md: 0.5, sm: 0.4, xs: 0.6 },
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "22px", sm: "18px", xs: "22px" },
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
      </Stack>
    </Container>
  );
}