import styled from "styled-components";
// import { useEffect, useRef, useState } from "react";
import DownIcon from "@/assets/images/arrow_drop_down_navy.svg";
// import type { RegionType } from "@/types/region";

// interface LocationDropdownProps {
//   regions: RegionType[];
//   value: string; // 현재 선택된 value
//   onChange: (value: string) => void;
//   placeholder?: string;
// }

export default function LocationDropDown() {
  return (
    <>
      <LocationDropDownComp>
        <div>고양시 덕양구</div>
        <img src={DownIcon} alt="아래 화살표" />
      </LocationDropDownComp>
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
