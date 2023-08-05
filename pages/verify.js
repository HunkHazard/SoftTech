import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  Container,
  TextField,
  Checkbox,
} from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";

export default function Verify() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "85%",
          width: "70%",
          display: "flex",
          flexDirection: "row",
          bgcolor: "#f5f4f2",
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: "90%",
            mt: 2,
            bgcolor: "#83abeb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            sx={{
              bgcolor: "#f9e9b8",
              width: "20%",
              borderRadius: "10px",
              mt: 4,
              ml: 2,
              mb: 6,
            }}
          >
            <Typography
              sx={{
                color: "black",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              Login
            </Typography>
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <BeenhereIcon
              sx={{
                fontSize: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "30px", color: "#555c6c" }}>
              VERIFY
            </Typography>
            <Typography sx={{ fontSize: "30px", color: "#555c6c" }}>
              ACCOUNT
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "55%",
            height: "90%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "90%", textAlign: "center", mt: 2 }}>
            <Typography
              sx={{
                mt: 2,
                color: "#555c6c",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              We've sent an email with a verification code to xxxxxxx@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mt: 6,
              ml: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "#555c6c",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Code
            </Typography>
            <TextField
              sx={{
                mt: 1,
                width: "70%",
                bgcolor: "#d9d9d9",
                borderRadius: "16px",
              }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <Box
              sx={{ width: "70%", display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  bgcolor: "#f9e9b8",
                  width: "30%",
                  borderRadius: "10px",
                  mt: 8,
                }}
              >
                <Typography
                  sx={{
                    color: "#555c6c",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Verify
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 40,
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography>Having verifying issues?</Typography>
            <Link sx={{ color: "#555c6c" }}>Click Here</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
