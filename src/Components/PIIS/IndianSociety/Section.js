import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Communalism from "./content/Communalism";
import Features from "./content/Features";
import Globalisation from "./content/Globalisation";
import Population from "./content/Population";
import Poverty from "./content/Poverty";
import Regionalism from "./content/Regionalism";
import Secularism from "./content/Secularism";
import SocialEmpowerment from "./content/SocialEmpowerment";
import Urbanization from "./content/Urbanization";
import Women from "./content/Women";

export const ROUTES = [
  {
    path: "features",
    element: <Features />,
    name: "Features",
  },
  {
    path: "population",
    element: <Population />,
    name: "Population",
  },
  {
    path: "globalisation",
    element: <Globalisation />,
    name: "Globalisation",
  },
  {
    path: "urbanisation",
    element: <Urbanization />,
    name: "Urbanization",
  },
  {
    path: "poverty",
    element: <Poverty />,
    name: "Poverty",
  },
  {
    path: "women",
    element: <Women />,
    name: "Women",
  },
  {
    path: "social-empowerment",
    element: <SocialEmpowerment />,
    name: "social Empowerment",
  },
  {
    path: "secularism",
    element: <Secularism />,
    name: "Secularism",
  },
  {
    path: "communalism",
    element: <Communalism />,
    name: "Communalism",
  },
  {
    path: "regionalism",
    element: <Regionalism />,
    name: "Regionalism",
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
                  <Link to={`/pi-is/indian-society/${item.path}`}>
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
