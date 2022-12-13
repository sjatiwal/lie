import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./Polity.css";

import Bodies from "./Bodies/Bodies";
import Constitution from "./Constitution/Constitution";
import Judiciary from "./Judiciary/Judiciary";
import UnionState from "./UnionState/UnionState";

function Polity() {
  return (
    <>
      <div className="Polity mb-[0]">
        {" "}
        <div className="sticky top-14 z-[2]">
          <Header />
        </div>
        <div>
          {" "}
          <Routes>
            <Route path="/constitution/*" element={<Constitution />}></Route>
            <Route path="/union-state/*" element={<UnionState />}></Route>
            <Route path="/judiciary/*" element={<Judiciary />}></Route>
            <Route path="/bodies/*" element={<Bodies />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Polity;
