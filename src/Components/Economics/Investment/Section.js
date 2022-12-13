import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import DIM from "./content/DIM";
import FIM from "./content/FIM";
import Investment from "./content/Investment";
import PPP from "./content/PPP";

export const ROUTES = [
  {
    path: "investment",
    element: <Investment />,
    name: "Investment",
  },
  {
    path: "domestic-investment-models",
    element: <DIM />,
    name: "DIM",
  },
  {
    path: "ppp-types",
    element: <PPP />,
    name: "Types of PPP",
  },
  {
    path: "foreign-investment-models",
    element: <FIM />,
    name: "FIM",
  },
];
function Section() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      {" "}
      <div
        onClick={() => setDisplay(!display)}
        className="  text-[.7rem] bg-slate-400 pl-[.8em] pt-[.3em] pb-[.2em] pr-[.3em]"
      >
        Menu
      </div>
      <div>
        {display ? (
          <div className="section h-screen overflow-scroll bg-gray-300  bottom-0   pt-[.2em] pl-[.2em] pr-[.2em] pb-[0]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/economics/investment/${item.path}`}>
                    <div>{item.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Section;
