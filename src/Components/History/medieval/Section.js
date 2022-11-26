import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Bahmani from "./content/Bahmani";
import Cholas from "./content/Cholas";
import KhaljiDynasty from "./content/KhaljiDynasty";
import LodhiDynasty from "./content/LodhiDynasty";
import MahmudBinQasim from "./content/MahmudBinQasim";
import MahmudGhazni from "./content/MahmudGhazni";
import MahmudGhori from "./content/MahmudGhori";
import Maratha from "./content/Maratha";
import MughalEmpire from "./content/MughalEmpire";
import Palas from "./content/Palas";
import Pratiharas from "./content/Pratiharas";
import PrithvirajChauhan from "./content/PrithvirajChauhan";
import Rasthrakutas from "./content/Rasthrakutas";
import SayyidDynasty from "./content/SayyidDynasty";
import SlaveDynasty from "./content/SlaveDynasty";
import TuglaqDynasty from "./content/TuglaqDynasty";
import Vijaynagar from "./content/Vijaynagar";

export const ROUTES = [
  {
    path: "mahmud-bin-qasim",
    element: <MahmudBinQasim />,
    name: "Mahmud Bin Qasim",
  },
  {
    path: "pratiharas",
    element: <Pratiharas />,
    name: "Pratiharas",
  },
  {
    path: "rasthrakutas",
    element: <Rasthrakutas />,
    name: "Rasthrakutas",
  },
  {
    path: "palas",
    element: <Palas />,
    name: "Palas",
  },
  {
    path: "cholas",
    element: <Cholas />,
    name: "Cholas",
  },
  {
    path: "mahmud-ghazni",
    element: <MahmudGhazni />,
    name: "Mahmud-Ghazni",
  },
  {
    path: "mahmud-ghori",
    element: <MahmudGhori />,
    name: "Mahmud-Ghori",
  },
  {
    path: "prithviraj-chauhan",
    element: <PrithvirajChauhan />,
    name: "Prithviraj Chauhan",
  },
  {
    path: "slave-dynasty",
    element: <SlaveDynasty />,
    name: "Slave Dynasty",
  },
  {
    path: "khalji-dynasty",
    element: <KhaljiDynasty />,
    name: "Khalji Dynasty",
  },
  {
    path: "tuglaq-dynasty",
    element: <TuglaqDynasty />,
    name: "Tuglaq Dynasty",
  },
  {
    path: "sayyid-dynasty",
    element: <SayyidDynasty />,
    name: "Sayyid Dynasty",
  },
  {
    path: "lodhi-dynasty",
    element: <LodhiDynasty />,
    name: "Lodhi Dynasty",
  },
  {
    path: "vijaynagar-kingdom",
    element: <Vijaynagar />,
    name: "Vijaynagar Kingdom",
  },
  {
    path: "bahmani-kingdom",
    element: <Bahmani />,
    name: "Bahmani Kingdom",
  },
  {
    path: "mughal-empire",
    element: <MughalEmpire />,
    name: "Mughal Empire",
  },
  {
    path: "maratha",
    element: <Maratha />,
    name: "Maratha",
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
          <div className="section h-screen  overflow-scroll bg-gray-300  mb-[0]  pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/history/medieval/${item.path}`}>{item.name}</Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
