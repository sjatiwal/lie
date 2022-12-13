import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import BankingSector from "./content/BankingSector";
import Budget from "./content/Budget";
import CapitalMarket from "./content/CapitalMarket";
import Development from "./content/Development";
import Employment from "./content/Employment";
import FiscalPolicy from "./content/FiscalPolicy";
import Growth from "./content/Growth";
import InclusiveGrowth from "./content/InclusiveGrowth";
import IndustrialPolicy from "./content/IndustrialPolicy";
import Infrastructure from "./content/Infrastructure";
import LandReforms from "./content/LandReforms";
import MonetaryPolicy from "./content/MonetaryPolicy";
import NBFC from "./content/NBFC";
import NitiAayog from "./content/NitiAayog";
import Planning from "./content/Planning";
import Resources from "./content/Resources";

export const ROUTES = [
  {
    path: "planning",
    element: <Planning />,
    name: "Planning",
  },
  {
    path: "niti-aayog",
    element: <NitiAayog />,
    name: "NITI Aayog",
  },
  {
    path: "resources",
    element: <Resources />,
    name: "Resources",
  },
  {
    path: "fiscal-policy",
    element: <FiscalPolicy />,
    name: "Fiscal Policy",
  },
  {
    path: "monetary-policy",
    element: <MonetaryPolicy />,
    name: "Monetary Policy",
  },
  {
    path: "banking-sector",
    element: <BankingSector />,
    name: "Banking Sector",
  },
  {
    path: "nbfc",
    element: <NBFC />,
    name: "NBFC",
  },
  {
    path: "capital-market",
    element: <CapitalMarket />,
    name: "Capital Market",
  },
  {
    path: "budget",
    element: <Budget />,
    name: "Budget",
  },
  {
    path: "growth",
    element: <Growth />,
    name: "Growth",
  },
  {
    path: "development",
    element: <Development />,
    name: "Development",
  },
  {
    path: "employment",
    element: <Employment />,
    name: "Employment",
  },
  {
    path: "inclusive-growth",
    element: <InclusiveGrowth />,
    name: "Inclusive Growth",
  },
  {
    path: "industrial-policy",
    element: <IndustrialPolicy />,
    name: "Industrial Policy",
  },
  {
    path: "land-reforms",
    element: <LandReforms />,
    name: "Land Reforms",
  },
  {
    path: "infrastructure",
    element: <Infrastructure />,
    name: "Infrastructure",
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
                  <Link to={`/economics/economics/${item.path}`}>
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
