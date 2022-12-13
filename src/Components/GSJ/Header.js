import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "governance/governance",
    name: "Governance",
  },
  {
    path: "social-justice/vulnerables",
    name: "Social Justice",
  },
];
function Header() {
  return (
    <>
      {" "}
      <div className="GSJheader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/governance-social-justice/${item.path}`}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
