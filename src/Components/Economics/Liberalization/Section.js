import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Globalisation from "./content/Globalisation";
import Liberalization from "./content/Liberalization";
import Privatisation from "./content/Privatisation";

export const ROUTES = [
  {
    path: "liberalization",
    element: <Liberalization />,
    name: "Liberalization",
  },
  {
    path: "privatisation",
    element: <Privatisation />,
    name: "Privatisation",
  },
  {
    path: "globalisation",
    element: <Globalisation />,
    name: "Globalisation",
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
                  <Link to={`/economics/lpg/${item.path}`}>
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
