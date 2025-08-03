import { useState } from "react";
import KoreaMap from "@/components/map/KoreaMap";
import * as S from "./styles";
import type {
  AllSubRegionsType,
  RegionType,
  SubRegionsType,
  SubRegionType,
} from "@/types/region";
import { regions } from "@/data/regions";
import { getSubRegion } from "@/apis/sgis/sgisService";

export default function CustomTripPage() {
  // state
  // 상위 지역 (시/도)
  const [hoveredRegion, setHoveredRegion] = useState<RegionType | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionType | null>(null);

  // 하위 지역 (시/군/구)
  const [subRegions, setSubRegions] = useState<SubRegionsType | null>(null);
  const [hoveredSubRegion, setHoveredSubRegion] =
    useState<SubRegionType | null>(null);
  const [selectedSubRegion, setSelectedSubRegion] =
    useState<SubRegionType | null>(null);
  // 캐시용 전체 하위 지역
  const [allSubRegions, setAllSubRegions] = useState<AllSubRegionsType | null>(
    {}
  );

  // handler

  async function handleRegionSelect(region: RegionType) {
    setSubRegions([]);
    // 1. 동일 지역 선택: 선택 해제
    if (region.id === selectedRegion?.id) {
      setSelectedRegion(null);

      return;
    }

    // 2. 새로운 지역 선택
    setSelectedRegion(region);
    console.log("새로운 지역 선택: ", region);

    const cachedData = allSubRegions?.[region.code];

    // 2-1. 캐시 존재: 사용
    if (cachedData) {
      console.log("캐시 데이터 사용");
      setSubRegions(cachedData);
      console.log(cachedData);
    }
    // 2-2. 캐시 존재 X: API 요청 후 캐시 저장
    else {
      try {
        console.log("api 요청 시작");
        const subRegionData = await getSubRegion(region.code);
        console.log(subRegionData);
        setAllSubRegions((prev) => ({
          ...prev,
          [region.code]: subRegionData,
        }));
        setSubRegions(subRegionData);
      } catch (error) {
        console.error("[시/군 데이터 조회 실패] ", error);
      }
    }
  }

  function handleSubRegionSelect(subRegion: SubRegionType) {
    // 1. 동일 지역 선택: 선택 해제
    if (subRegion.cd === selectedSubRegion?.cd) {
      setSelectedSubRegion(null);
      return;
    }

    // 2. 새로운 지역 선택
    setSelectedSubRegion(subRegion);
    console.log("새로운 지역 선택: ", subRegion);
  }

  return (
    <>
      <S.CustomTripSection>
        <KoreaMap
          hoveredRegion={hoveredRegion}
          setHoveredRegion={setHoveredRegion}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          onRegionSelect={handleRegionSelect}
        />
        <S.DestContainer>
          <S.DestInput placeholder="어디로 여행을 떠나고 싶으신가요?" />
          <S.SelectDesc>지도를 눌러 선택해보세요!</S.SelectDesc>
          <S.SelectContainer>
            {!selectedRegion
              ? regions.map((region) => (
                  <S.SelectRegion
                    key={region.id}
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionSelect(region)}
                    $backgroundColor={
                      hoveredRegion?.id === region.id ||
                      selectedRegion?.id === region.id
                        ? "#ccd2d5"
                        : "#e1e3ec"
                    }
                  >
                    {region.korName}
                  </S.SelectRegion>
                ))
              : subRegions?.map((subRegion) => (
                  <S.SelectRegion
                    key={subRegion.cd}
                    onMouseEnter={() => setHoveredSubRegion(subRegion)}
                    onMouseLeave={() => setHoveredSubRegion(null)}
                    onClick={() => handleSubRegionSelect(subRegion)}
                    $backgroundColor={
                      hoveredSubRegion?.cd === subRegion.cd ||
                      selectedSubRegion?.cd === subRegion.cd
                        ? "#ccd2d5"
                        : "#e1e3ec"
                    }
                  >
                    {subRegion.addr_name}
                  </S.SelectRegion>
                ))}
          </S.SelectContainer>
        </S.DestContainer>
      </S.CustomTripSection>
    </>
  );
}
