import sgisInstance from "./sgisInstance";

export async function getSubRegion(regionCode: string) {
  try {
    const res = await sgisInstance.get(`addr/stage.json`, {
      params: {
        cd: regionCode,
      },
    });

    const result = await res.data.result;
    return result;
  } catch (error) {
    console.error("[getSubRegion] API 호출 오류: ", error);
  }
}
