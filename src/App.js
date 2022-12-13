import { Routes, Route } from "react-router-dom";

import AllTopics from "./Components/AllTopics";
import ArtCulture from "./Components/Art&Culture/ArtCulture";
import Economics from "./Components/Economics/Economics";
import EnvironmentSecurity from "./Components/EnvironmentSecurity/EnvironmentSecurity";
import Ethics from "./Components/Ethics/Ethics";
import Geography from "./Components/Geography/Geography";
import GSJ from "./Components/GSJ/GSJ";
import History from "./Components/History/History";
import IR from "./Components/IR/IR";
import PIIS from "./Components/PIIS/PIIS";
import Polity from "./Components/Polity/Polity";
import SCITECH from "./Components/SCITECH/SCITECH";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<AllTopics />}></Route>

        <Route path="/history/*" element={<History />}></Route>
        <Route path="/art-culture/*" element={<ArtCulture />}></Route>
        <Route path="/geography/*" element={<Geography />}></Route>
        <Route path="/pi-is/*" element={<PIIS />}></Route>
        <Route path="/polity/*" element={<Polity />}></Route>
        <Route path="/governance-social-justice/*" element={<GSJ />}></Route>
        <Route path="/international-relations/*" element={<IR />}></Route>
        <Route path="/economics/*" element={<Economics />}></Route>
        <Route path="/sci-tech/*" element={<SCITECH />}></Route>
        <Route
          path="/environment-security/*"
          element={<EnvironmentSecurity />}
        ></Route>
        <Route path="/ethics/*" element={<Ethics />}></Route>
      </Routes>
    </>
  );
}

export default App;
