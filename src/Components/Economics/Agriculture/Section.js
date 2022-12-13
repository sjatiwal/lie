import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Crops from "./content/Crops";
import BufferStocks from "./content/BufferStocks";
import FPI from "./content/FPI";
import Irrigation from "./content/Irrigation";
import Marketing from "./content/Marketing";
import MSP from "./content/MSP";
import PDS from "./content/PDS";

export const ROUTES = [
  {
    path: "crops",
    element: <Crops />,
    name: "Crops",
  },
  {
    path: "irrigation",
    element: <Irrigation />,
    name: "Irrigation",
  },
  {
    path: "marketing",
    element: <Marketing />,
    name: "Marketing",
  },
  {
    path: "public-distribution-system",
    element: <PDS />,
    name: "PDS",
  },
  {
    path: "minimum-support-price",
    element: <MSP />,
    name: "MSP",
  },
  {
    path: "food-processing-industries",
    element: <FPI />,
    name: "FPI",
  },
  {
    path: "buffer-stock",
    element: <BufferStocks />,
    name: "Buffer Stock",
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
                  <Link to={`/economics/agriculture/${item.path}`}>
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
