import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Cyclone from "./content/Cyclone";
import Earthquake from "./content/Earthquake";
import Tsunami from "./content/Tsunami";
import Volcanoes from "./content/Volcanoes";

export const ROUTES = [
  {
    path: "earthquake",
    element: <Earthquake />,
    name: "Earthquake",
  },
  {
    path: "tsunami",
    element: <Tsunami />,
    name: "Tsunami",
  },
  {
    path: "volcanoes",
    element: <Volcanoes />,
    name: "Volcanoes",
  },
  {
    path: "cyclone",
    element: <Cyclone />,
    name: "Cyclone",
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
                  <Link to={`/geography/natural-disaster/${item.path}`}>
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
