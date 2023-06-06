import Navbar from "./Navbar";
import Bulletin from "./Bulletin";
import SideBar from "./Sidebar";
import Appbar from "./Appbar";
import GraphArea from "./Grapharea";
import { Container, Stack, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Appbar />
      <Navbar />
      <Stack direction={"row"}>
        <SideBar></SideBar>
        <Stack direction={"column"} sx={{ width: "1" }}>
          <Bulletin />
          <Stack direction={"row"} sx={{ width: "1" }}>
            <Container
              className="graphArea"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                id="graph2"
                style={{
                  width: "28vw",
                  height: "33vh",
                  backgroundColor: "#eeeeee",
                  marginTop: "1vh",
                  marginRight: "4rem",
                }}
              >
                <Typography variant="h5" color="initial">
                  Field 1 Chart
                </Typography>
                <GraphArea />
                <Typography
                  variant="h6"
                  color="initial"
                  style={{ textAlign: "center" }}
                >
                  IoT based energy meter reading
                </Typography>
              </div>
              <div
                id="graph2"
                style={{
                  width: "28vw",
                  height: "30vh",
                  backgroundColor: "#eeeeee",
                  marginTop: "1vh",
                }}
              >
                <Typography variant="h5" color="initial">
                  Field 2 Chart
                </Typography>
                <GraphArea />
                <Typography
                  variant="h6"
                  color="initial"
                  style={{ textAlign: "center" }}
                >
                  IoT based energy meter reading
                </Typography>
              </div>
            </Container>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
