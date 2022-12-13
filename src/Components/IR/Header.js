import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "foreign-policy/non-align-movement",
    name: "Policy",
  },
  {
    path: "neighbourhood/afghanistan",
    name: "Neighbour",
  },
  {
    path: "world/africa",
    name: "World",
  },
  {
    path: "organisations/united-nations",
    name: "Organisations",
  },
];
function Header() {
  return (
    <div>
      {" "}
      <div className="IRHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/international-relations/${item.path}`}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
