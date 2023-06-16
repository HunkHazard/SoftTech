import React, { useState } from "react";
import { FormControl, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { stationData } from "./stationData"; // Import the stationData array

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {stationData.map((station) => (
          <MenuItem key={station.name} onClick={handleClose}>
            {station.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownMenu;
