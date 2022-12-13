import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Union//
//Parliament//
import LokSabha from "./content/Union/Parliament/LokSabha";
import Parliament from "./content/Union/Parliament/Parliament";
import President from "./content/Union/Parliament/President";
import RajyaSabha from "./content/Union/Parliament/RajyaSabha";

//Office//
import Chairman from "./content/Union/Office/Chairman";
import COM from "./content/Union/Office/COM";
import DeputyChairman from "./content/Union/Office/DeputyChairman";
import DeputySpeaker from "./content/Union/Office/DeputySpeaker";
import PanelOfChairpersons from "./content/Union/Office/PanelOfChairpersons";
import PanelOfViceChairpersons from "./content/Union/Office/PanelOfViceChairpersons";
import PrimeMinister from "./content/Union/Office/PrimeMinister";
import ProtemSpeaker from "./content/Union/Office/ProtemSpeaker";
import Speaker from "./content/Union/Office/Speaker";
import VicePresident from "./content/Union/Office/VicePresident";

//Bills//
import OrdinaryBill from "./content/Union/Bill/OrdinaryBill";
import MoneyBill from "./content/Union/Bill/MoneyBill";
import FinancialBill from "./content/Union/Bill/FinancialBill";
import CABill from "./content/Union/Bill/CABill";
import BillLapsing from "./content/Union/Bill/BillLapsing";

//State//
//State Legislature//
import LegislativeAssembly from "./content/State/StateLegislature/LegislativeAssembly";
import LegislativeCouncil from "./content/State/StateLegislature/LegislativeCouncil";
import StateLegislature from "./content/State/StateLegislature/StateLegislature";

//Office//
import ChiefMinister from "./content/State/Office/ChiefMinister";
import StateCOM from "./content/State/Office/COMs";
import Governor from "./content/State/Office/Governor";

//Bill//
import StateFinancialBill from "./content/State/Bill/StateFinancialBill";
import StateMoneyBill from "./content/State/Bill/StateMoneyBill";
import StateOrdinaryBill from "./content/State/Bill/StateOrdinaryBill";

//Local Government//
import PanchayatiRaj from "./content/LocalGovernment/PanchayatiRaj";
import UrbanLocalGovernment from "./content/LocalGovernment/UrbanLocalGoverment";

//Other//
import Budget from "./content/Other/Budget";
import InterStateRelationship from "./content/Other/InterStateRelations";
import ParliamentaryCommittee from "./content/Other/ParliamentaryCommittee";
import ScheduleTribalArea from "./content/Other/ScheduleTribalArea";
import SpecialProvision from "./content/Other/SpecialProvision";
import UnionStateRelation from "./content/Other/UnionStateRelation";
import UT from "./content/Other/UT";

export const ROUTES = [
  {
    path: "parliament",
    element: <Parliament />,
    name: "Parliament",
  },
  {
    path: "president",
    element: <President />,
    name: "President",
  },
  {
    path: "lok-sabha",
    element: <LokSabha />,
    name: "Lok Sabha",
  },
  {
    path: "rajya-sabha",
    element: <RajyaSabha />,
    name: "Rajya Sabha",
  },
  {
    path: "prime-minister",
    element: <PrimeMinister />,
    name: "Prime Minister",
  },
  {
    path: "council-of-minister",
    element: <COM />,
    name: "COM",
  },
  {
    path: "vice-president",
    element: <VicePresident />,
    name: "Vice-president",
  },
  {
    path: "speaker",
    element: <Speaker />,
    name: "Speaker",
  },
  {
    path: "deputy-speaker",
    element: <DeputySpeaker />,
    name: "Deputy Speaker",
  },
  {
    path: "pro-tem-speaker",
    element: <ProtemSpeaker />,
    name: "Protem Speaker",
  },
  {
    path: "chairman",
    element: <Chairman />,
    name: "Chairman",
  },
  {
    path: "deputy-chairman",
    element: <DeputyChairman />,
    name: "Deputy Chairman",
  },
  {
    path: "panel-of-chairperson",
    element: <PanelOfChairpersons />,
    name: "Panel of Chairpersons",
  },
  {
    path: "panel-of-vicechairperson",
    element: <PanelOfViceChairpersons />,
    name: "Panel of ViceChairpersons",
  },
  {
    path: "ordinary-bill",
    element: <OrdinaryBill />,
    name: "Ordinary Bill",
  },
  {
    path: "money-bill",
    element: <MoneyBill />,
    name: "Money Bill",
  },
  {
    path: "financial-bill",
    element: <FinancialBill />,
    name: "Financial Bill",
  },
  {
    path: "constitutional-bill",
    element: <CABill />,
    name: "Constitutional Amendment Bill",
  },
  {
    path: "lapsing-of-bill",
    element: <BillLapsing />,
    name: "Lapsing of Bill",
  },
  {
    path: "state-legislature",
    element: <StateLegislature />,
    name: "State Legislature",
  },
  {
    path: "legislative-assembley",
    element: <LegislativeAssembly />,
    name: "Legislative Assembly",
  },
  {
    path: "legislative-council",
    element: <LegislativeCouncil />,
    name: "Legislative council",
  },
  {
    path: "governor",
    element: <Governor />,
    name: "Governor",
  },
  {
    path: "council-of-minister",
    element: <StateCOM />,
    name: "COM",
  },
  {
    path: "chief-minister",
    element: <ChiefMinister />,
    name: "Chief Minister",
  },
  {
    path: "ordinary-bill",
    element: <StateOrdinaryBill />,
    name: "Ordinary Bill",
  },
  {
    path: "money-bill",
    element: <StateMoneyBill />,
    name: "Money Bill",
  },
  {
    path: "financial-bill",
    element: <StateFinancialBill />,
    name: "Financial Bill",
  },
  {
    path: "budget",
    element: <Budget />,
    name: "Budget",
  },
  {
    path: "panchayati-raj",
    element: <PanchayatiRaj />,
    name: "PanchayatiRaj",
  },
  {
    path: "urban-local-government",
    element: <UrbanLocalGovernment />,
    name: "Urban Local Government",
  },
  {
    path: "union-territories",
    element: <UT />,
    name: "UTs",
  },
  {
    path: "union-states-relations",
    element: <UnionStateRelation />,
    name: "Union State Relation",
  },
  {
    path: "inter-state-relationship",
    element: <InterStateRelationship />,
    name: "Inter State Relationship",
  },
  {
    path: "schedule-tribal-area",
    element: <ScheduleTribalArea />,
    name: "Schedule & Tribal Area",
  },
  {
    path: "special-provision",
    element: <SpecialProvision />,
    name: "Special Provision for states",
  },
  {
    path: "parlimentary-committee",
    element: <ParliamentaryCommittee />,
    name: "Parliamentary Committee",
  },
];

function Section() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {" "}
      <div
        onClick={() => setDisplay(!display)}
        className="  text-[.7rem] bg-slate-400 pl-[.8em] pt-[.3em] pb-[.2em] pr-[.3em]"
      >
        Menu
      </div>
      <div>
        {display ? (
          <div className="section h-screen overflow-scroll bg-gray-300  mb-[0] pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/polity/union-state/${item.path}`}>
                    <div>{item.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Section;
