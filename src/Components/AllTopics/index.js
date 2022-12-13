import React from "react";
import Topics from "./Topics";

function index() {
  return (
    <>
      <div className="AllTopics  w-[100%] mb-[0] bg-gray-400 flex flex-col z-[5] ">
        <Topics
          path={"/history/ancient/history"}
          color={"bg-rose-400"}
          subject={"History"}
        />
        <Topics
          path={"/art-culture/art-forms/dance"}
          color={"bg-emerald-400"}
          subject={"Art & Culture"}
        />
        <Topics
          path={"/geography/physical/geomorphology"}
          color={"bg-yellow-300"}
          subject={"Geography"}
        />
        <Topics
          path={"/pi-is/post-independence/nation-building"}
          color={"bg-orange-500"}
          subject={"PI & IS"}
        />

        <Topics
          path={"/polity/constitution/historical-evolution"}
          color={"bg-cyan-400"}
          subject={"Polity"}
        />
        <Topics
          path={"/governance-social-justice/governance/governance"}
          color={"bg-slate-300"}
          subject={"Gov. & SJ"}
        />
        <Topics
          path={"/international-relations/foreign-policy/non-align-movement"}
          color={"bg-rose-400"}
          subject={"International Relations"}
        />

        <Topics
          path={"/economics/economics/planning"}
          color={"bg-emerald-400"}
          subject={"Economics"}
        />
        <Topics
          path={"/sci-tech/science/atoms"}
          color={"bg-yellow-300"}
          subject={"Sci & Tech"}
        />
        <Topics
          path={"/environment-security/environment/ecology"}
          color={"bg-orange-500"}
          subject={"Environment & Security "}
        />
        <Topics
          path={"/ethics/quality/ethics"}
          color={"bg-cyan-400"}
          subject={"Ethics"}
        />

        {/* <Topics
          path={"/optional"}
          color={"bg-slate-300"}
          subject={"Optional"}
        /> */}
      </div>
    </>
  );
}
export default index;
