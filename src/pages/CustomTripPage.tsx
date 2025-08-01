import { useState } from "react";
import KoreaMap from "../components/KoreaMap";
import {
  CustomTripSection,
  DestInput,
  DestContainer,
  SelectDesc,
  SelectContainer,
  SelectRegion,
} from "../styles/pageStyles/CustomTripStyle";
import type { RegionType } from "../types/region";
import { regions } from "../data/regions";

export default function CustomTripPage() {
  const [hoveredRegion, setHoveredRegion] = useState<RegionType | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionType | null>(null);

  function handleSelect(region: RegionType) {
    if (region.id === selectedRegion?.id) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(region);
    }
  }

  return (
    <>
      <CustomTripSection>
        <KoreaMap
          hoveredRegion={hoveredRegion}
          setHoveredRegion={setHoveredRegion}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <DestContainer>
          <DestInput placeholder="어디로 여행을 떠나고 싶으신가요?" />
          <SelectDesc>지도를 눌러 선택해보세요!</SelectDesc>
          <SelectContainer>
            {regions.map((region) => (
              <SelectRegion
                key={region.id}
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleSelect(region)}
                $backgroundColor={
                  hoveredRegion?.id === region.id ||
                  selectedRegion?.id === region.id
                    ? "#ccd2d5"
                    : "#e1e3ec"
                }
              >
                {region.korName}
              </SelectRegion>
            ))}
          </SelectContainer>
        </DestContainer>
      </CustomTripSection>
    </>
  );
}
