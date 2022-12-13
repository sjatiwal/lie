import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AIIB from "./content/AIIB";
import BRICS from "./content/BRICS";
import CommonWealth from "./content/CommonWealth";
import IMF from "./content/IMF";
import NATO from "./content/NATO";
import QUAD from "./content/QUAD";
import SCO from "./content/SCO";
import UN from "./content/UN";
import WB from "./content/WB";
import WTO from "./content/WTO";

export const ROUTES = [
  {
    path: "united-nations",
    element: <UN />,
    name: "UN",
  },
  {
    path: "world-bank",
    element: <WB />,
    name: "WB",
  },
  {
    path: "international-monetary-fund",
    element: <IMF />,
    name: "IMF",
  },
  {
    path: "world-trade-organisation",
    element: <WTO />,
    name: "WTO",
  },
  {
    path: "common-wealth",
    element: <CommonWealth />,
    name: "CommanWealth",
  },
  {
    path: "north-atlantic-treaty-organisation",
    element: <NATO />,
    name: "NATO",
  },
  {
    path: "brics",
    element: <BRICS />,
    name: "BRICs",
  },
  {
    path: "shanghai-cooperation-organisation",
    element: <SCO />,
    name: "SCO",
  },
  {
    path: "quad",
    element: <QUAD />,
    name: "QUAD",
  },
  {
    path: "asian-infrastructure-inveatment-bank",
    element: <AIIB />,
    name: "AIIB",
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
                    to={`/international-relations/organisations/${item.path}`}
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
