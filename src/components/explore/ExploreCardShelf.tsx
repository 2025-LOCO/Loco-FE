import { type ReactNode, type Key, useState } from "react";
import * as S from "./styles/exploreCardShelf";
import PagenationDots from "../PagenationDots";

interface ExploreCardShelfProps<T extends { id: Key }> {
  title: string;
  icon: ReactNode;
  cardDataItems: T[];
  exploreCard: (cardDataItem: T, index: number) => ReactNode;
}

export default function ExploreCardShelf<T extends { id: Key }>({
  title,
  icon,
  cardDataItems,
  exploreCard,
}: ExploreCardShelfProps<T>) {
  const hasItems = cardDataItems.length > 0;
  const [page, setPage] = useState(0);

  const CARD_PER_PAGE = 5;
  const startVisibleIdx = page * CARD_PER_PAGE;
  const endVisibleIdx = startVisibleIdx + CARD_PER_PAGE;
  const visibleItems = cardDataItems.slice(startVisibleIdx, endVisibleIdx);

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          {icon}
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        <S.CardContainer>
          {hasItems ? (
            visibleItems.map((visibleItem, i) => (
              <div key={visibleItem.id}>{exploreCard(visibleItem, i)}</div>
            ))
          ) : (
            <div>표시할 항목이 없습니다.</div>
          )}
        </S.CardContainer>
        <PagenationDots active={page} onChange={setPage} />
      </S.Section>
    </>
  );
}
