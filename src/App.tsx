import { Route, Routes } from "react-router";
import "@/App.css";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import CustomTripPage from "@/pages/CustomTrip";
import LocoExplorePage from "@/pages/LocoExplore";
import LocoTalkPage from "@/pages/LocoTalk";
import MapMakerPage from "@/pages/MapMaker";
import GuidePage from "@/pages/Guide";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="custom-trip" element={<CustomTripPage />} />
          <Route path="loco-explore" element={<LocoExplorePage />} />
          <Route path="loco-talk" element={<LocoTalkPage />} />
          <Route path="map-maker" element={<MapMakerPage />} />
          <Route path="guide" element={<GuidePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
