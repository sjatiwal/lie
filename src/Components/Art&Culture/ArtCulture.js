import React from "react";
import { Routes, Route } from "react-router-dom";

import Architecture from "./Architecture/Architecture";
import ArtForms from "./Art Forms/ArtForms";
import Movement from "./Movement/Movement";
import Header from "./Header";
import Literature from "./Literature/Literature";
import "./Art.css";

function ArtCulture() {
  return (
    <>
      <div>
        {" "}
        <div className="sticky top-14 z-[2]">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/art-forms/*" element={<ArtForms />}></Route>
            <Route path="/literature/*" element={<Literature />}></Route>
            <Route path="/architecture/*" element={<Architecture />}></Route>
            <Route path="/Movement/*" element={<Movement />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ArtCulture;
