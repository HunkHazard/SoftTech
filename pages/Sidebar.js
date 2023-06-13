import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useState, useEffect } from "react";

export default function SideBar({ sendDataToParent }) {
  const [selected, setSelected] = useState(0);
  const [stationOne, setStationOne] = useState(() => {
    let data = {};
    data["current_reading"] = {
      rate_one: 1990,
      rate_two: 2000,
    };
    data["energy_consumption"] = {
      low: 345367,
      normal: 789456,
    };
    data["field_one"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [4, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    data["field_two"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    return data;
  });

  const [stationTwo, setStationTwo] = useState(() => {
    let data = {};
    data["current_reading"] = {
      rate_one: 987,
      rate_two: 654,
    };
    data["energy_consumption"] = {
      low: 123456,
      normal: 789012,
    };
    data["field_one"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    };
    data["field_two"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    };

    return data;
  });

  const [stationThree, setStationThree] = useState(() => {
    let data = {};
    data["current_reading"] = {
      rate_one: 13579,
      rate_two: 24680,
    };
    data["energy_consumption"] = {
      low: 975310,
      normal: 864209,
    };
    data["field_one"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [2, 4, 6, 8, 10, 8, 6, 4, 2, 0],
    };
    data["field_two"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 3, 5, 7, 9, 10, 8, 6, 4, 2],
    };

    return data;
  });

  const [stationFour, setStationFour] = useState(() => {
    let data = {};
    data["current_reading"] = {
      rate_one: 1111,
      rate_two: 2222,
    };
    data["energy_consumption"] = {
      low: 333333,
      normal: 444444,
    };
    data["field_one"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [5, 4, 3, 2, 1, 1, 2, 3, 4, 5],
    };
    data["field_two"] = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    };

    return data;
  });

  useEffect(() => {
    sendStationData(selected);
  }, [selected],[]);


  const sendStationData = (station) => {
    switch (station) {
      case 0:
        sendDataToParent(stationOne);
        break;
      case 1:
        sendDataToParent(stationTwo);
        break;
      case 2:
        sendDataToParent(stationThree);
        break;
      case 3:
        sendDataToParent(stationFour);
        break;
    }
  };

  return (
    <div
      className="drawer"
      style={{ height: "92vh", width: "20vw", backgroundColor: "#bdbdbd" }}
    >
      <CssBaseline />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Station 1", "Station 2", "Station 3", "Station 4"].map(
            (text, index) => (
              <ListItem
                key={text}
                style={{
                  boxSizing: "border-box",
                  padding: "0px",

                  marginTop: "20px",

                  borderBottom:
                    selected === index ? "5px solid Yellow" : "none",
                }}
                onClick={() => {
                  // sendStationData(index);
                  setSelected((prev) => {
                    return index;
                  });
                }}
              >
                <ListItemButton style={{ backgroundColor: "#e0e0e0" }}>
                  <ListItemIcon>
                    <NavigationIcon style={{ transform: "rotate(90deg)" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </div>
  );
}
