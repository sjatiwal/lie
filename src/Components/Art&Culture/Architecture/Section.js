import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Buddhist from "./content/Buddhist";
import Cave from "./content/Cave";
import Colonial from "./content/Colonial";
import Harrapan from "./content/Harrapan";
import IndoIslamic from "./content/IndoIslamic";
import Jainism from "./content/Jainism";
import Mauryan from "./content/Mauryan";
import Modern from "./content/Modern";
import PostMauryan from "./content/PostMauryan";
import RockCut from "./content/RockCut";
import Temple from "./content/Temple";

export const ROUTES = [
  {
    path: "harrapan-architecture",
    element: <Harrapan />,
    name: "Harrapan Architecture",
  },
  {
    path: "buddhist-architecture",
    element: <Buddhist />,
    name: "Buddhist Architecture",
  },
  {
    path: "jain-architecture",
    element: <Jainism />,
    name: "Jain Architecture",
  },
  {
    path: "mauryan-architecture",
    element: <Mauryan />,
    name: "Maurayan Architecture",
  },
  {
    path: "post-mauryan-architecture",
    element: <PostMauryan />,
    name: "Post Mauryan Architecture ",
  },
  {
    path: "indo-islamic-architecture",
    element: <IndoIslamic />,
    name: "Indo Islamic Architecture",
  },
  {
    path: "colonial-architecture",
    element: <Colonial />,
    name: "Colonial Architecture",
  },
  {
    path: "modern-architecture",
    element: <Modern />,
    name: "Modern Architecture",
  },
  {
    path: "cave-architecture",
    element: <Cave />,
    name: "Cave Architecture",
  },
  {
    path: "temple-architecture",
    element: <Temple />,
    name: "Temple Architecture",
  },

  {
    path: "rock-cut-architecture",
    element: <RockCut />,
    name: "Rock Cut Architecture",
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
                  <Link to={`/art-culture/architecture/${item.path}`}>
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
