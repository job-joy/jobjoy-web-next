import React, { useCallback } from "react";
import Link from "next/link";

import { Button } from "@mui/material";

import Dynamic from "../sign/dynamicInput";
import styles from "../styles/Login.module.css";
import api from "../../axios-config/api";

const Login = () => {
  const [login, setLogin] = React.useState({});

  const handleGetInfoUser = (key: any) => (e: any) => {
    setLogin((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const userLogin = useCallback(handleGetInfoUser, [login]);

  const handleLogin = async () => {
    api.post("users/login", login);
  };

  return (
    <>
      <div className={styles.pageLogin}>
        <div className={styles.boxLogin}>
          <Dynamic
            label="mobileNumber"
            onChange={userLogin("mobileNumber")}
            type="number"
          />

          <Dynamic
            label="password"
            onChange={userLogin("password")}
            type="text"
          />
          <Button variant="outlined" onClick={handleLogin}>
            <Link href={"/posts"}>Login</Link>
          </Button>

          <Button variant="outlined">
            <Link href={"/forgetPassword"}>ForGet Password</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Login;
