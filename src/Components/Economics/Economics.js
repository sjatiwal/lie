import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./Economics.css";

import Agriculture from "./Agriculture/Agriculture";
import Economy from "./Economy/Economy";
import Investment from "./Investment/Investment";
import Liberalization from "./Liberalization/Liberalization";

function Economics() {
  return (
    <div>
      {" "}
      <div className="sticky top-14 z-[2]">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/economics/*" element={<Economy />}></Route>
          <Route path="/lpg/*" element={<Liberalization />}></Route>
          <Route path="/investment/*" element={<Investment />}></Route>
          <Route path="/agriculture/*" element={<Agriculture />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Economics;
