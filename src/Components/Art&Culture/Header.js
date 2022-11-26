import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "art-forms/dance",
    name: "Art ",
  },
  {
    path: "literature/sanskrit-literature",
    name: "Literature",
  },
  {
    path: "architecture/harrapan-architecture",
    name: "Architecture",
  },
  {
    path: "Movement/bhakti-movement",
    name: "Movement",
  },
];

function Header() {
  return (
    <div>
      {" "}
      <div className="ArtHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/art-culture/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
