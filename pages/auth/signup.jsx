import React from "react";
import { Stack, Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
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


function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const { push,asPath } = useRouter();
  const router = useRouter();
  //database queries to be entered here.

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`../../?session=true&email=${email}`);
  };
  
  const handleOAuthSignIn = (provider) => () => signIn(provider); //will not be redirected to anyotherpage.
  const checkPassword = () => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const messageElement = document.getElementById("message");

    if (passwordInput.value === confirmPasswordInput.value) {
      messageElement.style.color = "green";
      messageElement.innerHTML = "Matching";
      return true;
    } else {
      messageElement.style.color = "red";
      messageElement.innerHTML = "Not Matching";
      return false;
    }
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
            type="text"
            placeholder="FIRST NAME"
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LAST NAME"
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onChange={(e)=>setLastName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="PHONE NUMBER"
            id="phone"
            name="phone"
            pattern="[0][1-9]{3}-[0-9]{7}"
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onChange={(e)=>setPhone(e.target.value)}
          />
          <small
            id="passwordHelpBlock"
            className="form-text text-muted"
            style={{ fontSize: "x-small", display: "block" ,marginLeft: "10px" }}
          >
            e.g 0123-4567890
          </small>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            id='password'
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onKeyUp={checkPassword}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            type="password"
            id='confirm_password'
            placeholder="CONFIRM PASSWORD"
            style={{
              display: "block",
              marginBottom: "5px",
              width: "195px",
              padding: "6px 16px",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              marginLeft: "5px",
              border: "0",
              borderBottom: "2px solid Black",
            }}
            required
            onKeyUp={checkPassword}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <span id='message' style={{marginLeft:'10px'}}></span>
          <input
            type="submit"
            placeholder="SUBMIT"
            style={{
              display: "block",
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
              boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12",
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
}

export default signup;
