import React from "react";
import Topics from "../Topics";

function index() {
  return (
    <>
      <div className="AllTopics w-[100%]  flex flex-col z-[-10] ">
        <Topics
          path={"/history/ancient/pre-historic"}
          color={"bg-rose-400"}
          subject={"History"}
        />
        <Topics
          path={"/art-culture/art-forms/dance"}
          color={"bg-orange-500"}
          subject={"Art & Culture"}
        />
        <Topics
          path={"/geography/physical/geomorphology"}
          color={"bg-yellow-300"}
          subject={"Geography"}
        />
        <Topics path={"/polity"} color={"bg-lime-400"} subject={"Polity"} />

        <Topics
          path={"/economics"}
          color={"bg-cyan-400"}
          subject={"Economics"}
        />
        <Topics
          path={"/sci_tech"}
          color={"bg-purple-300"}
          subject={"Sci & Tech"}
        />
        <Topics path={"/ethics"} color={"bg-indigo-400"} subject={"Ethics"} />
        <Topics
          path={"/environment"}
          color={"bg-orange-300"}
          subject={"Environment"}
        />
        <Topics
          path={"/optional"}
          color={"bg-emerald-400"}
          subject={"Optional"}
        />
      </div>
    </>
  );
}
export default index;
