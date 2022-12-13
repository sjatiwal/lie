import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./History.css";

import Ancient from "./Ancient/Ancient";
import Medieval from "./medieval/Medieval";
import Modern from "./Modern/Modern";
import World from "./World/World";

function History() {
  return (
    <>
      <div className="AllHistory mb-[0]">
        {" "}
        <div className="sticky top-14 z-[2]">
          <Header />
        </div>
        <div>
          {" "}
          <Routes>
            <Route path="/ancient/*" element={<Ancient />}></Route>
            <Route path="/medieval/*" element={<Medieval />}></Route>
            <Route path="/modern/*" element={<Modern />}></Route>
            <Route path="/world/*" element={<World />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
export default History;
