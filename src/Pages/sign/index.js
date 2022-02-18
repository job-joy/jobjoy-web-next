import { TextField, Select, MenuItem, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Sign = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(90deg, rgba(47,87,147,1) 0%, rgba(208,138,137,1) 43%, rgba(110,102,139,1) 91%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            color="primary"
            style={{ margin: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="family"
            variant="outlined"
            style={{ margin: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="mobile"
            variant="outlined"
            style={{ margin: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            style={{ margin: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ margin: 5 }}
          />

          <Select
            style={{ width: "12%", margin: 5 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>woman</MenuItem>
            <MenuItem value={20}>men</MenuItem>
          </Select>
          <Button variant="outlined" style={{ margin: 5 }}>
            <Link
              href={"/login"}
              style={{ textDecoration: "none", color: "black", font: "icon" }}
            >
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Sign;
