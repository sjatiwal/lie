import React from "react";
import { Link } from "react-router-dom";

function Chalcolithic() {
  return (
    <>
      <h1 className="text-3xl">Chalcolithic Age</h1>
      <div>
        People of this period use implements(tools, utensils etc.) made up of
        stone and copper so this period is known as Chalcolithic age. This phase
        existed between 1800- 800 BCE.
      </div>
      <br />
      <div className="text-2xl">Features of Chalcolithic Age</div> <br />
      <div>
        <div className="text-[1.1rem]">Lifestyle:</div>
        People of Chalcolithic age used microliths(small tools). <br />
        They lived near hills and reverine tracts. <br /> They were the first
        who established village economy. For their livelihood they were
        dependent on hunting, gathering, domestication, farming and
        fishing(mostly in Bihar and Bengal). <br />
        They constructed their houses with mud brick, thatched using wattle daub
        method. At some places they were fortified and surrounded by moat.{" "}
        <br /> <br />
        <div className="text-[1.1rem]">Pottery :</div>
        They generally used black and red pottery, at some places they used
        ochre-colored pottery. They were the first to use linear white paint on
        these pottery. They used potter's wheel to make them. <br /> <br />
        <div className="text-[1.1rem]">Religious Beliefs :</div>
        Terracotta figure of mother goddess and bull found which might be
        worshipped by them. <br /> <br />
        <div className="text-[1.1rem]">Social Inequality :</div>
        Social inequality also arose in this period. Some people were burried
        with pots and some with copper necklace. At some places necklaces of
        semi-precious stones(steatite, carneian beads) were also found. <br />{" "}
        <br />
        <div className="text-[1.1rem]">Burial Style :</div>
        People in Central India burried the dead in N-S position under the
        house. In South India dead were burried in E-W position. In East India
        fractional burial were found.
      </div>
      <br />
      <div className="text-[1.2rem]">Limitation of Chalcolithic Age</div>
      <div>
        High Mortality of children. Cause of deaths are not known. <br />
        Limited availability of copper also impact their growth. <br />
        They did not knew the art of making bronze by mixing tin with copper.
      </div>{" "}
      <br />
      <div className="text-[1.2rem]">Important Excavations :</div>
      <div className="overflow-x-scroll">
        {" "}
        <table className="HistoryTable w-[550px] border-2 border-slate-500">
          <tr>
            <th className="border-2 border-slate-500 pr-[1em]">Place</th>
            <th className="border-2 border-slate-500 pr-[1em]">Discovery</th>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">Gilund</td>
            <td className="border-2 border-slate-500 ">Stone Blade Industry</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">
              Jorwe and Chandoli
            </td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Flat, Rectangular copper axes
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">Chandoli</td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Copper Chisels
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">
              MP and Maharastra
            </td>
            <td className="border-2 border-slate-500 pr-[1em] ">
              Channel spouted pots, Dishes and Bowls on stand{" "}
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">Inamgaon</td>
            <td className="border-2 border-slate-500 pr-[1em] ">
              House with 4 rectangular room and 1 circular room
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">Malwa</td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Spindle Whorls, Cotton, silk etc.
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">Navdatoli</td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Wheat, Rice, Bajra, Latin etc.
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">
              Rajasthan, MP{" "}
            </td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Buffaloes, Cows, Goats, Pigs, Ships etc.
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-500 pr-[1em]">
              Bihar and Bengal
            </td>
            <td className="border-2 border-slate-500 pr-[1em]">
              Fish hooks, Rice
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div className="flex place-content-between px-[1rem]">
        <Link
          className="bg-green-700/90 w-[4rem] text-center"
          to={`/history/ancient/pre-historic`}
        >
          Prev
        </Link>
        <Link
          className="bg-green-700/90 w-[4rem] text-center"
          to={`/history/ancient/indus-valley`}
        >
          Next
        </Link>
      </div>
    </>
  );
}
export default Chalcolithic;
