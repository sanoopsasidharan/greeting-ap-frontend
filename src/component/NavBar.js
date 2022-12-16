import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./style.css";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            backgroundColor="red"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            <AcUnitIcon />
          </Typography>
          <h1 className="navbtn">sanoop</h1>
          <Button sx={{ margin: 5 }} className="navbtn" color="inherit">
            Home
          </Button>
          <Button sx={{ margin: 5 }} className="navbtn" color="inherit">
            Users
          </Button>
          <Button sx={{ margin: 5 }} className="navbtn" color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
