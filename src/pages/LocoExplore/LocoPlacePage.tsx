import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestPlaceIcon from "@/assets/images/explore_best.svg";
import NewPlaceIcon from "@/assets/images/explore_new.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import * as S from "./styles/placePage";

type Place = {
  id: number;
  name: string;
  imageUrl: string | null;
  liked: number;
  location: string;
  intro: string;
};

const bestPlaces: Place[] = [
  {
    id: 1,
    name: "일산 호수공원",
    imageUrl: null,
    liked: 1284,
    location: "경기 고양시 일산동구",
    intro: "호수와 산책로가 매력적인 일산 대표 공원",
  },
  {
    id: 2,
    name: "킨텍스",
    imageUrl: null,
    liked: 975,
    location: "경기 고양시 일산서구",
    intro: "국내 최대 규모의 전시·컨벤션 센터",
  },
  {
    id: 3,
    name: "라페스타",
    imageUrl: null,
    liked: 812,
    location: "경기 고양시 일산동구",
    intro: "야외 스트리트형 쇼핑·맛집 거리",
  },
  {
    id: 4,
    name: "웨스턴돔",
    imageUrl: null,
    liked: 698,
    location: "경기 고양시 일산동구",
    intro: "맛집과 카페가 모인 복합 문화 거리",
  },
  {
    id: 5,
    name: "정발산 공원",
    imageUrl: null,
    liked: 642,
    location: "경기 고양시 일산동구",
    intro: "정발산 자락의 녹음과 조용한 산책로",
  },
];

const newPlaces: Place[] = [
  {
    id: 101,
    name: "카페 로코라떼",
    imageUrl: null,
    liked: 92,
    location: "경기 고양시 덕양구",
    intro: "로컬 로스터리 라떼가 인기인 감성 카페",
  },
  {
    id: 102,
    name: "레트로 베이커리",
    imageUrl: null,
    liked: 88,
    location: "경기 수원시 권선구",
    intro: "추억 감성 가득한 클래식 베이커리",
  },
  {
    id: 103,
    name: "일산 플랜트샵",
    imageUrl: null,
    liked: 76,
    location: "경기 고양시 일산서구",
    intro: "반려식물과 소품을 만날 수 있는 힐링 공간",
  },
  {
    id: 104,
    name: "갤러리 덕양",
    imageUrl: null,
    liked: 64,
    location: "경기 고양시 덕양구",
    intro: "지역 작가 전시가 열리는 아담한 갤러리",
  },
  {
    id: 105,
    name: "루프탑 라운지",
    imageUrl: null,
    liked: 59,
    location: "경기 성남시 분당구",
    intro: "야경이 근사한 루프탑 라운지 바",
  },
];

function PlaceCard({ data }: { data: Place }) {
  return (
    <S.Card>
      <S.CardContentContainer>
        <S.ImgWrapper $hasImg={data.imageUrl ? true : false}>
          <S.LocationBadge>{data.location}</S.LocationBadge>
          {data.imageUrl && <img src={data.imageUrl} alt="장소이미지" />}
        </S.ImgWrapper>
        <S.PlaceTitle>{data.name}</S.PlaceTitle>
        <S.PlaceContent>{data.intro}</S.PlaceContent>
      </S.CardContentContainer>
      <S.LikedContainer>
        <img src={LikedIcon} alt="담아요아이콘" />
        <S.LikedNum>{data.liked}</S.LikedNum>
      </S.LikedContainer>
    </S.Card>
  );
}

export default function LocoPlacePage() {
  return (
    <>
      <ExploreCardShelf<Place>
        title="장소 랭킹"
        icon={<img src={BestPlaceIcon} alt="베스트장소아이콘" width={25} />}
        cardDataItems={bestPlaces}
        exploreCard={(p, i) => <PlaceCard data={p} />}
      />
      <ExploreCardShelf<Place>
        title="신규 장소"
        icon={<img src={NewPlaceIcon} alt="신규장소아이콘" width={25} />}
        cardDataItems={newPlaces}
        exploreCard={(p, i) => <PlaceCard data={p} />}
      />
    </>
  );
}
