import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HomeOne from "./components/HomeOne";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeOne />
      <Footer />
    </>
  );
}

export default App;
