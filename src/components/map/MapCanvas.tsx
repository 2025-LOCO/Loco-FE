import { useEffect, useRef } from "react";
import * as S from "./styles/mapCanvas";

export default function MapCanvas() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return <S.MapCanvas ref={mapRef} id="map" />;
}
