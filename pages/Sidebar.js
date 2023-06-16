import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavigationIcon from "@mui/icons-material/Navigation";
import { stationData } from "./stationData";
import { useState, useEffect } from "react";

export default function SideBar({ sendDataToParent }) {
  const [selected, setSelected] = useState(0);
  const [stations, setStations] = useState(stationData);

  useEffect(() => {
    sendStationData(selected);
  }, [selected]);

  const sendStationData = (station) => {
    sendDataToParent(stations[station]);
  };

  return (
    <div
      className="drawer"
      style={{ height: "92vh", width: "20vw", backgroundColor: "#bdbdbd" }}
    >
      <CssBaseline />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {stations.map((station, index) => (
            <ListItem
              key={station.name}
              style={{
                boxSizing: "border-box",
                padding: "0px",
                marginTop: "20px",
                borderBottom: selected === index ? "5px solid Yellow" : "none",
              }}
              onClick={() => setSelected(index)}
            >
              <ListItemButton style={{ backgroundColor: "#e0e0e0" }}>
                <ListItemIcon>
                  <NavigationIcon style={{ transform: "rotate(90deg)" }} />
                </ListItemIcon>
                <ListItemText primary={station.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
