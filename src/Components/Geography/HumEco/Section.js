import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Census from "./content/Census";
import Communication from "./content/Communication";
import Demography from "./content/Demography";
import Transport from "./content/Demography";
import Urbanization from "./content/Urbanization";

export const ROUTES = [
  {
    path: "demography",
    element: <Demography />,
    name: "Demography",
  },
  {
    path: "urbanization",
    element: <Urbanization />,
    name: "Urbanization",
  },
  {
    path: "census",
    element: <Census />,
    name: "census",
  },
  {
    path: "transport",
    element: <Transport />,
    name: "Transport",
  },
  {
    path: "communication",
    element: <Communication />,
    name: "Communication",
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
                  <Link to={`/geography/human-economic/${item.path}`}>
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
