import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
const providers = [
  {
    name: "github",
    Icon: GitHubIcon,
  },
  {
    name: "google",
    Icon: GoogleIcon,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const { push,asPath } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  if (status === "loading") {
    return (
      <Typography
        variant="h3"
        sx={{
          width: "98vw",
          height: "97vh",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Checking Authentication...
      </Typography>
    );
  }
  if (session) {
    setTimeout(() => {
      push("/");
    }, 1000);
    return (
      <Typography
        variant="h3"
        sx={{
          width: "98vw",
          height: "97vh",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Successfully Signed-In
      </Typography>
    );
  }
  const handleOAuthSignIn = (provider) => () => signIn(provider); //will not be redirected to anyotherpage.
  //database query will be executed here in "handleSubmit" it will check the password and email from db and if they match the page will redirect to he index page.
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`../../?session=true&email=${email}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        flexDirection: "column",
      }}
    >
      <Stack>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            style={{ display: "block", marginBottom: "5px" ,
            width: "195px",
            padding: "6px 16px",
            borderRadius: "4px",
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "1.75",
            letterSpacing: "0.02857em",
            marginLeft:'5px',
            border:'0',
            borderBottom:'2px solid Black'}}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            style={{ display: "block", marginBottom: "5px" ,
            width: "195px",
            padding: "6px 16px",
            borderRadius: "4px",
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "1.75",
            letterSpacing: "0.02857em",
            marginLeft:'5px',
            border:'0',
            borderBottom:'2px solid Black'}}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            type="submit"
            placeholder="SUBMIT"
            style={{
              display:'block',
              margin: "5px",
              textTransform: "uppercase",
              width: "230px",
              padding: "6px 16px",
              borderRadius: "4px",
              border: "0",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12'
            }}
          />
        </form>
      </Stack>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        OR
      </Typography>
      <Stack orientation="vertical">
        {providers.map(({ name, Icon }) => (
          <Button
            variant="contained"
            size="medium"
            key={name}
            startIcon={<Icon />}
            sx={{ margin: "5px", width: "230px", textTransform: "uppercase" }}
            onClick={handleOAuthSignIn(name)}
          >
            Sign in with {name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Signin;
