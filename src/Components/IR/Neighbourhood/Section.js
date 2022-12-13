import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Afghanistan from "./content/Afghanistan";
import Bangladesh from "./content/Bangladesh";
import Bhutan from "./content/Bhutan";
import China from "./content/China";
import Maldives from "./content/Maldives";
import Myanmar from "./content/Myanmar";
import Nepal from "./content/Nepal";
import Pakistan from "./content/Pakistan";
import Srilanka from "./content/Srilanka";

export const ROUTES = [
  {
    path: "afghanistan",
    element: <Afghanistan />,
    name: "Afghanistan",
  },
  {
    path: "bangladesh",
    element: <Bangladesh />,
    name: "Bangladesh",
  },
  {
    path: "bhutan",
    element: <Bhutan />,
    name: "Bhutan",
  },
  {
    path: "china",
    element: <China />,
    name: "China",
  },
  {
    path: "maldives",
    element: <Maldives />,
    name: "Maldives",
  },
  {
    path: "myanmar",
    element: <Myanmar />,
    name: "Myanmar",
  },
  {
    path: "nepal",
    element: <Nepal />,
    name: "Nepal",
  },
  {
    path: "pakistan",
    element: <Pakistan />,
    name: "Pakistan",
  },
  {
    path: "srilanka",
    element: <Srilanka />,
    name: "Srilanka",
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
                    to={`/international-relations/neighbourhood/${item.path}`}
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
