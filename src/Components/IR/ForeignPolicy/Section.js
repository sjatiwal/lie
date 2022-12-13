import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AEP from "./content/AEP";
import GujralDoctrine from "./content/GujralDoctrine";
import IndianDiaspora from "./content/IndianDiaspora";
import LEP from "./content/LEP";
import NAM from "./content/NAM";
import NeighbourhoodFirstPolicy from "./content/NeighbourhoodFirstPolicy";

export const ROUTES = [
  {
    path: "non-align-movement",
    element: <NAM />,
    name: "NAM",
  },
  {
    path: "gujral-doctrine",
    element: <GujralDoctrine />,
    name: "Gujral Doctrine",
  },
  {
    path: "look-east-policy",
    element: <LEP />,
    name: "LEP",
  },
  {
    path: "act-east-policy",
    element: <AEP />,
    name: "AEP",
  },
  {
    path: "neighbourhood-first-policy",
    element: <NeighbourhoodFirstPolicy />,
    name: "Neighbourhood First Policy",
  },
  {
    path: "indian-diaspora",
    element: <IndianDiaspora />,
    name: "IndianDiaspora",
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
                  <Link
                    to={`/international-relations/foreign-policy/${item.path}`}
                  >
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
