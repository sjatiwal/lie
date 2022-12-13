import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./SCITECH.css";

import Science from "./Science/Science";
import Technology from "./Technology/Technology";

function SCITECH() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/science/*" element={<Science />}></Route>
          <Route path="/technology/*" element={<Technology />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default SCITECH;
