import styled from "styled-components";
// import { useEffect, useRef, useState } from "react";
import DownIcon from "@/assets/images/arrow_drop_down_navy.svg";
import { useEffect, useRef, useState } from "react";
import { regions } from "@/data/regions";
import { getSubRegion } from "@/apis/tour/tourService";
import { useRegionStore } from "@/stores/regionStore";
import type { RegionType, SubRegionType } from "@/types/region";
// import type { RegionType } from "@/types/region";

// interface LocationDropdownProps {
//   regions: RegionType[];
//   value: string; // 현재 선택된 value
//   onChange: (value: string) => void;
//   placeholder?: string;
// }

export default function LocationDropDown() {
  //states
  const [open, setOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>(""); // 시/도
  const [subRegions, setSubRegions] = useState<SubRegionType[]>([]); // 시/군/구

  //zustand
  const { selectedSubRegion, setSelectedSubRegion } = useRegionStore();

  //refs
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleRegionClick = async (region: RegionType) => {
    setSelectedRegion(region.code);
    const subRegionData = await getSubRegion(region.code);
    setSubRegions(subRegionData);
  };

  const handleSubRegionClick = (sub: SubRegionType) => {
    setSelectedSubRegion(sub);
    setOpen(false); // 선택 후 닫기
  };

  return (
    <>
      <DropdownWrapper ref={wrapperRef}>
        {/* 기본 버튼 */}
        <LocationDropDownComp onClick={() => setOpen(!open)}>
          <div>
            {selectedSubRegion ? `${selectedSubRegion.full_addr}` : "전체"}
          </div>
          <img src={DownIcon} alt="아래 화살표" />
        </LocationDropDownComp>

        {/* 드롭다운 메뉴 */}
        {open && (
          <DropdownMenu>
            {/* 1단계: 시/도 */}
            <DropdownSection>
              <SectionTitle>시/도 선택</SectionTitle>
              {/* 전체 */}
              <DropdownItem
                onClick={() => {
                  setSelectedRegion(""); // 시/도는 선택 안 함
                  setSelectedSubRegion({
                    cd: "00000",
                    addr_name: "전체",
                    full_addr: "전체",
                  });
                  setOpen(false); // 선택 후 닫기
                }}
              >
                전체
              </DropdownItem>
              {regions.map((region) => (
                <DropdownItem
                  key={region.code}
                  onClick={() => handleRegionClick(region)}
                >
                  {region.korName}
                </DropdownItem>
              ))}
            </DropdownSection>

            {/* 2단계: 시/군/구 */}
            {selectedRegion && (
              <DropdownSection>
                <SectionTitle>시/군/구 선택</SectionTitle>
                {subRegions.map((sub) => (
                  <DropdownItem
                    key={sub.cd}
                    onClick={() => handleSubRegionClick(sub)}
                  >
                    {sub.addr_name}
                  </DropdownItem>
                ))}
              </DropdownSection>
            )}
          </DropdownMenu>
        )}
      </DropdownWrapper>
    </>
  );
}

// styles
const LocationDropDownComp = styled.div`
  background-color: var(--color-mint200);
  border-radius: 10px;
  display: inline-flex;
  padding: 7px 10px 7px 15px;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  gap: 3px;

  color: black;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 4px;
  width: 480px;
  display: flex;
  z-index: 1000;
`;

const DropdownSection = styled.div`
  flex: 1;
  padding: 8px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-right: none;
  }
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const DropdownItem = styled.div`
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #e3f6f5;
  }
`;
