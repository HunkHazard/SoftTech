import Navbar from "./Navbar";
import Bulletin from "./Bulletin";
import SideBar from "./Sidebar";
import Appbar from "./Appbar";
import Dropdown from "./Dropdown";
import { Box } from "@mui/system";
import GraphArea from "./Grapharea";
import styles from "../styles/Home.module.css";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import { useSelector } from "react-redux";

function Home() {
  const station = useSelector((state) => state.selectedStation.value);
  const component = useSelector((state) => state.selectedComponent.value);

  return (
    <Stack>
      <Appbar />
      <Navbar />
      {/* <h1>{station+""+component}</h1> */}
      <Stack direction={"row"}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <SideBar />
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Dropdown />
        </Box>

        {component == 0 ? (
          <Stack direction={"column"} sx={{ width: 1 }}>
            <Bulletin />
            <Container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Stack
                id="graph2"
                sx={{
                  backgroundColor: "#eeeeee",
                  borderRadius: "16px",
                  p: 1,
                  mr: { md: 8, sm: 4 },
                  ml: { md: 4, sm: 2, xs: 2 },
                  width: { md: "35%", sm: "40%", xs: "80%" },
                  mb: { xs: 3, sm: 0 },
                }}
              >
                <Typography>Field 1 Chart</Typography>
                <GraphArea i={1} />
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                  IoT based energy meter reading
                </Typography>
              </Stack>
              <Stack
                id="graph2"
                // style={{
                //   width: "28vw",
                //   height: "30vh",
                //   backgroundColor: "#eeeeee",
                //   marginTop: "1vh",
                // }}
                sx={{
                  bgcolor: "#eeeeee",
                  borderRadius: "16px",
                  p: 1,
                  mr: { md: 8, sm: 4 },
                  ml: { xs: 2 },
                  width: { md: "35%", sm: "40%", xs: "80%" },
                }}
              >
                <Typography>Field 2 Chart</Typography>
                <GraphArea i={2} />
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                  IoT based energy meter reading
                </Typography>
              </Stack>
            </Container>
          </Stack>
        ) : component == 1 ? (
          <Graph />
        ) : null}
      </Stack>
    </Stack>
  );
}

export default Home;
