import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./PIIS.css";

import IndianSociety from "./IndianSociety/IndianSociety";
import PostIndependence from "./PostIndependence/PostIndependence";

function PIIS() {
  return (
    <>
      <div className="PIIS mb-[0]">
        {" "}
        <div className="sticky top-14 z-[2]">
          <Header />
        </div>
        <div>
          {" "}
          <Routes>
            <Route
              path="/post-independence/*"
              element={<PostIndependence />}
            ></Route>
            <Route path="/indian-society/*" element={<IndianSociety />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default PIIS;
