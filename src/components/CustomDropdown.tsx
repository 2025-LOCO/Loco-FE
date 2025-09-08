import React from "react";
import styled from "styled-components";

// 화살표 이미지 import (경로 맞춰주세요!)
import ArrowIcon from "@/assets/images/dropdown_icon.svg";

interface CustomDropdownProps {
  options: string[];
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function CustomDropdown({
  options,
  index,
  openIndex,
  setOpenIndex,
}: CustomDropdownProps) {
  const isOpen = openIndex === index;
  const [selected, setSelected] = React.useState("#태그명");

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpenIndex(isOpen ? null : index)}>
        <span>{selected}</span>
        {/* 🔽 아이콘을 <img>로 넣기 */}
        <img
          src={ArrowIcon}
          alt="arrow"
          width={10}
          height={13}
        />
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options.map((option, i) => (
            <DropdownItem
              key={i}
              onClick={() => {
                setSelected(option);
                setOpenIndex(null); // 선택 시 닫기
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

/* 스타일 */
const DropdownWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 150px;
`;

const DropdownButton = styled.div`
  flex: 1;
  min-width: 150px;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  background: #1d274b;
  color: white;
  font-size: 15px;
  font-weight: 200;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px 10px 10px 20px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #d9f7f7ff;
  }
`;
