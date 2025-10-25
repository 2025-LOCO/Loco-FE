import type { RoutePlace } from "@/types/locoRoute";
import type { Transportation } from "@/types/locoRoute";
import * as S from "./styles/routeTimeLine";

interface Props {
  places: RoutePlace[];
  transportations: Transportation[];
}

export default function RouteTimeline({ places, transportations }: Props) {
  // Day별 그룹핑
  const groupedByDay = places.reduce<Record<number, RoutePlace[]>>(
    (acc, place) => {
      if (!acc[place.day]) acc[place.day] = [];
      acc[place.day].push(place);
      return acc;
    },
    {}
  );

  return (
    <S.Wrap>
      {Object.entries(groupedByDay).map(([day, dayPlaces]) => {
        // 해당 Day의 place와 transportation 정렬
        const sortedPlaces = [...dayPlaces].sort((a, b) => a.order - b.order);
        const sortedTrans = transportations
          .filter((t) => t.day === Number(day))
          .sort((a, b) => a.order - b.order);

        return (
          <S.DayGroup key={day}>
            <S.Row>
              <S.DayLabel>Day {day}</S.DayLabel>
              <S.LineCell>
                <S.Dot />
              </S.LineCell>
              <S.Content>
                {sortedPlaces.map((place, idx) => (
                  <div key={place.id}>
                    <S.PlaceTitle>
                      {place.name}
                      <S.PlaceCategory>
                        <span style={{ padding: "0 2px" }}>ㅣ</span>
                        {place.category}
                      </S.PlaceCategory>
                    </S.PlaceTitle>

                    {/* 해당 장소 뒤에 올 교통수단 */}
                    {sortedTrans[idx] && (
                      <S.Transportation>
                        {sortedTrans[idx].name}
                      </S.Transportation>
                    )}
                  </div>
                ))}
              </S.Content>
            </S.Row>
          </S.DayGroup>
        );
      })}
    </S.Wrap>
  );
}
