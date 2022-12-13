import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Accountability from "./content/Accountability";
import CitizenCharter from "./content/CitizenCharter";
import Cooperative from "./content/Cooperative";
import CSRole from "./content/CSRole";
import Egovernance from "./content/Egovernance";
import Governance from "./content/Governance";
import GovernmentPolicies from "./content/GovernmentPolicies";
import NGO from "./content/NGO";
import SHG from "./content/SHG";
import Society from "./content/Society";
import Transparency from "./content/Transparency";
import Trust from "./content/Trust";

export const ROUTES = [
  {
    path: "governance",
    element: <Governance />,
    name: "Governance",
  },
  {
    path: "e-governance",
    element: <Egovernance />,
    name: "E-Governance",
  },
  {
    path: "citizen-charter",
    element: <CitizenCharter />,
    name: "Citizen Charter",
  },
  {
    path: "non-governmental-organization",
    element: <NGO />,
    name: "NGOs",
  },
  {
    path: "self-help-group",
    element: <SHG />,
    name: "SHGs",
  },
  {
    path: "trust",
    element: <Trust />,
    name: "Trust",
  },
  {
    path: "society",
    element: <Society />,
    name: "Society",
  },
  {
    path: "co-operative",
    element: <Cooperative />,
    name: "Cooperative",
  },
  {
    path: "transparency",
    element: <Transparency />,
    name: "Transparency",
  },
  {
    path: "accountability",
    element: <Accountability />,
    name: "Accountability",
  },
  {
    path: "civil-servant-role",
    element: <CSRole />,
    name: "Civil Servant Role",
  },
  {
    path: "government-policies",
    element: <GovernmentPolicies />,
    name: "Government Policies",
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
                    to={`/governance-social-justice/governance/${item.path}`}
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
