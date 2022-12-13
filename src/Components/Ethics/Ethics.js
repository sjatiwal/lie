import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./Ethics.css";

import Governance from "./Governance/Governance";
import Quality from "./Quality/Quality";
import Thinkers from "./Thinkers/Thinkers";

function Ethics() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/quality/*" element={<Quality />}></Route>
          <Route path="/governance/*" element={<Governance />}></Route>
          <Route path="/thinkers/*" element={<Thinkers />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Ethics;
