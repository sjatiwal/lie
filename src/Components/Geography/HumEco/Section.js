import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Demography from "./content/Demography";

export const ROUTES = [
  {
    path: "demography",
    element: <Demography />,
    name: "Demography",
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
                  <Link to={`/geography/human-economic/${item.path}`}>
                    {item.name}
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