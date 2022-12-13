import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Constitutional Bodies//
import CAG from "./content/ConstitutionalBodies/CAG";
import EC from "./content/ConstitutionalBodies/EC";
import FC from "./content/ConstitutionalBodies/FC";
import NCBC from "./content/ConstitutionalBodies/NCBC";
import NCSC from "./content/ConstitutionalBodies/NCSC";
import NCST from "./content/ConstitutionalBodies/NCST";
import SOLM from "./content/ConstitutionalBodies/SOLM";
import SPSC from "./content/ConstitutionalBodies/SPSC";
import UPSC from "./content/ConstitutionalBodies/UPSC";

//Other Bodies//
import CBI from "./content/OtherBodies/CBI";
import CCI from "./content/OtherBodies/CCI";
import CIC from "./content/OtherBodies/CIC";
import CVC from "./content/OtherBodies/CVC";
import LokpalLokayuktas from "./content/OtherBodies/LokpalLokayuktas";
import NCM from "./content/OtherBodies/NCM";
import NCW from "./content/OtherBodies/NCW";
import NGT from "./content/OtherBodies/NGT";
import NHRC from "./content/OtherBodies/NHRC";
import NitiAayog from "./content/OtherBodies/NitiAayog";
import SHRC from "./content/OtherBodies/SHRC";

export const ROUTES = [
  {
    path: "election-commission",
    element: <EC />,
    name: "EC",
  },
  {
    path: "finance-commission",
    element: <FC />,
    name: "FC",
  },
  {
    path: "union-public-service-commission",
    element: <UPSC />,
    name: "UPSC",
  },
  {
    path: "state-public-service-commission",
    element: <SPSC />,
    name: "SPSC",
  },
  {
    path: "comptroller-and-auditor-general-of-india",
    element: <CAG />,
    name: "CAG",
  },
  {
    path: "national-commission-for-schedule-caste",
    element: <NCSC />,
    name: "NCSCs",
  },
  {
    path: "national-commission-for-schedule-tribe",
    element: <NCST />,
    name: "NCSTs",
  },
  {
    path: "national-commission-for-backward-classes",
    element: <NCBC />,
    name: "NCBCs",
  },
  {
    path: "special-officer-of-linguistic-minorities",
    element: <SOLM />,
    name: "SOLM",
  },
  {
    path: "national-commission-of-minorities",
    element: <NCM />,
    name: "NCM",
  },
  {
    path: "national-commission-of-women",
    element: <NCW />,
    name: "NCW",
  },
  {
    path: "national-human-right-commmission",
    element: <NHRC />,
    name: "NHRC",
  },
  {
    path: "state-human-right-commmission",
    element: <SHRC />,
    name: "SHRC",
  },
  {
    path: "central-bureau-of-investigation",
    element: <CBI />,
    name: "CBI",
  },
  {
    path: "central-information-commission",
    element: <CIC />,
    name: "CIC",
  },
  {
    path: "central-vigilance-commmission",
    element: <CVC />,
    name: "CVC",
  },
  {
    path: "competition-commission-of-india",
    element: <CCI />,
    name: "CCI",
  },
  {
    path: "lokpal-lokayuktas",
    element: <LokpalLokayuktas />,
    name: "Lokpal & Lokayuktas",
  },
  {
    path: "niti-aayog",
    element: <NitiAayog />,
    name: "NITI Aayog",
  },
  {
    path: "national-green-tribunal",
    element: <NGT />,
    name: "NGT",
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
          <div className="section h-screen overflow-scroll bg-gray-300  mb-[0]   pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/polity/bodies/${item.path}`}>
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
