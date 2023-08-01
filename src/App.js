import React from "react";
// import { Router } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import bankImage from "./bank.jpg";
import Footer from "./Component/Footer";
import Bodytext from "./Component/bodytext";

// import Dashboard from "./Component/Dashboard";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Bodytext/>
      <div className="main-c">
        <div className="bodyimg">
          <img src={bankImage} alt="bank-pic" />
        </div>
        <div className="content-container">
           <Login />
        </div>
      </div>
      <Footer />
      </>
  );
}
