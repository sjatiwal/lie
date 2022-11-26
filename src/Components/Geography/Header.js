import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "physical/geomorphology",
    name: "Physical",
  },
  {
    path: "resource-location/resources",
    name: "Res & Loc",
  },

  {
    path: "natural-disaster/earthquake",
    name: "Disasters",
  },
  {
    path: "human-economic/demography",
    name: "Hum & Eco",
  },
];
function Header() {
  return (
    <div>
      {" "}
      <div className="GeoHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/geography/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
