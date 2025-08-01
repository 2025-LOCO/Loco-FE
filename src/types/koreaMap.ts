import type { RegionType } from "./region";

export interface KoreaMapProps {
  hoveredRegion: RegionType | null;
  setHoveredRegion: React.Dispatch<React.SetStateAction<RegionType | null>>;
  selectedRegion: RegionType | null;
  setSelectedRegion: React.Dispatch<React.SetStateAction<RegionType | null>>;
}
