import { Route, Routes } from "react-router";
import "@/App.css";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import CustomTripPage from "@/pages/CustomTrip";
import LocoExplorePage from "@/pages/LocoExplore";
import LocoTalkPage from "@/pages/LocoTalk";
import MapMakerPage from "@/pages/MapMaker";
import GuidePage from "@/pages/Guide";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import MyPage from "./pages/My/MyPage";
import LocoMapPage from "./pages/My/LocoMap";
import TravelMapPage from "./pages/My/TravelMap";

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
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="my-page" element={<MyPage />} />
          <Route path="loco-map" element={<LocoMapPage />} />
          <Route path="travel-map" element={<TravelMapPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
