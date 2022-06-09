import React from "react";
import {Container } from "@mui/material";
import HeaderLogin from "../components/headers/HeaderLogin";

export default function Log() {

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        padding: "0 !important",
        backgroundColor: "common.white",
      }}
    >
      <HeaderLogin />
    </Container>
  );
}
