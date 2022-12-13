import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import CyberSecurity from "./content/CyberSecurity";
import Institutions from "./content/Institutions";
import JusticeDeliverySystem from "./content/JusticeDeliverySystem";
import MaritimeSecurity from "./content/MaritimeSecurity";
import Media from "./content/Media";
import MoneyLaundering from "./content/MoneyLaundering";
import Naxalism from "./content/Naxalism";
import Neighbourhood from "./content/Neighbourhood";
import NEInsurgency from "./content/NEInsurgency";
import NonStateActor from "./content/NonStateActor";
import OrganisedCrime from "./content/OrganisedCrime";
import Terrorism from "./content/Terrorism";

export const ROUTES = [
  {
    path: "justice-delivery-system",
    element: <JusticeDeliverySystem />,
    name: "Justice Delivery System",
  },
  {
    path: "naxalism",
    element: <Naxalism />,
    name: "Naxalism",
  },
  {
    path: "cyber-security",
    element: <CyberSecurity />,
    name: "Cyber Security",
  },
  {
    path: "organised-crime",
    element: <OrganisedCrime />,
    name: "Organised Crime",
  },
  {
    path: "non-state-actor",
    element: <NonStateActor />,
    name: "Non State Actor",
  },
  {
    path: "ne-insurgency",
    element: <NEInsurgency />,
    name: "NE Insurgency",
  },
  {
    path: "neighbourhood",
    element: <Neighbourhood />,
    name: "Neighbourhood",
  },
  {
    path: "money-laundering",
    element: <MoneyLaundering />,
    name: "Money Laundering",
  },
  {
    path: "terrorism",
    element: <Terrorism />,
    name: "Terrorism",
  },
  {
    path: "media",
    element: <Media />,
    name: "Media",
  },
  {
    path: "maritime-security",
    element: <MaritimeSecurity />,
    name: "Maritime Security",
  },
  {
    path: "institutions",
    element: <Institutions />,
    name: "Institutions",
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
                  <Link to={`/environment-security/security/${item.path}`}>
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
