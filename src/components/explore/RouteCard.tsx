import type { LocoRoute } from "@/types/locoRoute";
import * as S from "./styles";
import LikedIcon from "@/assets/images/explore_liked.svg";
import {
  TRANSPORTATION_ICON_SRC,
  type TransportationName,
} from "@/constants/transportationIcons";

export default function RouteCard({ data }: { data: LocoRoute }) {
  return (
    <S.Route.Card to="/public-map/route">
      <S.Route.CardContentContainer>
        <div>
          <S.Route.ImgWrapper $hasImg={data.imageUrl ? true : false}>
            <S.Route.LocationBadge>{data.location}</S.Route.LocationBadge>
            {data.imageUrl && <img src={data.imageUrl} alt="장소이미지" />}
          </S.Route.ImgWrapper>

          <S.Route.TagContainer>
            {data.tags.map((tag) => (
              <div key={tag.id}># {tag.name}</div>
            ))}
          </S.Route.TagContainer>
        </div>

        <div>
          <S.Common.Title>{data.name}</S.Common.Title>
          <div style={{ paddingTop: "5px" }} />
          <S.Common.Intro>{data.intro}</S.Common.Intro>
        </div>
        <S.Route.PlaceTransportContainer>
          <S.Route.PlaceContainer>
            {data.places.map((place) => (
              <S.Route.PlaceTag key={place.id}>{place.name}</S.Route.PlaceTag>
            ))}
          </S.Route.PlaceContainer>
          <S.Route.TransportContainer>
            {data.transportations.map((by) => {
              const TransportIcon =
                TRANSPORTATION_ICON_SRC[by.name as TransportationName];
              return <TransportIcon key={by.id} />;
            })}
          </S.Route.TransportContainer>
        </S.Route.PlaceTransportContainer>
      </S.Route.CardContentContainer>
      <S.Route.LikedContainer>
        <img src={LikedIcon} alt="담아요아이콘" />
        <S.Route.LikedNum>{data.liked}</S.Route.LikedNum>
      </S.Route.LikedContainer>
    </S.Route.Card>
  );
}
