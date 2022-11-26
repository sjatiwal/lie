import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./Geography.css";

import Disaster from "./Disaster/Disaster";
import HumEco from "./HumEco/HumEco";
import Physical from "./Physical/Physical";
import ResLoc from "./ResLoc/ResLoc";

export default function Geography() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/physical/*" element={<Physical />}></Route>
          <Route path="/resource-location/*" element={<ResLoc />}></Route>
          <Route path="/natural-disaster/*" element={<Disaster />}></Route>
          <Route path="/human-economic/*" element={<HumEco />}></Route>
        </Routes>
      </div>
    </div>
  );
}
