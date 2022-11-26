import AllTopics from "./Components/AllTopics";
import ArtCulture from "./Components/Art&Culture/ArtCulture";
import Economics from "./Components/Economics/Economics";
import Environment from "./Components/Environment/Environment";
import Geography from "./Components/Geography/Geography";
import History from "./Components/History/History";
import Polity from "./Components/Polity/Polity";
import SCI_TECH from "./Components/Sci_Tech/Sci_Tech";

import { Routes, Route } from "react-router-dom";
import Ethics from "./Components/Ethics/Ethics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<AllTopics />}></Route>

        <Route path="/history/*" element={<History />}></Route>
        <Route path="/art-culture/*" element={<ArtCulture />}></Route>
        <Route path="/polity" element={<Polity />}></Route>
        <Route path="/geography/*" element={<Geography />}></Route>
        <Route path="/economics" element={<Economics />}></Route>
        <Route path="/sci_tech" element={<SCI_TECH />}></Route>
        <Route path="/ethics" element={<Ethics />}></Route>
        <Route path="/environment" element={<Environment />}></Route>
      </Routes>
    </>
  );
}

export default App;
