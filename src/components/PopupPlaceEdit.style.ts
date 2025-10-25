import styled from "styled-components";

/* 팝업 배경 (어두운 반투명 오버레이) */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/* 팝업 컨테이너 */
export const Container = styled.div`
  position: relative; /* 닫기 버튼 위치 기준 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 카드 위, 버튼 아래 */
  gap: 20px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  width: 95%;
  max-width: 1200px;
  min-height: 70vh; /* ✅ 팝업 크기 통일 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

/* 닫기 버튼 */
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #bebdbdff;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

/* 카드들을 묶는 래퍼 */
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; /* ✅ 카드 높이 통일 */
`;

/* 개별 카드 */
export const Card = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /*  제목 항상 위쪽 */
  gap: 10px;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  aspect-ratio: 3 / 4;
  min-width: 280px;
  min-height: 400px; /* 카드 높이 강제 */
`;
/* 해시태그 전용 카드 */
export const TagCard = styled(Card)`
  gap: 12px;  
`;

/* 섹션 제목 */
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 60px; /*  간격 통일 */
`;

/* 입력 행 (라벨 + 인풋/셀렉트) */
export const Inputtag = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  width: 100%;
`;

/* 입력 행 (라벨 + 인풋/셀렉트) */
export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; // ← 라벨과 인풋 사이 간격
  width: 100%;
`;

/* 라벨 */
export const Label = styled.div`
  width: 80px;
  min-width: 80px;
  font-size: 16px;
  font-weight: 500;
  color: #8c8c8c;
  text-align: left;
`;

/* 인풋 */
export const InputBox = styled.textarea`
  flex: 1;
  width: 100%;
  min-height: 63px;
  padding: 15px;
  border-radius: 25px;
  border: none;
  background: #1d274b;
  color: white;
  font-size: 15px;
  font-weight: 100;
  resize: none;

  /* 줄바꿈 처리 */
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  /* 내용 많을 때만 스크롤 (근데 스크롤바는 안보임) */
  overflow-y: auto;

  &::placeholder {
    color: #f8f5f5ff;
  }

  /* ✅ 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE, Edge */
  scrollbar-width: none;     /* Firefox */
`;

/* 인풋 2*/
export const Input_1 = styled.input`
  width: 100%;
  min-height: 18px;
  max-width: 270px;
  padding: 13px 40px 12px 15px; 
  border-radius: 25px;
  border: none;
  background: #1d274b;
  color: white;
 
  &::placeholder {
    color: white;
    font-size: 15px;
    font-weight: 300;
  }
`;

/* 드롭다운 (SelectBox) */
export const Select = styled.select`
  flex: 1;
  min-width: 150px;
  padding: 13px 40px 12px 13px; 

  border-radius: 25px;
  border: none;
  background: #1d274b;
  color: white;
  font-size: 12px;
  cursor: pointer;

  /* 기본 화살표 제거 (브라우저 기본 스타일 없애기) */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center; /* ⬅ 화살표 위치 */
  background-size: 16px;

  option {
    background: white;
    color: black;
  }
`;


/* 사진 업로드 박스 */
export const PhotoUpload = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px; /*  키워서 카드 높이 맞춤 */
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #8c8c8c;
  cursor: pointer;

  &:hover {
    color:  #1d274b;
  }
`;

/* 텍스트 영역 */
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 210px;
  max-width: 300px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background: #f2f2f2;
  padding: 12px;
  font-size: 15px;
  resize: none;
  outline: none; 

  &::placeholder {
    color: #8c8c8c;
  }
  // &:focus {
  // background: #e9fafa; 

    /* 줄바꿈 처리 */
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  /* 내용 많을 때만 스크롤 (근데 스크롤바는 안보임) */
  overflow-y: auto;

  /*  스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE, Edge */
  scrollbar-width: none;     /* Firefox */
`;


/* 완료 버튼 */
export const Button = styled.button`
  align-self: center;
  padding: 12px 40px;
  border-radius: 12px;
  background: #b3ecec;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background: #9bdada;
  }
`;
