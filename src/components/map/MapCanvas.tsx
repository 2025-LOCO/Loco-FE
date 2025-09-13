import { useEffect, useRef } from "react";
import * as S from "./styles/mapCanvas";
import { bestPlaces } from "@/data/dummy/explorePlaces";
import PlaceMarker from "@/assets/images/marker_place.svg";
import RoutePlaceMarker from "@/assets/images/marker_route_place.svg";
import SelectedMarker from "@/assets/images/marker_selected.svg";
import type { MapType } from "@/types/map";
import type { Place } from "@/types/place";
import type { LocoRoute } from "@/types/locoRoute";

type MapCanvasProps = {
  mapType: MapType;
  places: Place[];
  routes: LocoRoute[];
};

export default function MapCanvas({ mapType }: MapCanvasProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);

    const imageSrc = PlaceMarker, // 마커이미지 경로
      imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지 크기
      imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표

    // 마커이미지 생성
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    // 장소 리스트 마커 찍기
    bestPlaces.forEach((place) => {
      const markerPosition = new window.kakao.maps.LatLng(
        place.latitude,
        place.longitude
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        map: map,
        title: place.name,
      });

      // 클릭 이벤트
      window.kakao.maps.event.addListener(marker, "click", () => {
        alert(`${place.name} 클릭됨!`);
      });
    });
  }, []);

  return <S.MapCanvas ref={mapRef} id="map" />;
}
