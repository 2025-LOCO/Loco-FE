import type { MapType } from "@/types/mapType";
import { Outlet } from "react-router";

export default function MapLayout({ mapType }: { mapType: MapType }) {
  // const TAB_MENUS = [
  //   { name: "프로필", to: "profile" },
  //   { name: "장소", to: "place" },
  //   { name: "루트", to: "route" },
  // ];

  const titleMap = {
    loco: "내 로코지도 레이아웃",
    travel: "내 여행지도 레이아웃",
    public: "공개지도 레이아웃",
  } as const;

  return (
    <>
      <div>{titleMap[mapType]}</div>
      <Outlet />
    </>
  );
}
