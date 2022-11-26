import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Alexander from "./content/Alexander";
import Buddha from "./content/Buddha";
import Chalcolithic from "./content/Chalcolithic";
import Chalukyas from "./content/Chalukyas";
import EarlyVedicAge from "./content/EarlyVedicAge";
import GuptaAge from "./content/GuptaAge";
import Haryanka from "./content/Haryanka";
import IndoGreeks from "./content/IndoGreeks";
import IndusCivilization from "./content/Indus Civilization";
import KanvaDynasty from "./content/KanvaDynasty";
import Kushana from "./content/Kushana";
import LaterVedic from "./content/LaterVedic";
import Mahajanapadhas from "./content/Mahajanapadhas";
import Mahavira from "./content/Mahavira";
import MauryaEmpire from "./content/MauryaEmpire";
import Nanda from "./content/Nanda";
import Pallavas from "./content/Pallavas";
import Parthians from "./content/Parthians";
import Persian from "./content/Persian";
import Prehistoric from "./content/Prehistoric";
import SangamAge from "./content/SangamAge";
import SatvahanaDynasty from "./content/SatvahanaDynasty";
import Shakas from "./content/Shakas";
import Shishunaga from "./content/Shishunaga";
import SungaDynasty from "./content/SungaDynasty";
import VardhanaDynasty from "./content/VardhanaDynasty";

export const ROUTES = [
  {
    path: "pre-historic",
    element: <Prehistoric />,
    name: "Pre Historic Period",
  },
  {
    path: "chalcolitic",
    element: <Chalcolithic />,
    name: "Chalcolithic Period",
  },
  {
    path: "indus-valley",
    element: <IndusCivilization />,
    name: "Indus Valley Civilization",
  },
  {
    path: "early-vedic",
    element: <EarlyVedicAge />,
    name: "Early Vedic Period",
  },
  {
    path: "later-vedic",
    element: <LaterVedic />,
    name: "Later Vedic Age",
  },
  {
    path: "mahajanapadhas",
    element: <Mahajanapadhas />,
    name: "Mahajanapadhas",
  },
  {
    path: "haryanka",
    element: <Haryanka />,
    name: "Haryanka Dynasty",
  },
  {
    path: "shishunaga",
    element: <Shishunaga />,
    name: "Shishunaga Dynasty",
  },
  {
    path: "nanda",
    element: <Nanda />,
    name: "Nanda Dynasty",
  },
  {
    path: "buddha",
    element: <Buddha />,
    name: "Gautama Buddha",
  },
  {
    path: "mahavira",
    element: <Mahavira />,
    name: "Mahavira",
  },
  {
    path: "persian",
    element: <Persian />,
    name: "Persian Invasion",
  },
  {
    path: "alexander",
    element: <Alexander />,
    name: "Alexander's Invasion",
  },
  {
    path: "maurya-empire",
    element: <MauryaEmpire />,
    name: "Maurya Empire",
  },
  {
    path: "sunga",
    element: <SungaDynasty />,
    name: "Sunga Dynasty",
  },
  {
    path: "kanva",
    element: <KanvaDynasty />,
    name: "Kanva Dynasy",
  },

  {
    path: "satvahana",
    element: <SatvahanaDynasty />,
    name: "Satvahana Dynasty",
  },
  {
    path: "indo-greeks",
    element: <IndoGreeks />,
    name: "Indo Greeks",
  },
  {
    path: "shakas",
    element: <Shakas />,
    name: "Shakas",
  },
  {
    path: "parthians",
    element: <Parthians />,
    name: "Parthians",
  },
  {
    path: "kushana",
    element: <Kushana />,
    name: "Kushana",
  },
  {
    path: "sangam-age",
    element: <SangamAge />,
    name: "Sangam Age",
  },
  {
    path: "gupta-age",
    element: <GuptaAge />,
    name: "Gupta Age",
  },

  {
    path: "vardhana-dynasty",
    element: <VardhanaDynasty />,
    name: "Vardhana Dynasty",
  },
  {
    path: "chalukya",
    element: <Chalukyas />,
    name: "Chalukya",
  },
  {
    path: "pallavas",
    element: <Pallavas />,
    name: "Pallavas",
  },
];

export default function Section() {
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
          <div className="section h-screen overflow-scroll bg-gray-300  bottom-0   pt-[.2em] pl-[.2em] pr-[.2em] pb-[0]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/history/ancient/${item.path}`}>{item.name}</Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
