import React, { useState } from "react";
import { FormControl, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
        <MenuItem onClick={handleClose}>Station 1</MenuItem>
        <MenuItem onClick={handleClose}>Station 2</MenuItem>
        <MenuItem onClick={handleClose}>Station 3</MenuItem>
        <MenuItem onClick={handleClose}>Station 4</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;
