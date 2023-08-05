import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeSelectedComponent } from "../store/slices/selectedComponentSlice";

const components = ["Bulletin", "Chart", "Map", "Data", "Mobilize"];

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
      sx={{ bgcolor: "#bdbdbd", height: "500" }}
    >
      <Link color={"#424242"} sx={{ ml: 2 }}>
        <Typography
          sx={{
            color: "#424242",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: { md: "22px", sm: "18px", xs: "14px" },
          }}
        >
          Energy Meter
        </Typography>
      </Link>
      <Stack
        direction={"row"}
        sx={{ bgcolor: "#bdbdbd", display: { md: "flex", xs: "none" } }}
        spacing={10}
      >
        {components.map((component, index) => (
          <Link
            key={index}
            underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(changeSelectedComponent(index));
            }}
          >
            <Typography sx={{ color: "#424242" }}>{component}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          bgcolor: "#bdbdbd",
          display: { xs: "flex", md: "none" },
        }}
        spacing={2.5}
      >
        {components.map((component, index) => (
          <Link
            key={component}
            underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(changeSelectedComponent(index));
            }}
          >
            <Typography sx={{ color: "#424242", fontSize: "14px" }}>
              {component}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Button
        sx={{
          bgcolor: "#00b0ff",
          p: { sm: 2, xs: 1 },
          "&:hover": {
            backgroundColor: "#00b0ff",
          },
        }}
      >
        <Typography
          color={"black"}
          sx={{ fontSize: { xs: "12px", sm: "18px " } }}
        >
          Main Portal
        </Typography>
      </Button>
    </Stack>
  );
}
