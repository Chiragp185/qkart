import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>

      {!hasHiddenAuthButtons && (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>{
            history.push("/");
          }}
        >
          Back to explore
        </Button>
      )}
      {hasHiddenAuthButtons &&
        (localStorage.getItem("username") ? (
          <Stack spacing={2} direction="row">
            <Button className="button" variant="text">
            <Avatar src="avatar.png" alt={localStorage.getItem("username")}/>
            <p style={{color:"black", margin:"2px"}}> {localStorage.getItem("username")}</p>
            </Button>
            <Button className="button" variant="contained" onClick={
              ()=>
              {
                localStorage.clear();
                window.location.reload();
              }
            }>
              LOGOUT
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} direction="row">
            <Button className="button" variant="text" onClick={()=>{
                history.push("/login");

            }}>
              LOGIN
            </Button>
            <Button className="button" variant="contained" onClick={
              ()=>{
                history.push("/register");
              }
            }>
              REGISTER
            </Button>
          </Stack>
        ))}
    </Box>
  );
};

export default Header;
