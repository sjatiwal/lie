import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "science/atoms",
    name: "Science",
  },
  {
    path: "technology/biotechnology",
    name: "Technology",
  },
];

function Header() {
  return (
    <div>
      {" "}
      <div className="SciTechHeader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/sci-tech/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
