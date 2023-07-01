import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavigationIcon from "@mui/icons-material/Navigation";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedStation } from "./store/slices/selectedStationSlice";

export default function SideBar() {
  const stations = ["Station 1", "Station 2", "Station 3", "Station 4"];
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selectedStation.value);

  return (
    <div
      className="drawer"
      style={{ height: "92vh", width: "20vw", backgroundColor: "#bdbdbd" }}
    >
      <CssBaseline />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {stations.map((text, index) => (
            <ListItem
              key={text}
              style={{
                boxSizing: "border-box",
                padding: "0px",

                marginTop: "20px",

                borderBottom: selected === index ? "5px solid Yellow" : "none",
              }}
              onClick={() => {
                dispatch(changeSelectedStation(index));
              }}
            >
              <ListItemButton style={{ backgroundColor: "#e0e0e0" }}>
                <ListItemIcon>
                  <NavigationIcon style={{ transform: "rotate(90deg)" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
