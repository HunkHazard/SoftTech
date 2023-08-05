import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "admin",
      confirmPassword: "admin",
    },
  });

  async function sendData(data) {
    if (data.password === data.confirmPassword) {
      const res = await signIn("credentials", {
        password: data.password,
        redirect: true,
        callbackUrl: "/menu", // Where to redirect after log in
      });
    } else {
      console.log("Passwords dont match");

      setError("password", {
        type: "string",
        message: "Passwords dont match",
      });
    }
  }

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
              Back
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
            <LockOpenIcon
              sx={{
                fontSize: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f9e9b8",
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
              ENTER
            </Typography>
            <Typography sx={{ fontSize: "30px", color: "#555c6c" }}>
              PASSWORD
            </Typography>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(sendData)}>
          <Box
            sx={{
              width: "55%",
              height: "90%",
              mt: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 2,
                ml: 2,
              }}
            >
              <Typography sx={{ fontSize: "20px", color: "#555c6c" }}>
                Password
              </Typography>
              <TextField
                {...register("password", {
                  required: true,
                })}
                sx={{
                  mt: 1,
                  width: "70%",
                  bgcolor: "#d9d9d9",
                  borderRadius: "16px",
                }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 2,
                ml: 2,
              }}
            >
              <Typography sx={{ fontSize: "20px", color: "#555c6c" }}>
                Confirm Password
              </Typography>
              <TextField
                {...register("confirmPassword", {
                  required: true,
                })}
                sx={{
                  mt: 1,
                  width: "70%",
                  bgcolor: "#d9d9d9",
                  borderRadius: "16px",
                }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mt: 2,
                alignItems: "center",
              }}
            >
              <Checkbox sx={{ ml: 2, color: "#f9e9b8" }} />
              <Typography sx={{ fontSize: "14px", color: "#555c6c" }}>
                Keep me logged in
              </Typography>
            </Box>
            <Box sx={{ width: "90%", textAlign: "center" }}>
              <Typography
                sx={{
                  mt: 6,
                  fontSize: "14px",
                  color: "#555c6c",
                  fontWeight: "bold",
                }}
              >
                By creating an account, you agree to the Terms of Service and
                Privacy Policy
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mr: 2,
                mt: 30,
              }}
            >
              <Button
                sx={{ bgcolor: "#f9e9b8", width: "20%", borderRadius: "10px" }}
                type="submit"
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    color: "#555c6c",
                    fontWeight: "bold",
                  }}
                >
                  Next
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
