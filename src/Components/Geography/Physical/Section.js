import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Geomorphology//
import ContinentsOceans from "./content/ContinentsOceans";
import EarthInterior from "./content/EarthInterior";
import EarthOrigin from "./content/EarthOrigin";
import Geomorphic from "./content/Geomorphic";
import Geomorphology from "./content/Geomorphology";
import Landforms from "./content/Landforms";
import PlateTectonic from "./content/PlateTectonic";
import Rocks from "./content/Rocks";
import TimeScale from "./content/TimeScale";
import GeomorphicFeature from "./content/GeomorphicFeature";

//Oceanography//
import HydrologicalCycle from "./content/HydrologicalCycle";
import OceanFloor from "./content/OceanFloor";
import Oceanography from "./content/Oceanography";
import Salinity from "./content/Salinity";
import SeaFloorSpreading from "./content/SeaFloorSpreading";
import Temperature from "./content/Temperature";

//Climatology//
import Atmosphere from "./content/Atmosphere";
import AtmosphericCirculation from "./content/AtmosphericCirculation";
import Climatology from "./content/Climatology";
import Insolation from "./content/Insolation";
import WorldClimate from "./content/WorldClimate";

//Indian Geography//
import Climate from "./content/Climate";
import DrainageSystem from "./content/DrainageSystem";
import NaturalVegetation from "./content/NaturalVegetation";
import Physiography from "./content/Physiography";
import Soil from "./content/Soil";
import SoilErosionConservation from "./content/SoilErosionConservation";
import SoilFormation from "./content/SoilFormation";
import SoilType from "./content/SoilType";

export const ROUTES = [
  {
    path: "geomorphology",
    element: <Geomorphology />,
    name: "Geomorphology",
  },
  {
    path: "earth-origin",
    element: <EarthOrigin />,
    name: "Earth Origin",
  },
  {
    path: "earth-interior",
    element: <EarthInterior />,
    name: "Earth Interior",
  },
  {
    path: "continents-oceans",
    element: <ContinentsOceans />,
    name: "Continents & Oceans",
  },
  {
    path: "geomorphic-process",
    element: <Geomorphic />,
    name: "Geomorphic Process",
  },
  {
    path: "plate-tectonic",
    element: <PlateTectonic />,
    name: "Plate Tectonic",
  },
  {
    path: "landforms",
    element: <Landforms />,
    name: "Landforms",
  },
  {
    path: "rocks",
    element: <Rocks />,
    name: "Rock Cycle",
  },
  {
    path: "geological-time-scale",
    element: <TimeScale />,
    name: "Time Scale",
  },
  {
    path: "oceanography",
    element: <Oceanography />,
    name: "Oceanography",
  },
  {
    path: "hydrological-cycle",
    element: <HydrologicalCycle />,
    name: "Hydrological Cycle",
  },
  {
    path: "ocean-floor-configuration",
    element: <OceanFloor />,
    name: "Ocean Floor Configuration",
  },
  {
    path: "sea-floor-spreading",
    element: <SeaFloorSpreading />,
    name: "Sea Floor Spreading",
  },
  {
    path: "temperature",
    element: <Temperature />,
    name: "Ocean's Temperature",
  },
  {
    path: "salinity",
    element: <Salinity />,
    name: "Oceans's Salinity",
  },
  {
    path: "climatology",
    element: <Climatology />,
    name: "Climatology",
  },
  {
    path: "atmosphere",
    element: <Atmosphere />,
    name: "Atmosphere",
  },
  {
    path: "insolation",
    element: <Insolation />,
    name: "Insolation",
  },
  {
    path: "atmospheric-circulation",
    element: <AtmosphericCirculation />,
    name: "Atmospheric Circulations",
  },
  {
    path: "world-climate",
    element: <WorldClimate />,
    name: "World Climate",
  },
  {
    path: "indian-physiography",
    element: <Physiography />,
    name: "Indian Physiography",
  },
  {
    path: "drainage-system",
    element: <DrainageSystem />,
    name: "Drainage System",
  },
  {
    path: "climate",
    element: <Climate />,
    name: "Climate/Monsoon",
  },
  {
    path: "soil",
    element: <Soil />,
    name: "Soil",
  },
  {
    path: "soil-formation",
    element: <SoilFormation />,
    name: "Soil Formation",
  },
  {
    path: "soil-type",
    element: <SoilType />,
    name: "Soil Type",
  },
  {
    path: "soil-erosion-conservation",
    element: <SoilErosionConservation />,
    name: "Soil Erosion & Conservation",
  },
  {
    path: "natural-vegetation",
    element: <NaturalVegetation />,
    name: "Natural Vegetation",
  },
  {
    path: "change-in-geomorphic-feature",
    element: <GeomorphicFeature />,
    name: "Change in Geomorphic Features",
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
                  <Link to={`/geography/physical/${item.path}`}>
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
