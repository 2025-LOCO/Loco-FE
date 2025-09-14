import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SubRegionType } from "@/types/region";

type RegionStore = {
  selectedSubRegion: SubRegionType | null;
  setSelectedSubRegion: (region: SubRegionType | null) => void;
};

export const useRegionStore = create<RegionStore>()(
  persist(
    (set) => ({
      selectedSubRegion: null,
      setSelectedSubRegion: (region) => set({ selectedSubRegion: region }),
    }),
    {
      name: "region-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
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
