import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "environment/ecology",
    name: "Environment",
  },
  {
    path: "security/justice-delivery-system",
    name: "Security",
  },
];
function Header() {
  return (
    <div>
      {" "}
      <div className="EviSecHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/environment-security/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
