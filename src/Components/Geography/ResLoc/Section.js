import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Natural Resources//
import AgricultureResources from "./content/AgricultureResources";
import EnergyResources from "./content/EnergyResources";
import ForestResources from "./content/ForestResources";
import LandResources from "./content/LandResources";
import MineralResources from "./content/MineralResources";
import Resources from "./content/Resources";
import WaterResources from "./content/WaterResources";

//Industries//
import Agglomeration from "./content/Agglomeration";
import DistributionOfIndustries from "./content/DistributionOfIndustries";
import Industries from "./content/Industries";
import FactorsOfLocation from "./content/FactorsOfLocation";

export const ROUTES = [
  {
    path: "resources",
    element: <Resources />,
    name: "Resources",
  },
  {
    path: "land-resources",
    element: <LandResources />,
    name: "LandResources",
  },
  {
    path: "water-resources",
    element: <WaterResources />,
    name: "Water Resources",
  },
  {
    path: "forest-resources",
    element: <ForestResources />,
    name: "ForestResources",
  },
  {
    path: "agriculture-resources",
    element: <AgricultureResources />,
    name: "Agriculture Resources",
  },
  {
    path: "mineral-resources",
    element: <MineralResources />,
    name: "Mineral Resources",
  },
  {
    path: "energy-resources",
    element: <EnergyResources />,
    name: "Energy Resources",
  },
  {
    path: "industries",
    element: <Industries />,
    name: "Industries",
  },
  {
    path: "location-factors",
    element: <FactorsOfLocation />,
    name: "Factors of Location",
  },
  {
    path: "industries-distribution",
    element: <DistributionOfIndustries />,
    name: "Industries Distribution",
  },

  {
    path: "agglomeration",
    element: <Agglomeration />,
    name: "Agglomeration",
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
                  <Link to={`/geography/resource-location/${item.path}`}>
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
