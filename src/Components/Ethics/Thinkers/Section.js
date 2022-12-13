import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Aristotle from "./content/Aristotle";
import MahatmaGandhi from "./content/MahatmaGandhi";
import Plato from "./content/Plato";
import Socrates from "./content/Socrates";

export const ROUTES = [
  {
    path: "mahatma-gandhi",
    element: <MahatmaGandhi />,
    name: "Mahatma Gandhi",
  },
  {
    path: "aristotle",
    element: <Aristotle />,
    name: "Aristotle",
  },
  {
    path: "plato",
    element: <Plato />,
    name: "Plato",
  },
  {
    path: "socrates",
    element: <Socrates />,
    name: "Socrates",
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
          <div className="section h-screen overflow-scroll bg-gray-300  bottom-0  pt-[.2em] pl-[.2em] pr-[.2em] pb-[0]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/ethics/thinkers/${item.path}`}>
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
