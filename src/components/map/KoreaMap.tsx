import { regions } from "@/data/regions";
import * as S from "./styles/KoreaMap";
import type * as T from "./types/KoreaMap";

export default function KoreaMap({
  hoveredRegion,
  setHoveredRegion,
  selectedRegion,
  // setSelectedRegion,
  onRegionSelect,
}: T.KoreaMapProps) {
  // function handleRegionSelect(region: RegionType) {
  //   if (region.id === selectedRegion?.id) {
  //     setSelectedRegion(null);
  //   } else {
  //     setSelectedRegion(region);
  //   }
  // }

  return (
    <>
      <S.Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 524 631"
        aria-label="Map of South Korea"
        style={{ width: 630, height: 630 }}
      >
        {regions.map((region) => (
          <S.RegionPath
            key={region.id}
            id={region.id}
            name={region.name}
            d={region.d}
            $fill={
              selectedRegion?.id === region.id ||
              hoveredRegion?.id === region.id
                ? "#ffd803"
                : region.color
            } // #ffd803
            // #E3F6F5
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => onRegionSelect(region)}
          />
        ))}
      </S.Svg>
    </>
  );
}
