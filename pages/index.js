import Navbar from "./Navbar";
import Bulletin from "./Bulletin";
import SideBar from "./Sidebar";
import Appbar from "./Appbar";
import GraphArea from "./Grapharea";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Home() {
  const [selected, setSelected] = useState(0);

  // update the data from child component (based on the station selected)
  const handleData = (data) => {
    setSelected(data);

    console.log(data);
  };

  // useEffect used to make sure that the data sent to the Bulletin component is updated
  // whenever the data from the Sidebar component is updated

  useEffect(() => {
    console.log("data", selected);
  }, [selected]);

  return (
    <>
      <Appbar />
      <Navbar />
      <Stack direction={"row"}>
        <SideBar sendDataToParent={handleData} />
        <Stack direction={"column"} sx={{ width: "1" }}>
          <Bulletin data={selected} />
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
                <GraphArea data={selected} i={1} />
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
                <GraphArea data={selected} i={2} />
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
