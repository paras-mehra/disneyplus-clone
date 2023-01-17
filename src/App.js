import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Detail from "./Components/Detail";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
