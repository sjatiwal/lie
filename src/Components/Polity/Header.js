import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "constitution/historical-evolution",
    name: "Constitution",
  },
  {
    path: "union-state/parliament",
    name: "Union & States",
  },
  {
    path: "judiciary/supreme-court",
    name: "Judiciary",
  },
  {
    path: "bodies/election-commission",
    name: "Bodies",
  },
];
function Header() {
  return (
    <>
      {" "}
      <div className="Polityheader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/polity/${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
