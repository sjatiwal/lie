import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "post-independence/nation-building",
    name: "Post Indpendence",
  },
  {
    path: "indian-society/features",
    name: "Indian Society",
  },
];
function Header() {
  return (
    <>
      {" "}
      <div className="PIISheader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/pi-is/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
