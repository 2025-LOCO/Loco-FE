import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  console.log(context);
  return (
    <>
      <div>{mapType} 루트패널</div>
    </>
  );
}
