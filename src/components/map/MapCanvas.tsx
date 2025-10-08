import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as S from "./styles/mapCanvas";
import PlaceMarker from "@/assets/images/marker_place.svg";
import RoutePlaceMarker from "@/assets/images/marker_route_place.svg";
import SelectedMarker from "@/assets/images/marker_selected.svg";
import type { MapType } from "@/types/map";
import type { Place } from "@/types/place";
import type { LocoRoute, RoutePlace } from "@/types/locoRoute";
import { useLocation } from "react-router";
import ReactDOM from "react-dom/client";
import PlaceCard from "@/components/place/PlaceCard";
import { placeDetails } from "@/data/dummy/placeDetail";

export interface MapCanvasRef {
  kakaoMap: any;
  fitBounds: any;
}

type MapCanvasProps = {
  mapType: MapType;
  places: Place[];
  routes: LocoRoute[];
  selectedPlaceId: number | null;
  selectedRouteId: number | null;
  selectedRoutePlaces: RoutePlace[];
  onPlaceClick?: (placeId: number | null) => void;
  onRouteClick?: (routeId: number | null) => void;
};

const MapCanvas = forwardRef<MapCanvasRef, MapCanvasProps>(
  ({ places, selectedPlaceId, selectedRoutePlaces, onPlaceClick }, ref) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const kakaoMapRef = useRef<any>(null);
    const markersRef = useRef<any[]>([]);
    const overlayRef = useRef<any>(null);
    const location = useLocation();
    const panel = location.pathname.split("/").pop(); // "profile" | "place" | "route"

    // states
    const [placeDetail, setPlaceDetail] = useState<Place | null>(null);

    // 부모에서 kakaoMapRef 접근 가능하도록 export
    useImperativeHandle(ref, () => ({
      kakaoMap: kakaoMapRef.current,
      fitBounds: (places: Place[]) => {
        if (!kakaoMapRef.current || places.length === 0) return;
        const bounds = new window.kakao.maps.LatLngBounds();
        places.forEach((p) =>
          bounds.extend(new window.kakao.maps.LatLng(p.latitude, p.longitude))
        );
        kakaoMapRef.current.setBounds(bounds);
      },
    }));

    // effects
    // 지도 최초 생성
    useEffect(() => {
      if (mapRef.current && !kakaoMapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        kakaoMapRef.current = new window.kakao.maps.Map(
          mapRef.current,
          options
        );
      }
    }, []);
    // 지도 bounds 자동 조정
    useEffect(() => {
      if (!kakaoMapRef.current || places.length === 0) return;

      const bounds = new window.kakao.maps.LatLngBounds();

      places.forEach((p) => {
        bounds.extend(new window.kakao.maps.LatLng(p.latitude, p.longitude));
      });

      kakaoMapRef.current.setBounds(bounds);
    }, [places]);

    // selectedPlaceId가 바뀔 때 placeDetail 세팅
    useEffect(() => {
      if (selectedPlaceId !== null) {
        const place = placeDetails.find(
          (place) => place.id === selectedPlaceId
        );
        setPlaceDetail(place ?? null);
      }
    }, [selectedPlaceId]);

    // 마커 업데이트
    useEffect(() => {
      if (!kakaoMapRef.current) return;

      // 기존 마커 제거
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      // 기존 오버레이 제거
      if (overlayRef.current) {
        overlayRef.current.setMap(null);
        overlayRef.current = null;
      }

      const imageSize = new window.kakao.maps.Size(40, 40);
      const imageOption = { offset: new window.kakao.maps.Point(20, 40) };

      places.forEach((place) => {
        const isSelectedPlace = place.id === selectedPlaceId;
        const isInSelectedRoute = selectedRoutePlaces.some(
          (rp) => rp.id === place.id
        );

        const imageSrc = isSelectedPlace
          ? SelectedMarker
          : isInSelectedRoute
          ? RoutePlaceMarker
          : PlaceMarker;

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const markerPosition = new window.kakao.maps.LatLng(
          place.latitude,
          place.longitude
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
          map: kakaoMapRef.current,
          title: place.name,
          zIndex: 3,
        });

        // 부모 핸들러 호출
        window.kakao.maps.event.addListener(marker, "click", () => {
          // if (panel === "profile" || panel === "place") {
          //   // 장소 단일 선택 토글
          //   onPlaceClick?.(place.id === selectedPlaceId ? null : place.id);
          // } else if (panel === "route") {
          //   // 해당 place가 속한 route 찾기
          //   const route = routes.find((r) =>
          //     r.places.some((rp) => rp.id === place.id)
          //   );
          //   if (route) {
          //     onRouteClick?.(route.id === selectedRouteId ? null : route.id);
          //   }
          // }
          onPlaceClick?.(place.id === selectedPlaceId ? null : place.id);
        });

        markersRef.current.push(marker);

        // 선택된 장소면 PlaceCard 오버레이 추가
        if (isSelectedPlace && panel !== "place") {
          const container = document.createElement("div");
          container.style.width = "auto";
          container.style.height = "auto";
          container.style.transform = "translate(-50%, -120%)";
          container.style.position = "relative";

          // 컴포넌트 마운트
          const root = ReactDOM.createRoot(container);
          root.render(<PlaceCard isCard={true} place={placeDetail} />);

          overlayRef.current = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: container,
            map: kakaoMapRef.current,
            xAnchor: 0.5, // 마커 기준 가로 가운데 정렬
            yAnchor: 1, // 마커 기준 위쪽에 붙임
            zIndex: 2000,
            clickable: true,
          });
        }
      });
    }, [
      places,
      selectedPlaceId,
      selectedRoutePlaces,
      onPlaceClick,
      panel,
      placeDetail,
    ]);

    return <S.MapCanvas ref={mapRef} id="map" />;
  }
);
export default MapCanvas;
