import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./styles/TalkEdit";
import { postQuestion } from "@/apis/qna/questions";

export default function TalkEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      // 실제 서버로 질문 등록
      await postQuestion({ title, content });

      alert("질문이 성공적으로 등록되었습니다!");
      navigate("/loco-talk");
    } catch (error) {
      alert("질문 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("질문 등록 실패:", error);
    }
  };

  return (
    <S.EditContainer>
      <form onSubmit={handleSubmit}>
        <S.InputTitle
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />

        <S.Divider />

        <S.TextArea
          placeholder="로코지기에게 진짜 이야기를 물어보세요."
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />

        <S.SubmitButton type="submit">+ 등록하기</S.SubmitButton>
      </form>
    </S.EditContainer>
  );
}
