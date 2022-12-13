import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Africa from "./content/Africa";
import Europe from "./content/Europe";
import Iran from "./content/Iran";
import Israel from "./content/Israel";
import Japan from "./content/Japan";
import Russia from "./content/Russia";
import USA from "./content/USA";

export const ROUTES = [
  {
    path: "africa",
    element: <Africa />,
    name: "Africa",
  },
  {
    path: "europe",
    element: <Europe />,
    name: "Europe",
  },
  {
    path: "iran",
    element: <Iran />,
    name: "Iran",
  },
  {
    path: "israel",
    element: <Israel />,
    name: "Israel",
  },
  {
    path: "japan",
    element: <Japan />,
    name: "Japan",
  },
  {
    path: "russia",
    element: <Russia />,
    name: "Russia",
  },
  {
    path: "usa",
    element: <USA />,
    name: "USA",
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
                  <Link to={`/international-relations/world/${item.path}`}>
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
