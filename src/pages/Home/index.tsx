import * as S from "./styles";
import LogoIcon from "@/assets/images/logo_home.svg";
import DownIcon from "@/assets/images/arrow_drop_down.svg";
import { useRef, useState } from "react";
import KoreaMap from "@/components/map/KoreaMap";
import type {
  AllSubRegionsType,
  RegionType,
  SubRegionsType,
  SubRegionType,
} from "@/types/region";
import { regions } from "@/data/regions";
import { getSubRegion } from "@/apis/sgis/sgisService";
import FirstButton from "@/components/FirstButton";

export default function HomePage() {
  // constants
  const exploreMenu = ["로코인", "로코장소", "로코루트", "로코문답"];
  const HEADER_PX = 86;

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

  // ref
  const mapSelectRef = useRef<HTMLDivElement>(null);

  // handler

  async function handleRegionSelect(region: RegionType) {
    setSubRegions([] as SubRegionsType);
    // 1. 동일 지역 선택: 선택 해제
    if (region.id === selectedRegion?.id) {
      setSelectedRegion(null);
      setSubRegions(null);
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
        const subRegionDataWithAll = [
          { cd: `${region.code}0000`, addr_name: `${region.korName}전체` },
          ...subRegionData,
        ];

        console.log(subRegionDataWithAll);
        setAllSubRegions((prev) => ({
          ...prev,
          [region.code]: subRegionDataWithAll,
        }));
        setSubRegions(subRegionDataWithAll);
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

  function handleScrollToMapSelect() {
    const element = mapSelectRef.current;
    if (!element) return;

    // 문서 전체에서의 절대 Y좌표 =현재 스크롤량 + element의 화면 상단까지의 거리 - HEADER_PX
    const top =
      window.scrollY + element.getBoundingClientRect().top - HEADER_PX;

    window.scrollTo({ top, behavior: "smooth" });
    // element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <S.MainSection>
        <S.MainContainer>
          <img src={LogoIcon} alt="logo" />
          <S.SubContainer>
            <S.Subtitle>
              <S.YelloDot>광</S.YelloDot>
              <S.YelloDot>고</S.YelloDot>에 지친 당신을 위한,{" "}
              <S.YelloDot>진</S.YelloDot>
              <S.YelloDot>짜</S.YelloDot> 여행 정보
            </S.Subtitle>
            <S.SubDescription>
              현지인과 소통하는 그곳의 진짜 이야기
            </S.SubDescription>
          </S.SubContainer>
        </S.MainContainer>
      </S.MainSection>
      <S.DescriptSection>
        <S.DescriptText>
          믿을 수 있는 정보
          <span style={{ fontWeight: 300 }}>로 시작해 보세요!</span>
        </S.DescriptText>
        <S.ExploreNavigator>
          {exploreMenu.map((menuItem, index) => (
            <S.ExploreItemWrapper key={`${menuItem}`}>
              <S.ExploreItem>{menuItem}</S.ExploreItem>
              {index < exploreMenu.length - 1 && <S.Divider>ㅣ</S.Divider>}
            </S.ExploreItemWrapper>
          ))}
        </S.ExploreNavigator>
        <S.DownButton
          src={DownIcon}
          alt="down-icon"
          onClick={handleScrollToMapSelect}
          role="button"
        />
      </S.DescriptSection>
      <S.MapSelectSection ref={mapSelectRef}>
        <S.MapLayer>
          <KoreaMap
            hoveredRegion={hoveredRegion}
            setHoveredRegion={setHoveredRegion}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            onRegionSelect={handleRegionSelect}
          />
        </S.MapLayer>
        <S.DestContainer>
          <div>
            <S.SelectTitle>
              <S.SelectTitleHighlignt>그려둔 여행지</S.SelectTitleHighlignt>가
              있으신가요?
            </S.SelectTitle>
            <S.SelectDesc>지도를 눌러 여행지를 선택해보세요!</S.SelectDesc>
          </div>
          <S.SelectContainer>
            {!selectedRegion
              ? regions.map((region: RegionType) => (
                  <S.SelectRegion
                    key={region.id}
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionSelect(region)}
                    $backgroundColor={
                      hoveredRegion?.id === region.id ? "#E3F6F5" : "none"
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
                        ? "#E3F6F5"
                        : "none"
                    }
                  >
                    {subRegion.addr_name}
                  </S.SelectRegion>
                ))}
          </S.SelectContainer>
          <FirstButton>바로 탐색하기</FirstButton>
        </S.DestContainer>
        <S.DestContainer>
          <S.SelectTitle>
            <S.SelectTitleHighlignt>설레는 여행지</S.SelectTitleHighlignt>를
            찾고 계신가요?
          </S.SelectTitle>
          <S.VerticalLineAndCircle />
          <FirstButton isRecommendBtn={true}>맞춤 루트 추천받기</FirstButton>
        </S.DestContainer>
      </S.MapSelectSection>
    </>
  );
}
