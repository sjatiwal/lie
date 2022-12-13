import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AhemdabadMillStrike from "./content/AhemdabadMillStrike";
import AngloMarathaWar from "./content/AngloMarathaWar";
import AngloMysoreWar from "./content/AngloMysoreWar";
import AngloSikhWar from "./content/AngloSikhWar";
import AryaSamaj from "./content/AryaSamaj";
import Association from "./content/Association";
import AugustDecleration from "./content/AugustDecleration";
import AugustOffer from "./content/AugustOffer";
import BattleOfBuxar from "./content/BattleOfBuxar";
import BattleOfPlassey from "./content/BattleOfPlassey";
import BattleOfWandiwash from "./content/BattleOfWandiwash";
import CabinateMission from "./content/CabinateMission";
import CarnaticWar from "./content/CarnaticWar";
import CDM from "./content/CDM";
import ChamparanSatyagraha from "./content/ChamparanSatyagraha";
import CharterAct from "./content/CharterAct";
import CommunalAward from "./content/CommunalAward";
import CrippsMission from "./content/CrippsMission";
import Education from "./content/Education";
import FirstWorldWar from "./content/FirstWorldWar";
import GOIAct1935 from "./content/GOIAct1935";
import HomeRuleLeague from "./content/HomeRuleLeague";
import IlbertBill from "./content/IlbertBill";
import INA from "./content/INA";
import INC from "./content/INC";
import IndianCouncilAct from "./content/IndianCouncilAct";
import IndianIndependenceAct from "./content/IndianIndependenceAct";
import IndividualSatyagraha from "./content/IndividualSatyagraha";
import JallianwalaBagh from "./content/JallianwalaBagh";
import Jinnah14Points from "./content/Jinnah14Points";
import KhedaSatyagraha from "./content/KhedaSatyagraha";
import LaterMughals from "./content/LaterMughals";
import LucknowPact from "./content/LucknowPact";
import MahalwariSystem from "./content/MahalwariSystem";
import MontaguChelmsford from "./content/MontaguChelmsford";
import MorleyMintoReforms from "./content/MorleyMintoReforms";
import MountbattenPlan from "./content/MountbattenPlan";
import MuslimLeague from "./content/MuslimLeague";
import NadirShah from "./content/NadirShah";
import NCM from "./content/NCM";
import NehruReport from "./content/NehruReport";
import PartitionOfBengal from "./content/PartitionOfBengal";
import Press from "./content/Press";
import PoonaPact from "./content/PoonaPact";
import QIM from "./content/QIM";
import Revolt1857 from "./content/Revolt1857";
import RevolutionaryActivity from "./content/RevolutionaryActivity";
import RowlattAct from "./content/RowlattAct";
import RRMRoy from "./content/RRMRoy";
import RTC from "./content/RTC";
import RyotwariSystem from "./content/RyotwariSystem";
import SecondWorldWar from "./content/SecondWorldWar";
import SimonCommission from "./content/SimonCommission";
import SubsidiaryAlliance from "./content/SubsidiaryAlliance";
import SuratSplit from "./content/SuratSplit";
import SwarajistNoChangers from "./content/SwarajistNoChangers";
import ThirdBattleOfPanipat from "./content/ThirdBattleOfPanipat";
import WavellPlan from "./content/WavellPlan";

