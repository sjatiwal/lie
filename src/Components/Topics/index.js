import React from "react";
import { Link } from "react-router-dom";

function index({ subject, color, path }) {
  return (
    <>
      <div className={`${color}  w-[100%] h-[6rem] text-center  pt-[2.5em]  `}>
        <Link to={`${path}`}>{subject}</Link>
      </div>
    </>
  );
}
export default index;
