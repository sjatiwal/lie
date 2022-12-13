import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "economics/planning",
    name: "Economics",
  },

  {
    path: "lpg/liberalization",
    name: "LPG",
  },

  {
    path: "investment/investment",
    name: "Investment",
  },
  {
    path: "agriculture/crops",
    name: "Agriculture",
  },
];

function Header() {
  return (
    <div>
      {" "}
      <div className="EcoHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/economics/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
