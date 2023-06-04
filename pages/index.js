import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import GraphArea from "@/components/GraphArea";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <AppBar />
      <div className="body" style={{ display: "flex", direction: "row" }}>
        <SideBar />
        <div
          className="graphArea"
          style={{
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            id="graph2"
            style={{
              width: "40vh",
              height: "30vh",
              backgroundColor: "#bdbdbd",
              marginTop: "1vh",
            }}
          >
            <Typography variant="h4" color="initial">
              Field 1
            </Typography>
            <GraphArea />
            <Typography variant="h6" color="initial">
              Power Consumption
            </Typography>
          </div>
          <div
            id="graph2"
            style={{
              width: "40vh",
              height: "30vh",
              backgroundColor: "#bdbdbd",
              marginTop: "1vh",
            }}
          >
            <Typography variant="h4" color="initial">
              Field 2
            </Typography>
            <GraphArea />
            <Typography variant="h6" color="initial">
              Power Consumption
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
