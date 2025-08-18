import { regions } from "@/data/regions";
import * as S from "./styles/KoreaMap";
import type * as T from "./types/KoreaMap";
import type { RegionType } from "@/types/region";

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

  const HIGHLIGHT = "#ffdc66";
  const MUTED = "#E3F6F5";

  const getFill = (region: RegionType) => {
    if (selectedRegion?.id === region.id) return HIGHLIGHT; // 1) 최우선 - 선택된 항목
    if (hoveredRegion?.id === region.id) return HIGHLIGHT; // 2) 호버한 항목
    // 3) 선택이 있으면 나머지는 흐리게
    if (selectedRegion) return MUTED;
    // 4) 아무것도 없으면 기본색
    return region.color;
  };

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
            $fill={getFill(region)}
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => onRegionSelect(region)}
          />
        ))}
      </S.Svg>
    </>
  );
}
