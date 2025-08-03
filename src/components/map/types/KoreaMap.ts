import type { RegionType } from "@/types/region";

export interface KoreaMapProps {
  hoveredRegion: RegionType | null;
  setHoveredRegion: React.Dispatch<React.SetStateAction<RegionType | null>>;
  selectedRegion: RegionType | null;
  setSelectedRegion: React.Dispatch<React.SetStateAction<RegionType | null>>;
  onRegionSelect: (region: RegionType) => void | Promise<void>;
}
