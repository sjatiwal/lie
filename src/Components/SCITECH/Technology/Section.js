import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import BioTechnology from "./content/BioTechnology";
import CommunicationTechnology from "./content/CommunicationTechnology";
import DefenceTechnology from "./content/DefenceTechnology";
import IntellectualProperty from "./content/IntellectualProperty";
import ITTechnology from "./content/ITTechnology";
import NanoTechnology from "./content/NanoTechnology";
import NuclearTechnology from "./content/NuclearTechnology";
import Robotics from "./content/Robotics";
import SpaceTechnology from "./content/SpaceTechnology";

export const ROUTES = [
  {
    path: "bioTechnology",
    element: <BioTechnology />,
    name: "BioTechnology",
  },
  {
    path: "nano-technology",
    element: <NanoTechnology />,
    name: "Nano Technology",
  },
  {
    path: "space-technology",
    element: <SpaceTechnology />,
    name: "Space Technology",
  },
  {
    path: "nuclear-technology",
    element: <NuclearTechnology />,
    name: "Nuclear Technology",
  },
  {
    path: "defence-technology",
    element: <DefenceTechnology />,
    name: "Defence Technology",
  },
  {
    path: "robotics",
    element: <Robotics />,
    name: "Robotics",
  },
  {
    path: "it-technology",
    element: <ITTechnology />,
    name: "IT Technology",
  },
  {
    path: "communication-technology",
    element: <CommunicationTechnology />,
    name: "Communication Tecnology",
  },
  {
    path: "intellectual-property",
    element: <IntellectualProperty />,
    name: "Intelllectual Property",
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
                  <Link to={`/sci-tech/technology/${item.path}`}>
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
