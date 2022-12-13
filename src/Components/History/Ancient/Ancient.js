import React from "react";
import Section, { ROUTES } from "./Section";
import { Routes, Route } from "react-router-dom";

function Ancient() {
  return (
    <>
      <div className="History z-[-1] flex flex-direction-column">
        <div className=" absolute z-[1] ">
          <Section />
        </div>

        <div className="Hbody h-screen overflow-scroll bg-gray-100 w-[70%] pl-[.5em] pr-[1em] pb-[1em] ml-[.5em] mt-[1.37em] mr-[.4em]">
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
export default Ancient;
