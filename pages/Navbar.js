import { Box, Button, Link, Stack, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      sx={{ bgcolor: "#bdbdbd", height: "58px" }}
    >
      <Link color="#424242" sx={{ ml: 2 }}>
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
        direction="row"
        sx={{
          bgcolor: "#bdbdbd",
          display: { md: "flex", xs: "none" },
        }}
        spacing={10}
      >
        {["Bulletin", "Chart", "Map", "Data", "Mobilize"].map((text) => (
          <Link key={text} underline="none" sx={{ cursor: "pointer" }}>
            <Typography sx={{ color: "#424242" }}>{text}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        direction="row"
        sx={{
          bgcolor: "#bdbdbd",
          display: { xs: "flex", md: "none" },
        }}
        spacing={2.5}
      >
        {["Bulletin", "Chart", "Map", "Data", "Mobilize"].map((text) => (
          <Link key={text} underline="none" sx={{ cursor: "pointer" }}>
            <Typography sx={{ color: "#424242", fontSize: "14px" }}>
              {text}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Button
        sx={{
          bgcolor: "#00bcd4",
          p: { sm: 2, xs: 1 },
          "&:hover": {
            backgroundColor: "#00bcd4",
          },
        }}
      >
        <Typography
          color="black"
          sx={{ fontSize: { xs: "12px", sm: "18px" } }}
        >
          Main Portal
        </Typography>
      </Button>
    </Stack>
  );
}
