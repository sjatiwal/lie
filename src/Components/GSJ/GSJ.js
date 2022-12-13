import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./GSJ.css";

import Governance from "./Governance/Governance";
import SocialJustice from "./SocialJustice/SocialJustice";

function GSJ() {
  return (
    <>
      <div className="GSJ mb-[0]">
        {" "}
        <div className="sticky top-14 z-[2]">
          <Header />
        </div>
        <div>
          {" "}
          <Routes>
            <Route path="/governance/*" element={<Governance />}></Route>
            <Route path="/social-justice/*" element={<SocialJustice />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default GSJ;
