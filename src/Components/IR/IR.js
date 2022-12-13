import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./IR.css";

import ForeignPolicy from "./ForeignPolicy/ForeignPolicy";
import Neighnourhood from "./Neighbourhood/Neighbourhood";
import Organisations from "./Organisations/Organisations";
import World from "./World/World";

function IR() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/foreign-policy/*" element={<ForeignPolicy />}></Route>
          <Route path="/neighbourhood/*" element={<Neighnourhood />}></Route>
          <Route path="/world/*" element={<World />}></Route>
          <Route path="/organisations/*" element={<Organisations />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default IR;
