import LocationDropDown from "@/components/LocationDropDown";
// import * as S from "./styles/layout";
import * as S from "./styles";
import Divider from "@/components/Divider";

export default function LocoTalkPage() {
  const TabMenus = [
    { name: "로코지기", to: "/explore/loco-guide" },
    { name: "로코장소", to: "/explore/loco-place" },
    { name: "로코루트", to: "/explore/loco-route" },
    { name: "로코문답", to: "/loco-talk" },
  ];
  return (
    <S.TalkSection>
      {/* 헤더 섹션 */}
      <div>
        <LocationDropDown />
        <S.LocationIntroduce>지역에 대한 한 줄 설명</S.LocationIntroduce>
      </div>
      <S.Title>로코 문답</S.Title>

      {/* 로코지기, 로코장소, 로코루트, 로코문답 탐색 메뉴 탭 */}
      <S.TabContainer>
        {TabMenus.map((tabMenu) => (
          <S.TabItem to={tabMenu.to} key={tabMenu.name}>
            {tabMenu.name}
          </S.TabItem>
        ))}
      </S.TabContainer>

      <Divider
        height="1px"
        backgroundColor="color-mix(in srgb, var(--color-navy) 30%, white);"
        maxWidth="100%"
      />

      {/* 컨텐츠 영역 */}
      <S.ContentArea>
        {/* 필터 영역 */}
        <S.FilterBar>
          <S.FilterTitle>답변을 기다리고 있어요 …</S.FilterTitle>
          <S.SortSelect>
            <option>최신순</option>
            <option>조회순</option>
          </S.SortSelect>
        </S.FilterBar>

        {/* 테이블 영역 */}
        <S.TableContainer>
          <S.ListHeader>
            <span>No.</span>
            <span>제목</span>
            <span>답변</span>
            <span>조회수</span>
            <span>작성일</span>
          </S.ListHeader>

          <S.ListRow>
            <span>1</span>
            <S.PostTitle>
              퇴근후 세영쌤과 쉬어갈만한 조용한 공원이 있을까요?
            </S.PostTitle>
            <span>3</span>
            <span>5</span>
            <span>2025.08.10</span>
          </S.ListRow>

          <S.ListRow>
            <span>2</span>
            <S.PostTitle>조세영쌤 빨리 집에가세요!!!</S.PostTitle>
            <span>0</span>
            <span>3</span>
            <span>2025.08.10</span>
          </S.ListRow>
        </S.TableContainer>

        {/* 페이지네이션 */}
        <S.Pagination>
          <S.PageButton disabled>이전</S.PageButton>
          <S.PageNumber className="active">1</S.PageNumber>
          <S.PageNumber>2</S.PageNumber>
          <S.PageNumber>3</S.PageNumber>
          <span>...</span>
          <S.PageNumber>7</S.PageNumber>
          <S.PageNumber>8</S.PageNumber>
          <S.PageButton>다음</S.PageButton>
        </S.Pagination>
      </S.ContentArea>

      <S.ContentArea_1>
        {/* 필터 영역 */}
        <S.FilterBar_1>
          <S.FilterTitle>답변을 확인하세요!</S.FilterTitle>
          <S.SortSelect>
            <option>최신순</option>
            <option>조회순</option>
          </S.SortSelect>
        </S.FilterBar_1>

        {/* 테이블 영역 */}
        <S.TableContainer>
          <S.ListHeader>
            <span>No.</span>
            <span>제목</span>
            <span>답변</span>
            <span>조회수</span>
            <span>작성일</span>
          </S.ListHeader>

          <S.ListRow>
            <span>1</span>
            <S.PostTitle>
              홍천에 부모님과 갈만한 조용한 공원이 있을까요?
            </S.PostTitle>
            <span>3</span>
            <span>5</span>
            <span>2025.08.10</span>
          </S.ListRow>

          <S.ListRow>
            <span>2</span>
            <S.PostTitle>
              파주에 영어마을형 임진각을 가고 싶은데 차가 없는데 어떻게
              이동하는게 좋을까요?
            </S.PostTitle>
            <span>0</span>
            <span>3</span>
            <span>2025.08.10</span>
          </S.ListRow>
        </S.TableContainer>

        {/* 페이지네이션 */}
        <S.Pagination>
          <S.PageButton disabled>이전</S.PageButton>
          <S.PageNumber className="active">1</S.PageNumber>
          <S.PageNumber>2</S.PageNumber>
          <S.PageNumber>3</S.PageNumber>
          <span>...</span>
          <S.PageNumber>7</S.PageNumber>
          <S.PageNumber>8</S.PageNumber>
          <S.PageButton>다음</S.PageButton>
        </S.Pagination>
      </S.ContentArea_1>
    </S.TalkSection>
  );
}
