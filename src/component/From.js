import React, { useState } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./style.css";

export default function Form({
  name,
  age,
  email,
  number,
  setName,
  setAge,
  setEmail,
  setNumber,
  registerApi,
}) {
  return (
    <div className="from-main-div">
      <div className="from-sub-div">
        <div className="from-heading-div">
          <h3>Create user</h3>
        </div>
        <Box
          component="form"
          // sx={{
          //   "& .MuiTextField-root": { m: 1, width: "25ch" },
          // }}
          noValidate
          autoComplete="off"
        >
          <div className="textField-main-div">
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                sx={{ width: "90%" }}
                required
                id="outlined-required"
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-submit-btn-div">
            <Button
              color="success"
              onClick={() => registerApi()}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
