import tourInstance from "./tourInstance";

// 법정동 코드 조회
export async function fetchDongCode(lDongRegnCd: string) {
  try {
    const res = await tourInstance.get("/ldongCode2", {
      params: {
        lDongRegnCd,
        lDongListYn: "Y",
      },
    });
    return res.data;
  } catch (error) {
    console.error("관광공사 API 에러:", error);
    throw error;
  }
}
