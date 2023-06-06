import { Box, Button, Link, Stack, Typography } from "@mui/material";
export default function Navbar() {
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
      sx={{ bgcolor: "#bdbdbd", height: "500" }}
    >
      <Link color={"#424242"} sx={{ ml: 2 }}>
        <Typography variant="h5" sx={{ color: "#424242", cursor: "pointer" }}>
          Energy Meter
        </Typography>
      </Link>
      <Stack direction={"row"} sx={{ bgcolor: "#bdbdbd" }} spacing={10}>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242" }}>Bulletin</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242" }}>Chart</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242" }}>Map</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242" }}>Data</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242" }}>Mobilize</Typography>
        </Link>
      </Stack>
      <Button sx={{ bgcolor: "#00b0ff", p: 2 }}>
        <Typography color={"black"}>Main Portal</Typography>
      </Button>
    </Stack>
  );
}
