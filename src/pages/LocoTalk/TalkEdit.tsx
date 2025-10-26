import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./styles/TalkEdit";

export default function TalkEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      id: Date.now(),
      title,
      content,
      author: "작성자",
      createdAt: new Date().toISOString().split("T")[0],
      views: 0,
      replies: [],
    };

    console.log("✅ postData:", postData);
    alert("게시글이 등록되었습니다!");
    navigate("/loco-talk");
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
