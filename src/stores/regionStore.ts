import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SubRegionType } from "@/types/region";

const DEFAULT_REGION: SubRegionType = {
  cd: "00000",
  addr_name: "전체",
};

type RegionStore = {
  selectedSubRegion: SubRegionType | null;
  setSelectedSubRegion: (region: SubRegionType | null) => void;
};

export const useRegionStore = create<RegionStore>()(
  persist(
    (set) => ({
      selectedSubRegion: DEFAULT_REGION,
      setSelectedSubRegion: (region) => set({ selectedSubRegion: region }),
    }),
    {
      name: "region-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value
            ? JSON.parse(value)
            : { state: { selectedSubRegion: DEFAULT_REGION } };
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
