import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import CodeOfService from "./content/CodeOfService";
import CorporateGovernance from "./content/CorporateGovernance";
import CSValues from "./content/CSValues";
import EthicsGovernance from "./content/EthicsGovernance";
import ProbityGovernance from "./content/ProbityGovernance";
import QualityService from "./content/QualityService";
import TacklingCorruption from "./content/TacklingCorruption";

export const ROUTES = [
  {
    path: "civil-servant-values",
    element: <CSValues />,
    name: "Values of CS",
  },
  {
    path: "code-of-service",
    element: <CodeOfService />,
    name: "Code of Service",
  },
  {
    path: "ethics-in-governance",
    element: <EthicsGovernance />,
    name: "Ethics in governance",
  },
  {
    path: "probity-in-governance",
    element: <ProbityGovernance />,
    name: "Probity in Governance",
  },
  {
    path: "tackling-corruption",
    element: <TacklingCorruption />,
    name: "Tackling Corruption",
  },
  {
    path: "quality-of-service",
    element: <QualityService />,
    name: "Quality of Service",
  },
  {
    path: "corporate-governance",
    element: <CorporateGovernance />,
    name: "Corporate Governance",
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
          <div className="section h-screen overflow-scroll bg-gray-300  bottom-0  pt-[.2em] pl-[.2em] pr-[.2em] pb-[0]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/ethics/governance/${item.path}`}>
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
