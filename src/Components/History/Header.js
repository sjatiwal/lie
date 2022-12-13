import React from "react";
import { Link } from "react-router-dom";

const ROUTES = [
  {
    path: "/ancient/history",
    name: "Ancient",
  },
  {
    path: "/medieval/mahmud-bin-qasim",
    name: "Medival",
  },
  {
    path: "/modern/later-mughals",
    name: "Modern",
  },
  {
    path: "/world/renaissance",
    name: "World",
  },
];

function Header() {
  return (
    <>
      {" "}
      <div className="Hheader w-[100%] bg-neutral-900 text-white flex flex-row place-content-around">
        <div>
          <Link to="/">Home</Link>
        </div>
        {ROUTES.map((item) => {
          return (
            <div key={`${item.name}`}>
              <Link to={`/history${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Header;
