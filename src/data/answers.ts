import type { Questions } from "./questions";

export type AnswerValueMap = {
  [Q in Questions[number] as Q["id"]]: Q["options"][number] | "전체";
};
