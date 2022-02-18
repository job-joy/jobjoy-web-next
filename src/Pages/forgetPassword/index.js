import { TextField, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const ForgetPassword = () => {
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
            label="new PassWord"
            variant="outlined"
            style={{ margin: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="confirm"
            variant="outlined"
            style={{ margin: 5 }}
          />

          <Button variant="outlined" style={{ margin: 5 }}>
            <Link
              href={"/login"}
              style={{ textDecoration: "none", color: "black", font: "icon" }}
            >
              Save
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
