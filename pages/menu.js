"use client";
import {
  Box,
  Container,
  Stack,
  Button,
  Link,
  Typography,
  Divider,
} from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AirIcon from "@mui/icons-material/Air";
import SpeedIcon from "@mui/icons-material/Speed";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Menu() {
  const menuItems1 = [
    {
      text: "Weather Stations",
      icon: <DeviceThermostatIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#cecece",
    },
    {
      text: "Energy Meters",
      icon: <ElectricalServicesIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#fdf8e9",
    },
    {
      text: "Air Quality Meter",
      icon: <AirIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#83abeb",
    },
  ];
  const menuItems2 = [
    {
      text: "Water Meter",
      icon: <SpeedIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#e9f0fb",
    },
    {
      text: "Gas Meter",
      icon: <SpeedIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#f9e9b8",
    },
    {
      text: "Having Issues, Click Here",
      icon: <ReportProblemIcon sx={{ fontSize: "50px" }} />,
      bgcolor: "#f8f8f8",
    },
  ];
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ width: "100%" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "75%" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            height: "50%",
          }}
        >
          {menuItems1.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", md: "32%" },
                height: "100%",
                bgcolor: item.bgcolor,
                mr: 1,
                cursor: "pointer",
                mb: { xs: 1, md: 0 },
              }}
              onClick={() => {
                if (item.text == "Weather Stations") {
                  window.location.href = "/";
                }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#424242",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: { md: "22px", sm: "18px", xs: "14px" },
                  }}
                >
                  {item.text}
                </Typography>
                {item.icon}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            height: "50%",
          }}
        >
          {menuItems2.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", md: "32%" },
                height: "100%",
                bgcolor: item.bgcolor,
                mr: 1,
                cursor: "pointer",
                mb: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#424242",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: { md: "22px", sm: "18px", xs: "14px" },
                  }}
                >
                  {item.text}
                </Typography>
                {item.icon}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "25%" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#cecece",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: { xs: "30%", md: "20%" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "60%",
              justifyContent: "center",
              ml: 3,
            }}
          >
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              Axxxxxxxxxx
            </Typography>
            <Link>
              <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                Purchase Upgrades
              </Typography>
            </Link>
          </Box>
          <AccountCircleOutlinedIcon
            sx={{
              fontSize: "100px",
              width: "40%",
              height: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          />
        </Box>
        <Divider sx={{ width: "100%", height: "5px", bgcolor: "grey" }} />
        <Link sx={{ mt: 4, ml: 3 }}>
          <Typography>View Account</Typography>
        </Link>
        <Box
          sx={{
            mt: { xs: 50, md: 75 },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ width: "30%", bgcolor: "#83abeb", borderRadius: "10px" }}
          >
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Update
            </Typography>
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
