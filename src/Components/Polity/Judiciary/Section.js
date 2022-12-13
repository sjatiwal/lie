import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ADR from "./content/ADR";
import GramNyayalayasAct from "./content/GramNyayalayasAct";
import HighCourt from "./content/HighCourt";
import LokAdalats from "./content/LokAdalats";
import NALSA from "./content/NALSA";
import SubordinateCourt from "./content/SubordinateCourt";
import SupremeCourt from "./content/SupremeCourt";

export const ROUTES = [
  {
    path: "supreme-court",
    element: <SupremeCourt />,
    name: "Supreme Court",
  },
  {
    path: "high-court",
    element: <HighCourt />,
    name: "High Court",
  },
  {
    path: "subordinate-court",
    element: <SubordinateCourt />,
    name: "Subordinate Court",
  },
  {
    path: "lok-adalats",
    element: <LokAdalats />,
    name: "Lok Adalats",
  },
  {
    path: "gram-nyayalayas-act",
    element: <GramNyayalayasAct />,
    name: "Gram Nyayalyas Act",
  },
  {
    path: "nalsa",
    element: <NALSA />,
    name: "NALSA",
  },
  {
    path: "alternate-dispute-resolution",
    element: <ADR />,
    name: "ADR",
  },
];

function Section() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {" "}
      <div
        onClick={() => setDisplay(!display)}
        className="  text-[.7rem] bg-slate-400 pl-[.8em] pt-[.3em] pb-[.2em] pr-[.3em]"
      >
        Menu
      </div>
      <div>
        {display ? (
          <div className="section h-screen overflow-scroll bg-gray-300  mb-[0] pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/polity/judiciary/${item.path}`}>
                    <div>{item.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Section;
