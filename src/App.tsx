import { Navigate, Route, Routes } from "react-router";
import "@/App.css";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import CustomTripPage from "@/pages/CustomTrip";
import LocoTalkPage from "@/pages/LocoTalk";
import MapMakerPage from "@/pages/MapMaker";
import GuidePage from "@/pages/Guide";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import MyPage from "./pages/My/Mypage";
import ExploreLayout from "./pages/LocoExplore/ExploreLayout";
import LocoGuidePage from "./pages/LocoExplore/LocoGuidePage";
import LocoPlacePage from "./pages/LocoExplore/LocoPlacePage";
import LocoRoutePage from "./pages/LocoExplore/LocoRoutePage";

import DetailPage from "./pages/LocoTalk/DetailPage";

import MapLayout from "./pages/Map/MapLayout";
import ProfilePanel from "./components/map/ProfilePanel";
import PlacePanel from "./components/map/PlacePanel";
import RoutePanel from "./components/map/RoutePanel";

import TalkEdit from "@/pages/LocoTalk/TalkEdit";
import TalkLayout from "@/pages/LocoTalk/TalkLayout";
import { useAuthStore } from "./stores/authStore";
import { useEffect, useState } from "react";

function App() {
  const setLoggedIn = useAuthStore((s) => s.setLoggedIn);
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setLoggedIn(!!token);
    setAuthChecked(true);
  }, [setLoggedIn]);

  if (!authChecked) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="custom-trip" element={<CustomTripPage />} />
          <Route path="explore" element={<ExploreLayout />}>
            <Route index element={<Navigate to="loco-guide" replace />} />
            <Route path="loco-guide" element={<LocoGuidePage />} />
            <Route path="loco-place" element={<LocoPlacePage />} />
            <Route path="loco-route" element={<LocoRoutePage />} />
          </Route>

          <Route path="loco-talk" element={<TalkLayout />}>
            <Route index element={<LocoTalkPage />} /> {/* 문답 리스트 */}
            <Route path="edit" element={<TalkEdit />} /> {/* 질문 작성 */}
            <Route path=":id" element={<DetailPage />} /> {/* 상세 보기 */}
          </Route>

          <Route path="map-maker" element={<MapMakerPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />

          {/* 마이페이지 */}
          <Route path="my-page" element={<MyPage />} />

          {/* 1. 마이 map 페이지 */}
          {/* 1.1 나의 현지(로코) 지도 */}
          <Route path="my-loco-map" element={<MapLayout mapType="loco" />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfilePanel />} />
            <Route path="place" element={<PlacePanel />} />
            <Route path="route" element={<RoutePanel />} />
          </Route>
          {/* 1.2 나의 여행 지도 */}
          <Route path="my-travel-map" element={<MapLayout mapType="travel" />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfilePanel />} />
            <Route path="place" element={<PlacePanel />} />
            <Route path="route" element={<RoutePanel />} />
          </Route>
          {/* 2. 다른 사람들이 보는 map 페이지 (readOnly)*/}
          {/* <Route path="u/:nickname/map" element={<MapLayout mapType="public" />}> */}
          <Route path="u/:user_id/map" element={<MapLayout mapType="public" />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfilePanel />} />
            <Route path="place" element={<PlacePanel />} />
            <Route path="route" element={<RoutePanel />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
