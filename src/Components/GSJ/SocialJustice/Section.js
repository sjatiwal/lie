import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Education from "./content/Education";
import Health from "./content/Health";
import HumanResource from "./content/HumanResource";
import Organisations from "./content/Organisations";
import PovertyHunger from "./content/PovertyHunger";
import Vulnerables from "./content/Vulnerables";

export const ROUTES = [
  {
    path: "vulnerables",
    element: <Vulnerables />,
    name: "Vulnerables",
  },
  {
    path: "education",
    element: <Education />,
    name: "Education",
  },
  {
    path: "health",
    element: <Health />,
    name: "Health",
  },
  {
    path: "human-resource",
    element: <HumanResource />,
    name: "Human Resource",
  },
  {
    path: "poverty-hunger",
    element: <PovertyHunger />,
    name: "Poverty & Hunger",
  },
  {
    path: "organisations",
    element: <Organisations />,
    name: "Organisations",
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
                    to={`/governance-social-justice/social-justice/${item.path}`}
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
