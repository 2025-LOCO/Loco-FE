import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  return (
    <>
      <div>{mapType} 장소패널</div>
    </>
  );
}
