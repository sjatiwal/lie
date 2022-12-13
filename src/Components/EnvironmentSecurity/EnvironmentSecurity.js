import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./ES.css";

import Environment from "./Environment/Environment";
import Security from "./Security/Security";

function EnvironmentSecurity() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/environment/*" element={<Environment />}></Route>
          <Route path="/security/*" element={<Security />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default EnvironmentSecurity;
