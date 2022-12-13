import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Economy from "./content/Economy";
import ForeignPolicy from "./content/ForeignPolicy";
import NationBuilding from "./content/NationBuilding";
import Naxalism from "./content/Naxalism";
import Polity from "./content/Polity";
import SciTech from "./content/SciTech";

export const ROUTES = [
  {
    path: "nation-building",
    element: <NationBuilding />,
    name: "NationBuilding",
  },
  {
    path: "economy",
    element: <Economy />,
    name: "Economy",
  },
  {
    path: "polity",
    element: <Polity />,
    name: "Polity",
  },
  {
    path: "sci-tech",
    element: <SciTech />,
    name: "Sci & Tech",
  },
  {
    path: "foreign-policy",
    element: <ForeignPolicy />,
    name: "Foreign Policy",
  },
  {
    path: "naxalism",
    element: <Naxalism />,
    name: "Naxalism",
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
                  <Link to={`/pi-is/post-independence/${item.path}`}>
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
