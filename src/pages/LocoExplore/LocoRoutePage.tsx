import { useState, useRef, useEffect } from "react";
import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestRouteIcon from "@/assets/images/explore_best.svg";
import NewRouteIcon from "@/assets/images/explore_new.svg";
import DownIcon from "@/assets/images/arrow_drop_down_navy.svg";

import * as D from "@/data/dummy/exploreRoutes";
import * as S from "./styles/routePage";
import type { LocoRoute } from "@/types/locoRoute";
import RouteCard from "@/components/explore/RouteCard";
import { useAnswerStore } from "@/stores/answerStore";
import { questions } from "@/data/questions";
import type { AnswerValueMap } from "@/data/answers";

export default function LocoRoutePage() {
  const { answers, setAnswer } = useAnswerStore();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // label 목록
  const labels = [
    "여행기간",
    "여행장소",
    "동반자",
    "이동수단",
    "분위기",
    "하루방문지수",
  ];

  return (
    <>
      <S.DropdownContainer ref={wrapperRef}>
        {questions.map((q, index) => (
          <S.DropdownWrapper key={q.id}>
            <S.DropdownButton
              onClick={() =>
                setOpenDropdown(openDropdown === q.id ? null : q.id)
              }
            >
              <div>
                {answers[q.id]
                  ? `${labels[index]}: ${answers[q.id]}`
                  : `${labels[index]} 선택`}
              </div>
              <img src={DownIcon} alt="화살표" />
            </S.DropdownButton>

            {openDropdown === q.id && (
              <S.DropdownMenu>
                <S.DropdownItem
                  onClick={() => {
                    setAnswer(q.id, "전체" as AnswerValueMap[typeof q.id]);
                    setOpenDropdown(null);
                  }}
                >
                  전체
                </S.DropdownItem>
                {q.options.map((opt) => (
                  <S.DropdownItem
                    key={opt}
                    onClick={() => {
                      setAnswer(q.id, opt as AnswerValueMap[typeof q.id]);
                      setOpenDropdown(null);
                    }}
                  >
                    {opt}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </S.DropdownWrapper>
        ))}
      </S.DropdownContainer>

      <ExploreCardShelf<LocoRoute>
        title="루트 랭킹"
        icon={<img src={BestRouteIcon} alt="베스트루트아이콘" width={25} />}
        cardDataItems={D.bestRoutes}
        exploreCard={(cardDataItem) => <RouteCard data={cardDataItem} />}
      />

      <ExploreCardShelf<LocoRoute>
        title="신규 루트"
        icon={<img src={NewRouteIcon} alt="신규루트아이콘" width={25} />}
        cardDataItems={D.newRoutes}
        exploreCard={(cardDataItem) => <RouteCard data={cardDataItem} />}
      />
    </>
  );
}
