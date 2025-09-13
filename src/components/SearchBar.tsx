import { useState } from "react";
import * as S from "./styles/SearchBar";
import SearchIcon from "@/assets/images/search.svg";

interface SearchBarProps {
  width: string;
  onSearch: (keyword: string) => void;
}

export default function SearchBar({ width, onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword);
    }
  }

  return (
    <S.SearchBar $width={width} as="form" onSubmit={handleSubmit}>
      <S.SearchInput
        placeholder="검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <S.SearchBtn type="submit">
        <img src={SearchIcon} alt="검색아이콘" style={{ display: "block" }} />
      </S.SearchBtn>
    </S.SearchBar>
  );
}
