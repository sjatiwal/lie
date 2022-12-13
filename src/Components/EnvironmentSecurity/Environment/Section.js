import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Biodiversity from "./content/Biodiversity";
import ClimateChange from "./content/ClimateChange";
import Ecology from "./content/Ecology";
import Ecosystem from "./content/Ecosystem";
import EIA from "./content/EIA";
import EnvironmentDegradation from "./content/EnvironmentDegradation";
import GovernmentScheme from "./content/GovernmentScheme";
import NutrientCycle from "./content/NutrientCycle";

export const ROUTES = [
  {
    path: "ecology",
    element: <Ecology />,
    name: "Ecology",
  },
  {
    path: "ecosystem",
    element: <Ecosystem />,
    name: "Ecosystem",
  },
  {
    path: "biodiversity",
    element: <Biodiversity />,
    name: "Biodiversity",
  },
  {
    path: "environment-impact-assesment",
    element: <EIA />,
    name: "EIA",
  },
  {
    path: "climate-change",
    element: <ClimateChange />,
    name: "Climate Change",
  },
  {
    path: "nutrient-cycle",
    element: <NutrientCycle />,
    name: "Nutrient Cycle",
  },
  {
    path: "environment-degradation",
    element: <EnvironmentDegradation />,
    name: "Environment Degradation",
  },
  {
    path: "government-schemes",
    element: <GovernmentScheme />,
    name: "Government Schemes",
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
                  <Link to={`/environment-security/environment/${item.path}`}>
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
