import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "quality/ethics",
    name: "Quality",
  },
  {
    path: "governance/civil-servant-values",
    name: "Governance",
  },
  {
    path: "thinkers/mahatma-gandhi",
    name: "Thinkers",
  },
];

function Header() {
  return (
    <div>
      {" "}
      <div className="EthicsHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/ethics/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
