import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Aptitude from "./content/Aptitude";
import Attitude from "./content/Attitude";
import EmotionalIntellegence from "./content/EmotionalIntellegence";
import Ethics from "./content/Ethics";
import Integrity from "./content/Integrity";
import Morality from "./content/Morality";
import Values from "./content/Values";

export const ROUTES = [
  {
    path: "ethics",
    element: <Ethics />,
    name: "Ethics",
  },
  {
    path: "morality",
    element: <Morality />,
    name: "Morality",
  },
  {
    path: "values",
    element: <Values />,
    name: "Values",
  },
  {
    path: "integrity",
    element: <Integrity />,
    name: "Integrity",
  },
  {
    path: "aptitude",
    element: <Aptitude />,
    name: "Aptitude",
  },
  {
    path: "attitude",
    element: <Attitude />,
    name: "Attitude",
  },
  {
    path: "emotional-intellegence",
    element: <EmotionalIntellegence />,
    name: "Emotional Intellegence",
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
                  <Link to={`/ethics/quality/${item.path}`}>
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
