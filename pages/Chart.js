import {
  Container,
  Stack,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import styles from "../styles/Home.module.css";

const chartContainerStyle = {
  bgcolor: "#eeeeee",
  mt: 2,
  pt: 1,
  pl: 2,
  pr: 2,
};

const chartBoxStyle = {
  display: "flex",
  flexDirection: "row",
};

const chartDividerStyle = {
  mb: 2,
  bgcolor: "black",
};

const energyContainerStyle = {
  display: "flex",
  flexDirection: "column",
};

const energyGradientBoxStyle = {
  display: "flex",
  flexDirection: "row",
  background: "linear-gradient(to right, grey 75%, red 50%)",
  borderRadius: "5px",
  p: 1,
  justifyContent: "space-between",
};

const energyValueBoxStyle = {
  bgcolor: "black",
  color: "white",
  p: 0.5,
  fontSize: "22px",
  fontWeight: "bold",
};

export default function Chart() {
  return (
    <Container>
      <Stack direction={"row"}>
        <Stack
          direction={"column"}
          sx={{ ...chartContainerStyle, width: "35%", height: "fit-content", spacing: -3, mr: 8 }}
        >
          <Typography sx={{ mb: 3 }}>Air Quality</Typography>
          <Box sx={chartBoxStyle}>
            <Box height={"fit-content"}>
              <Typography>Current AQI</Typography>
            </Box>
            <CircularProgress value={60} />
          </Box>
          <Container sx={energyContainerStyle}>
            <Divider sx={chartDividerStyle} />
            <Divider sx={chartDividerStyle} />
          </Container>
          <Box sx={chartBoxStyle}>
            <Box height={"fit-content"}>
              <Typography>RATE 2</Typography>
            </Box>
            <p className={styles.testFont}>1234</p>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          sx={{ ...chartContainerStyle, width: "35%", spacing: -2, mr: 8 }}
        >
          <Typography sx={{ mb: 2 }}>Energy Consumption</Typography>
          <Container sx={energyContainerStyle}>
            <Typography sx={{ fontSize: "10px", pt: 1, pb: 1 }}>LOW</Typography>
            <Box sx={energyGradientBoxStyle} width={"100%"}>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box
                sx={{
                  ...energyValueBoxStyle,
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
            <Box sx={{ ...chartBoxStyle, ml: 1, pt: 1, pb: 2 }} width={"80%"}>
              <Typography sx={{ mr: 3, fontSize: "10px" }}>10,000</Typography>
              <Typography sx={{ mr: 4, fontSize: "10px" }}>1,000</Typography>
              <Typography sx={{ mr: 5, fontSize: "10px" }}>100</Typography>
              <Typography sx={{ mr: 6, fontSize: "10px" }}>10</Typography>
              <Typography sx={{ mr: 7, fontSize: "10px" }}>1</Typography>
              <Typography sx={{ fontSize: "10px" }}>0.1</Typography>
            </Box>
            <Box sx={energyGradientBoxStyle} width={"100%"}>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box sx={energyValueBoxStyle}>4</Box>
              <Box
                sx={{
                  ...energyValueBoxStyle,
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
