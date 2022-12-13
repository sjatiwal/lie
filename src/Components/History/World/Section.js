import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AmericanRevolution from "./content/AmericanRevolution";
import AsiaAfrica from "./content/AsiaAfrica";
import Capitalism from "./content/Capitalism";
import ColdWar from "./content/ColdWar";
import Colonialism from "./content/Colonialism";
import Communism from "./content/Communism";
import CubanCrisis from "./content/CubanCrisis";
import Decolonization from "./content/Decolonization";
import EuropePostWW2 from "./content/EuropePostWW2";
import FacismNazism from "./content/FacismNazism";
import FrenchRevolution from "./content/FrenchRevolution";
import Germany from "./content/Germany";
import Imperialism from "./content/Imperialism";
import IndustrialRevolution from "./content/IndustrialRevolution";
import Italy from "./content/Italy";
import KoreanWar from "./content/KoreanWar";
import NationalismInEurope from "./content/NationalismInEurope";
import NorthAmerica from "./content/NorthAmerica";
import Reformation from "./content/Reformation";
import Renaissance from "./content/Renaissance";
import RussianRevolution from "./content/RussianRevolution";
import SeaRoutes from "./content/SeaRoutes";
import Socialism from "./content/Socialism";
import TheGreatDepression from "./content/TheGreatDepression";
import USAEmergence from "./content/USAEmergence";
import USSRDisintegration from "./content/USSRDisintegration";
import USSREmergence from "./content/USSREmergence";
import VietnamWar from "./content/VietnamWar";
import WorldbtWars from "./content/WorldbtWars";
import WW1 from "./content/WW1";
import WW2 from "./content/WW2";

export const ROUTES = [
  {
    path: "renaissance",
    element: <Renaissance />,
    name: "Renaissance",
  },
  {
    path: "discovery-of-sea-routes",
    element: <SeaRoutes />,
    name: "Sea Routes",
  },
  {
    path: "reformation",
    element: <Reformation />,
    name: "Reformation",
  },
  {
    path: "industrial-revolution",
    element: <IndustrialRevolution />,
    name: "Industrial Revolution",
  },
  {
    path: "north-america",
    element: <NorthAmerica />,
    name: "North America",
  },
  {
    path: "american-revolution",
    element: <AmericanRevolution />,
    name: "American Revolution",
  },
  {
    path: "french-revolution",
    element: <FrenchRevolution />,
    name: "French Revolution",
  },
  {
    path: "nationalism-in-europe",
    element: <NationalismInEurope />,
    name: "Nationalism in Europe",
  },
  {
    path: "unification-of-italy",
    element: <Italy />,
    name: "Unification of Italy",
  },
  {
    path: "unification-of-germany",
    element: <Germany />,
    name: "Unification of Germany",
  },
  {
    path: "capitalism",
    element: <Capitalism />,
    name: "Capitalism",
  },
  {
    path: "colonialism",
    element: <Colonialism />,
    name: "Colonialism",
  },
  {
    path: "imperialism",
    element: <Imperialism />,
    name: "Imperialism",
  },
  {
    path: "first-world-war",
    element: <WW1 />,
    name: "First World War ",
  },
  {
    path: "russian-revolution",
    element: <RussianRevolution />,
    name: "Russian-revolution",
  },
  {
    path: "world-between-two-wars",
    element: <WorldbtWars />,
    name: "World Between the Two Wars",
  },
  {
    path: "fascism-nazism",
    element: <FacismNazism />,
    name: "Fascism-Nazism",
  },
  {
    path: "the-great-depression",
    element: <TheGreatDepression />,
    name: "The Great Depression",
  },
  {
    path: "emergence-of-ussr",
    element: <USSREmergence />,
    name: "Emergence of USSR",
  },
  {
    path: "asia-africa",
    element: <AsiaAfrica />,
    name: "Asia & Africa",
  },
  {
    path: "emergence-of-usa",
    element: <USAEmergence />,
    name: "Emergence of USA",
  },
  {
    path: "second-world-war",
    element: <WW2 />,
    name: "Second World War",
  },
  {
    path: "decolonization",
    element: <Decolonization />,
    name: "Decolonization",
  },
  {
    path: "europe-after-WW2",
    element: <EuropePostWW2 />,
    name: "Europe After WW2",
  },
  {
    path: "cold-war",
    element: <ColdWar />,
    name: "Cold War",
  },
  {
    path: "korean-war",
    element: <KoreanWar />,
    name: "Korean War",
  },
  {
    path: "vietnam-war",
    element: <VietnamWar />,
    name: "Vietnam War",
  },
  {
    path: "cuban-crisis",
    element: <CubanCrisis />,
    name: "Cuban Crisis",
  },
  {
    path: "ussr-disintegration",
    element: <USSRDisintegration />,
    name: "USSR Disintegration",
  },
  {
    path: "communism",
    element: <Communism />,
    name: "Communism",
  },
  {
    path: "socialism",
    element: <Socialism />,
    name: "Socialism",
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
          <div className="section h-screen overflow-scroll bg-gray-300  mb-[0] pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/history/world/${item.path}`}>
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
