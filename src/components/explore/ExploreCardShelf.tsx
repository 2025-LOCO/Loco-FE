import { type ReactNode, type Key, useState } from "react";
import styled from "styled-components";
import PagenationDots from "../PagenationDots";

interface ExploreCardShelfProps<T extends { id: Key }> {
  title: string;
  icon: ReactNode;
  cardDataItems: T[];
  exploreCard: (dataItem: T, index: number) => ReactNode;
}

export default function ExploreCardShelf<T extends { id: Key }>({
  title,
  icon,
  cardDataItems,
  exploreCard,
}: ExploreCardShelfProps<T>) {
  const hasItems = cardDataItems.length > 0;
  const [page, setPage] = useState(0);

  return (
    <>
      <Section>
        <TitleContainer>
          {icon}
          <Title>{title}</Title>
        </TitleContainer>
        <CardContainer>
          {hasItems ? (
            cardDataItems.map((cardDataItem, i) => (
              <div key={cardDataItem.id}>{exploreCard(cardDataItem, i)}</div>
            ))
          ) : (
            <Empty>표시할 항목이 없습니다.</Empty>
          )}
        </CardContainer>
        <PagenationDots active={page} onChange={setPage} />
      </Section>
    </>
  );
}

const Section = styled.div`
  margin-top: 30px;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  gap: 37px;
`;
const TitleContainer = styled.div`
  display: inline-flex;
  gap: 5px;
`;
const Title = styled.div`
  color: var(--color-navy);
  /* font-size: 25px; */
  font-size: 22px;
  font-weight: 700;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
