import Walk from "@/assets/images/transport_walk.svg?react";
import Bus from "@/assets/images/transport_bus.svg?react";
import Subway from "@/assets/images/transport_subway.svg?react";
import Car from "@/assets/images/transport_car.svg?react";
import Bicycle from "@/assets/images/transport_bicycle.svg?react";
import Train from "@/assets/images/transport_train.svg?react";

export const TRANSPORTATION_NAMES = [
  "걸어서",
  "버스",
  "지하철",
  "자동차",
  "자전거",
  "기차",
] as const;
export type TransportationName = (typeof TRANSPORTATION_NAMES)[number];

export const TRANSPORTATION_ICON_SRC: Record<
  TransportationName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  걸어서: Walk,
  버스: Bus,
  지하철: Subway,
  자동차: Car,
  자전거: Bicycle,
  기차: Train,
} as const;
