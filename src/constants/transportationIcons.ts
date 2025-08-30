import Walk from "@/assets/images/transport_walk.svg";
import Bus from "@/assets/images/transport_bus.svg";
import Subway from "@/assets/images/transport_subway.svg";
import Car from "@/assets/images/transport_car.svg";
import Bicycle from "@/assets/images/transport_bicycle.svg";
import Train from "@/assets/images/transport_train.svg";

export const TRANSPORTATION_NAMES = [
  "걸어서",
  "버스",
  "지하철",
  "자동차",
  "자전거",
  "기차",
] as const;
export type TransportationName = (typeof TRANSPORTATION_NAMES)[number];

export const TRANSPORTATION_ICON_SRC: Record<TransportationName, string> = {
  걸어서: Walk,
  버스: Bus,
  지하철: Subway,
  자동차: Car,
  자전거: Bicycle,
  기차: Train,
} as const;
