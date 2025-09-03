import * as S from "./styles/SearchBar";
import SearchIcon from "@/assets/images/search.svg";

interface SearchBarProps {
  width: string;
}

export default function SearchBar({ width }: SearchBarProps) {
  return (
    <S.SearchBar $width={width}>
      <S.SearchInput placeholder="검색" />
      <S.SearchBtn>
        <img src={SearchIcon} alt="검색아이콘" style={{ display: "block" }} />
      </S.SearchBtn>
    </S.SearchBar>
  );
}
