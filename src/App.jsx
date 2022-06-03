import React from "react";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Main/Home";
import "./App.css";
import { Container } from "@mui/material";

export default function App() {
  return (
    <main>
      <Header />
      <Container fluid>
        <Home />
      </Container>
    </main>
  );
}
