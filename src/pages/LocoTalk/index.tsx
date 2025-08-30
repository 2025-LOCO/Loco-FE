import LocationDropDown from "@/components/LocationDropDown";
import * as S from "./styles";

export default function LocoTalkPage() {
  return (
    <>
      <S.TalkSection>
        <div>
          <LocationDropDown />
          <S.LocationIntroduce>지역에 대한 한 줄 설명</S.LocationIntroduce>
        </div>
        <S.Title>로코 문답</S.Title>
      </S.TalkSection>
    </>
  );
}
