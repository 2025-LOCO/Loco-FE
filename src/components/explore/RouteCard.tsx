import * as S from "./styles";
import LikedIcon from "@/assets/images/explore_liked.svg";
import {
  TRANSPORTATION_ICON_SRC,
  transportationNameMap,
  type TransportationName,
} from "@/constants/transportationIcons";
import { toKoreanValue } from "@/lib/mapping";
import type { RouteItem } from "@/apis/routes/getRouteListByUser";

export default function RouteCard({ data }: { data: RouteItem }) {
  return (
    <S.Route.Card to={`/u/${data.userId}/map/route`}>
      <S.Route.CardContentContainer>
        <div>
          <S.Route.ImgWrapper $hasImg={data.imageUrl ? true : false}>
            <S.Route.LocationBadge>{data.location}</S.Route.LocationBadge>
            {data.imageUrl && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={data.imageUrl}
                  alt="장소이미지"
                  width={180}
                  height={110}
                />
              </div>
            )}
          </S.Route.ImgWrapper>

          {/* 태그 한글 변환 */}
          <S.Route.TagContainer>
            {Object.entries(data.tags).map(([key, tagValue], idx) => {
              const rawValue =
                typeof tagValue === "object" && tagValue !== null
                  ? tagValue.name // 객체라면 .name 추출
                  : tagValue;

              const koreanTag = toKoreanValue(key, rawValue);
              return <div key={idx}>#{koreanTag}</div>;
            })}
          </S.Route.TagContainer>
        </div>

        <div>
          <S.Common.Title>{data.name}</S.Common.Title>
          <div style={{ paddingTop: "5px" }} />
          <S.Common.Intro>{data.intro}</S.Common.Intro>
        </div>

        <S.Route.PlaceTransportContainer>
          {/* 장소 태그 */}
          <S.Route.PlaceContainer>
            {data.places.map((place) => (
              <S.Route.PlaceTag key={place.id}>{place.name}</S.Route.PlaceTag>
            ))}
          </S.Route.PlaceContainer>

          {/* 이동수단 아이콘 */}
          <S.Route.TransportContainer>
            {data.transportations.map((by) => {
              // API에서 받은 이름 → TRANSPORTATION_ICON_SRC 키로 변환
              const mappedName =
                transportationNameMap[by.name] ??
                (by.name as TransportationName);

              const TransportIcon =
                TRANSPORTATION_ICON_SRC[mappedName as TransportationName];

              if (!TransportIcon) {
                // console.warn("Unknown transport:", by.name);
                return null;
              }

              return <TransportIcon key={by.id} />;
            })}
          </S.Route.TransportContainer>
        </S.Route.PlaceTransportContainer>
      </S.Route.CardContentContainer>

      {/* 좋아요 영역 */}
      <S.Route.LikedContainer>
        <img src={LikedIcon} alt="담아요아이콘" />
        <S.Route.LikedNum>{data.liked}</S.Route.LikedNum>
      </S.Route.LikedContainer>
    </S.Route.Card>
  );
}
