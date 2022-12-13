import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Amendment from "./content/Amendment";
import BasicStructure from "./content/BasicStructure";
import Citizenship from "./content/Citizenship";
import ConstituentAssembly from "./content/ConstituentAssembly";
import ConstitutionComparision from "./content/ConstitutionComparision";
import ConstitutionEnactment from "./content/ConstitutionEnactment";
import ConstitutionFeatures from "./content/ConstitutionFeatures";
import DPSP from "./content/DPSP";
import Duties from "./content/Duties";
import Emergency from "./content/Emergency";
import FundamentalRight from "./content/FundamentalRight";
import History from "./content/History";
import JudicialReview from "./content/JudicialReview";
import Preamble from "./content/Preamble";
import SeperationOfPower from "./content/SeperationOfPower";
import UniversalAdultFranchise from "./content/UniversalAdultFranchise";

export const ROUTES = [
  {
    path: "historical-evolution",
    element: <History />,
    name: "History of Constitution",
  },
  {
    path: "constituent-assembly",
    element: <ConstituentAssembly />,
    name: "Constituent Assembly",
  },
  {
    path: "constitution-enactment",
    element: <ConstitutionEnactment />,
    name: "Enactment of Constitution",
  },
  {
    path: "preamble",
    element: <Preamble />,
    name: "Preamble",
  },
  {
    path: "features-of-constitution",
    element: <ConstitutionFeatures />,
    name: "Features of Constitution",
  },
  {
    path: "citizenship",
    element: <Citizenship />,
    name: "Citizenship",
  },
  {
    path: "fundamental-rights",
    element: <FundamentalRight />,
    name: "Fundamental Right",
  },
  {
    path: "directive-principles-of-state-policy",
    element: <DPSP />,
    name: "DPSP",
  },
  {
    path: "fundamental-duties",
    element: <Duties />,
    name: "Fundamental Duties",
  },
  {
    path: "amendments",
    element: <Amendment />,
    name: "Amendments",
  },
  {
    path: "emergency",
    element: <Emergency />,
    name: "Emergency",
  },
  {
    path: "basic-structure",
    element: <BasicStructure />,
    name: "Basic Structure",
  },
  {
    path: "judicial-review",
    element: <JudicialReview />,
    name: "Judicial Review",
  },
  {
    path: "seperation-of-power",
    element: <SeperationOfPower />,
    name: "Seperation of Power",
  },
  {
    path: "comparision-of-constitution",
    element: <ConstitutionComparision />,
    name: "Comparision of Constitution",
  },
  {
    path: "universal-adult-franchise",
    element: <UniversalAdultFranchise />,
    name: "Universal Adult Franchise",
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
                  <Link to={`/polity/constitution/${item.path}`}>
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
