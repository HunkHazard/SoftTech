import { Box, Button, Link, Stack, Typography } from "@mui/material";
export default function Navbar({sendCompToParent}) {
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
        <Link underline="none" sx={{ cursor: "pointer" }} onClick={()=>{
          sendCompToParent(0);
        }}>
          <Typography sx={{ color: "#424242" }}>Bulletin</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }} onClick={()=>{
          sendCompToParent(1);
        }}>
          <Typography sx={{ color: "#424242" }}>Chart</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }} onClick={()=>{
          sendCompToParent(2);
        }}>
          <Typography sx={{ color: "#424242" }}>Map</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }} onClick={()=>{
          sendCompToParent(3);
        }}>
          <Typography sx={{ color: "#424242" }}>Data</Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }} onClick={()=>{
          sendCompToParent(4);
        }}>
          <Typography sx={{ color: "#424242" }}>Mobilize</Typography>
        </Link>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          bgcolor: "#bdbdbd",
          display: { xs: "flex", md: "none" },
        }}
        spacing={2.5}
      >
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242", fontSize: "14px" }}>
            Bulletin
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242", fontSize: "14px" }}>
            Chart
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242", fontSize: "14px" }}>
            Map
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography sx={{ color: "#424242", fontSize: "14px" }}>
            Data
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer", fontSize: "14px" }}>
          <Typography sx={{ color: "#424242", fontSize: "14px" }}>
            Mobilize
          </Typography>
        </Link>
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
