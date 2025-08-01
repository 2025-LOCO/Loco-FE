import { useState } from "react";
import KoreaMap from "../../components/map/KoreaMap";
import * as S from "./styles/indexStyle";
import type { RegionType } from "../../types/region";
import { regions } from "../../data/regions";

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
      <S.CustomTripSection>
        <KoreaMap
          hoveredRegion={hoveredRegion}
          setHoveredRegion={setHoveredRegion}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <S.DestContainer>
          <S.DestInput placeholder="어디로 여행을 떠나고 싶으신가요?" />
          <S.SelectDesc>지도를 눌러 선택해보세요!</S.SelectDesc>
          <S.SelectContainer>
            {regions.map((region) => (
              <S.SelectRegion
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
              </S.SelectRegion>
            ))}
          </S.SelectContainer>
        </S.DestContainer>
      </S.CustomTripSection>
    </>
  );
}
