import type { LocoRoute } from "./locoRoute";
import type { Place } from "./place";

export type MapType = "loco" | "travel" | "public";

export interface MapOutletContext {
  mapType: MapType;
  places: Place[];
  routes: LocoRoute[];
  setSelectedRouteId: (id: number) => void;
}
