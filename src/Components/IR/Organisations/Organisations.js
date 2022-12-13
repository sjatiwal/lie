import React from "react";
import Section, { ROUTES } from "./Section";
import { Routes, Route } from "react-router-dom";

function Organisations() {
  return (
    <div>
      <div>
        {" "}
        <div className="IR z-[-1] flex flex-direction-column  ">
          <div className=" absolute z-[1] ">
            <Section />
          </div>

          <div className="IRbody h-screen  overflow-scroll  pb-[.5em]  ml-[20em] mt-[1.37em]  mr-[.4em]">
            <Routes>
              {ROUTES.map((item) => {
                return (
                  <React.Fragment key={`${item.name}`}>
                    <Route path={`${item.path}`} element={item.element}></Route>
                  </React.Fragment>
                );
              })}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organisations;
