import React, { useState } from "react";
import { FormControl, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { changeSelectedStation } from "../store/slices/selectedStationSlice";

const options = ["Station 1", "Station 2", "Station 3", "Station 4"];

function DropdownMenu() {
  const dispatch = useDispatch();
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
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                dispatch(changeSelectedStation(index));
                handleClose();
              }}
            >
              {option}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default DropdownMenu;
