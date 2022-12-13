import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import BuddhistLiterature from "./content/BuddhistLiterature";
import JainLiterature from "./content/JainLiterature";
import MedievalLiterature from "./content/MedievalLiterature";
import ModernLiterature from "./content/ModernLiterature";
import SangamLiterature from "./content/SangamLiterature";
import SanskritLiterature from "./content/SanskritLiterature";

export const ROUTES = [
  {
    path: "sanskrit-literature",
    element: <SanskritLiterature />,
    name: "Sanskrit Literature",
  },
  {
    path: "buddhist-literature",
    element: <BuddhistLiterature />,
    name: "Buddhist Literature",
  },
  {
    path: "jain-literature",
    element: <JainLiterature />,
    name: "Jain Literature",
  },
  {
    path: "sangam-literature",
    element: <SangamLiterature />,
    name: "Sangam Literature",
  },
  {
    path: "medieval-literature",
    element: <MedievalLiterature />,
    name: "Medieval Literature",
  },

  {
    path: "modern-literature",
    element: <ModernLiterature />,
    name: "Modern Literature",
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
                  <Link to={`/art-culture/literature/${item.path}`}>
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
