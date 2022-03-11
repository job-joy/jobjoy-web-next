import React, { useCallback } from "react";
import Link from "next/link";

import { Button } from "@mui/material";

import Dynamic from "./dynamicInput";
import api from "../../axios-config/api";

const Controller = () => {
  const [valueInfoUser, setValueInfoUser] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    verificationCode: null,
    gender: "",
  });

  const [valid, setValid] = React.useState({
    firstName: false,
    lastName: false,
    password: false,
    verificationCode: false,
    gender: false,
  });

  const infoUser = (key) => (e) => {
    e.preventDefault();
    const { value } = e.target;

    switch (key) {
      case "firstName":
        value.length !== 0 && value.length < 2
          ? setValid((prev) => ({ ...prev, fristName: true }))
          : setValid((prev) => ({ ...prev, fristName: false }));

      case "lastName":
        value.length !== 0 && value.length < 4
          ? setValid((prev) => ({ ...prev, lastName: true }))
          : setValid((prev) => ({ ...prev, lastName: false }));

      case "verificationCode":
        value.length !== 0 && value.length < 2
          ? setValid((prev) => ({ ...prev, verificationCode: true }))
          : setValid((prev) => ({ ...prev, verificationCode: false }));
      case "password":
        value.length !== 0 && value.length < 5
          ? setValid((prev) => ({ ...prev, password: true }))
          : setValid((prev) => ({ ...prev, password: false }));
    }
    setValueInfoUser((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleGetInfoUser = useCallback(infoUser, [valueInfoUser]);

  const handleSign = async () => {
    api
      .post("users/signUp", {
        ...valueInfoUser,
        verificationCode: +valueInfoUser.verificationCode,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <Dynamic
        validation={valid}
        type={"text"}
        onChange={handleGetInfoUser("firstName")}
        label="firstName"
      />
      <Dynamic
        validation={valid}
        type={"text"}
        onChange={handleGetInfoUser("lastName")}
        label="lastName"
      />
      <Dynamic
        validation={valid}
        type={"number"}
        onChange={handleGetInfoUser("verificationCode")}
        label="verificationCode"
      />
      <Dynamic
        validation={valid}
        type={"select"}
        onChange={handleGetInfoUser("gender")}
        label="gender"
      />
      <Dynamic
        validation={valid}
        type={"text"}
        onChange={handleGetInfoUser("password")}
        label="password"
      />
      <Button variant="outlined" onClick={handleSign}>
        <Link href={"/login"}>Sign up</Link>
      </Button>
    </>
  );
};
export default Controller;
