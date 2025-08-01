import { regions } from "../data/regions";
import { RegionPath, Svg } from "../styles/componentStyles/KoreaMapStyle";
import type { KoreaMapProps } from "../types/koreaMap";
import type { RegionType } from "../types/region";

export default function KoreaMap({
  hoveredRegion,
  setHoveredRegion,
  selectedRegion,
  setSelectedRegion,
}: KoreaMapProps) {
  function handleRegionSelect(region: RegionType) {
    if (region.id === selectedRegion?.id) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(region);
    }
  }

  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 524 631"
        aria-label="Map of South Korea"
        style={{ width: 600, height: 600 }}
      >
        {regions.map((region) => (
          <RegionPath
            key={region.id}
            id={region.id}
            name={region.name}
            d={region.d}
            $fill={
              selectedRegion?.id === region.id ||
              hoveredRegion?.id === region.id
                ? "#ffd803"
                : region.color
            }
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionSelect(region)}
          />
        ))}
      </Svg>
    </>
  );
}
