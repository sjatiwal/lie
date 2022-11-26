import React from "react";
import Section, { ROUTES } from "./Section";
import { Routes, Route } from "react-router-dom";

function Modern() {
  return (
    <>
      <div className="History flex flex-direction-column min-h-screen z-[-1]">
        <div className=" absolute z-[1] h-screen overflow-scroll ">
          <Section />
        </div>

        <div className="Hbody h-screen overflow-scroll pb-[.2em] pt-[1.7em] ml-[20em]  mr-[.4em]">
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
export default Modern;
