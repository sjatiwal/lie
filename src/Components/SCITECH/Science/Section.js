import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Chemistry//
import Atoms from "./content/Chemistry/Atoms";
import Compound from "./content/Chemistry/Compound";
import Element from "./content/Chemistry/Element";
import Mixture from "./content/Chemistry/Mixture";
import Molecules from "./content/Chemistry/Molecules";
import NuclearChemistry from "./content/Chemistry/NuclearChemistry";

//Physics//
import BigBangTheory from "./content/Physics/BigBangTheory";
import DarkMatter from "./content/Physics/DarkMatter";
import FerminosBoson from "./content/Physics/FerminosBoson";
import Forces from "./content/Physics/Forces";
import GravityWave from "./content/Physics/GravityWave";
import HiggsBoson from "./content/Physics/HiggsBoson";
import NegativeMatter from "./content/Physics/NegativeMatter";
import RareEarthElement from "./content/Physics/RareEarthElement";

//Biology//
import AminoAcid from "./content/Biology/AminoAcid";
import Cell from "./content/Biology/Cell";
import Diseases from "./content/Biology/Diseases";
import DNARNA from "./content/Biology/DNARNA";
import Enzyme from "./content/Biology/Enzyme";
import Fats from "./content/Biology/Fats";
import HumanSystem from "./content/Biology/HumanSystem";
import Microbes from "./content/Biology/Microbes";
import Minerals from "./content/Biology/Minerals";
import MitosisMeiosis from "./content/Biology/MitosisMeiosis";
import Protein from "./content/Biology/Protein";
import Vitamins from "./content/Biology/Vitamins";

export const ROUTES = [
  {
    path: "atoms",
    element: <Atoms />,
    name: "Atoms",
  },
  {
    path: "element",
    element: <Element />,
    name: "Element",
  },
  {
    path: "compound",
    element: <Compound />,
    name: "Compound",
  },
  {
    path: "mixture",
    element: <Mixture />,
    name: "Mixture",
  },
  {
    path: "molecules",
    element: <Molecules />,
    name: "Molecule",
  },
  {
    path: "nuclear-chemistyr",
    element: <NuclearChemistry />,
    name: "Nuclear Chemistry",
  },
  {
    path: "big-bang-theory",
    element: <BigBangTheory />,
    name: "Big Bang Theory",
  },
  {
    path: "dark-matter",
    element: <DarkMatter />,
    name: "Dark Matter",
  },
  {
    path: "ferminos-boson",
    element: <FerminosBoson />,
    name: "Ferminos & Boson",
  },
  {
    path: "forces",
    element: <Forces />,
    name: "Forces",
  },
  {
    path: "gravity-wave",
    element: <GravityWave />,
    name: "Gravity Wave",
  },
  {
    path: "higgs-boson-particle",
    element: <HiggsBoson />,
    name: "Higgs Boson Particle",
  },
  {
    path: "rare-earth-element",
    element: <RareEarthElement />,
    name: "Rare Earth Element",
  },
  {
    path: "negative-matter",
    element: <NegativeMatter />,
    name: "Negative Matter",
  },
  {
    path: "cell",
    element: <Cell />,
    name: "Cell",
  },
  {
    path: "microbes",
    element: <Microbes />,
    name: "Microbes",
  },
  {
    path: "enzyme",
    element: <Enzyme />,
    name: "Enzyme",
  },
  {
    path: "dna-rna",
    element: <DNARNA />,
    name: "DNA & RNA",
  },
  {
    path: "protein",
    element: <Protein />,
    name: "Protein",
  },
  {
    path: "vitamins",
    element: <Vitamins />,
    name: "Vitamins",
  },
  {
    path: "fats",
    element: <Fats />,
    name: "Fats",
  },
  {
    path: "amino-acid",
    element: <AminoAcid />,
    name: "Amino Acid",
  },
  {
    path: "minerals",
    element: <Minerals />,
    name: "Minerals",
  },
  {
    path: "human-system",
    element: <HumanSystem />,
    name: "Human System ",
  },
  {
    path: "mitosis-meiosis",
    element: <MitosisMeiosis />,
    name: "Mitosis Meiosis",
  },
  {
    path: "diseases",
    element: <Diseases />,
    name: "Diseases",
  },
];

function Section() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      {" "}
      <div
        onClick={() => setDisplay(!display)}
        className="  text-[.7rem] bg-slate-400 pl-[.8em] pt-[.3em] pb-[.2em] pr-[.3em]"
      >
        Menu
      </div>
      <div>
        {display ? (
          <div className="section h-screen overflow-scroll bg-gray-300  bottom-0   pt-[.2em] pl-[.2em] pr-[.2em] pb-[0]">
            {ROUTES.map((item) => {
              return (
                <div className="hover:bg-slate-400" key={`${item.name}`}>
                  <Link to={`/sci-tech/science/${item.path}`}>
                    <div>{item.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Section;
