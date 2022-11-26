import React from "react";
import Section, { ROUTES } from "./Section";
import { Routes, Route } from "react-router-dom";

function Medieval() {
  return (
    <>
      <div className="History min-h-screen flex flex-direction-column z-[-1]">
        {" "}
        <div className=" absolute z-[1] ">
          <Section />
        </div>
        <div className="Hbody min-h-screen  overflow-scroll mt-[1.37em] pb-[.2em] ml-[20em] pt-[.3em] mr-[.4em]">
          {" "}
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
    </>
  );
}
export default Medieval;
