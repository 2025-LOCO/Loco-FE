import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomTripPage from "./pages/CustomTripPage";
import LocoExplorePage from "./pages/LocoExplorePage";
import LocoTalkPage from "./pages/LocoTalkPage";
import MapMakerPage from "./pages/MapMakerPage";
import GuidePage from "./pages/GuidePage";
import RootLayout from "./layouts/RootLayout";

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