export const ROUTES = [
  {
    path: "later-mughals",
    element: <LaterMughals />,
    name: "Later Mughals",
  },
  {
    path: "nadir-shah",
    element: <NadirShah />,
    name: "Nadir Shah",
  },
  {
    path: "carnatic-war",
    element: <CarnaticWar />,
    name: "Carnatic War",
  },
  {
    path: "battle-of-plassey",
    element: <BattleOfPlassey />,
    name: "Battle of Plassey",
  },
  {
    path: "battle-of-wandiwash",
    element: <BattleOfWandiwash />,
    name: "Battle of Wandiwash",
  },
  {
    path: "panipat-3rd-battle",
    element: <ThirdBattleOfPanipat />,
    name: "3rd Battle of Panipat",
  },
  {
    path: "battle-of-buxar",
    element: <BattleOfBuxar />,
    name: "Battle of Buxar",
  },
  {
    path: "charter-act",
    element: <CharterAct />,
    name: "Charter Act",
  },
  {
    path: "anglo-mysore-war",
    element: <AngloMysoreWar />,
    name: "Anglo Mysore War",
  },
  {
    path: "anglo-maratha-war",
    element: <AngloMarathaWar />,
    name: "Anglo Marath war",
  },
  {
    path: "subsidiary-alliance",
    element: <SubsidiaryAlliance />,
    name: "Subsidiary Alliance",
  },
  {
    path: "ryotwari-system",
    element: <RyotwariSystem />,
    name: "Ryotwari System",
  },
  {
    path: "mahalwari-system",
    element: <MahalwariSystem />,
    name: "Mahalwari System",
  },
  {
    path: "raja-rammohan-roy",
    element: <RRMRoy />,
    name: "Raja Rammohan Roy",
  },
  {
    path: "anglo-sikh-war",
    element: <AngloSikhWar />,
    name: "Anglo Sikh War",
  },
  {
    path: "revolt-1857",
    element: <Revolt1857 />,
    name: "Revolt 1857",
  },
  {
    path: "education",
    element: <Education />,
    name: "Education",
  },
  {
    path: "indian-council-act",
    element: <IndianCouncilAct />,
    name: "Indian Council Act",
  },
  {
    path: "associations",
    element: <Association />,
    name: "Associations",
  },

  {
    path: "arya-samaj",
    element: <AryaSamaj />,
    name: "Arya Samaj",
  },
  {
    path: "press",
    element: <Press />,
    name: "Press",
  },
  {
    path: "ilbert-bill",
    element: <IlbertBill />,
    name: "Ilbert Bill",
  },
  {
    path: "indian-national-congress",
    element: <INC />,
    name: "INC",
  },
  {
    path: "partition-of-bengal",
    element: <PartitionOfBengal />,
    name: "Partition of Bengal",
  },
  {
    path: "muslim-league",
    element: <MuslimLeague />,
    name: "Muslim League",
  },
  {
    path: "surat-split",
    element: <SuratSplit />,
    name: "Surat Split",
  },
  {
    path: "morley-minto-reforms",
    element: <MorleyMintoReforms />,
    name: "Morley Minto Reforms",
  },
  {
    path: "first-world-war",
    element: <FirstWorldWar />,
    name: "First World War",
  },
  {
    path: "home-rule-league",
    element: <HomeRuleLeague />,
    name: "Home Rule League",
  },
  {
    path: "lucknow-pact",
    element: <LucknowPact />,
    name: "Lucknow Pact",
  },
  {
    path: "august-decleration",
    element: <AugustDecleration />,
    name: "August Decleration",
  },
  {
    path: "champaran-satyagraha",
    element: <ChamparanSatyagraha />,
    name: "Champaran Satyagraha",
  },
  {
    path: "ahemdabad-mill-strike",
    element: <AhemdabadMillStrike />,
    name: "Ahemdabad Mill Strike",
  },
  {
    path: "kheda-satyagraha",
    element: <KhedaSatyagraha />,
    name: "Kheda Satyagraha",
  },
  {
    path: "montagu-chelmsford",
    element: <MontaguChelmsford />,
    name: "Montagu Chelmsford",
  },
  {
    path: "rowlatt-act",
    element: <RowlattAct />,
    name: "Rowlatt Act",
  },
  {
    path: "Jallianwala-bagh-massacre",
    element: <JallianwalaBagh />,
    name: "Jallianwala Bagh Massacre",
  },
  {
    path: "non-cooperation-movement",
    element: <NCM />,
    name: "Non Cooperation Movement",
  },
  {
    path: "swarajist-and-no-changer",
    element: <SwarajistNoChangers />,
    name: "Swarajist & No-Changers",
  },
  {
    path: "revolutionary-activity",
    element: <RevolutionaryActivity />,
    name: "Revolutionary Activity",
  },
  {
    path: "simon-commission",
    element: <SimonCommission />,
    name: "Simon Commission",
  },
  {
    path: "nehru-report",
    element: <NehruReport />,
    name: "Nehru Report",
  },
  {
    path: "jinnah's-14-points",
    element: <Jinnah14Points />,
    name: "Jinnah's 14 Points",
  },
  {
    path: "civil-disobedience-movement",
    element: <CDM />,
    name: "Civil Disobedience Movement",
  },
  {
    path: "round-table-conference",
    element: <RTC />,
    name: "Round Table Conference",
  },
  {
    path: "commmunal-award",
    element: <CommunalAward />,
    name: "Communal Award",
  },
  {
    path: "poona-pact",
    element: <PoonaPact />,
    name: "Poona Pact",
  },
  {
    path: "government-of-india-act-1935",
    element: <GOIAct1935 />,
    name: "GOI Act 1935",
  },
  {
    path: "2nd-world-war",
    element: <SecondWorldWar />,
    name: "2nd World War",
  },
  {
    path: "august-offer",
    element: <AugustOffer />,
    name: "August Offer",
  },
  {
    path: "individual-satyagrah",
    element: <IndividualSatyagraha />,
    name: "Individual Satyagrah",
  },
  {
    path: "cripps-mission",
    element: <CrippsMission />,
    name: "Cripps Mission",
  },
  {
    path: "quit-india-movement",
    element: <QIM />,
    name: "QIM",
  },
  {
    path: "wavell-plan",
    element: <WavellPlan />,
    name: "Wavell Plan",
  },
  {
    path: "indian-national-army",
    element: <INA />,
    name: "INA",
  },
  {
    path: "cabinet Mission",
    element: <CabinateMission />,
    name: "Cabinate Mission",
  },
  {
    path: "mountbatten plan",
    element: <MountbattenPlan />,
    name: "Mountbatten Plan",
  },
  {
    path: "indian-independence-act",
    element: <IndianIndependenceAct />,
    name: "Indian Independence Act",
  },
];

export default function Section() {
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
          <div className="section h-screen overflow-scroll bg-gray-300  mb-[0]   pt-[.2em] pl-[.2em] pr-[.2em]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/history/modern/${item.path}`}>
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
