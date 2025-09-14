import type { SubRegionType } from "@/types/region";
import tourInstance from "./tourInstance";

type SubRegionResponse = {
  response: {
    header: {
      resultMsg: string;
      resultCode: string;
    };
    body: {
      items: {
        item: {
          lDongRegnCd: string; // 상위 시/도 코드 (예: 11)
          lDongRegnNm: string; // 상위 시/도 이름 (예: 서울)
          lDongSignguCd: string; // 하위 시/군/구 코드 (예: 680)
          lDongSignguNm: string; // 하위 시/군/구 이름 (예: 강남구)
        }[];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
};

// 법정동코드 조회
export async function getSubRegion(
  lDongRegnCd: string
): Promise<SubRegionType[]> {
  const res = await tourInstance.get<SubRegionResponse>("/ldongCode2", {
    params: {
      lDongRegnCd,
      lDongListYn: "Y",
    },
  });

  console.log("관광공사 API 응답:", res.data);

  const items = res.data.response.body.items?.item ?? [];

  return items.map((it) => ({
    cd: `${it.lDongRegnCd}${it.lDongSignguCd}`, // ex) 11680
    addr_name: `${it.lDongSignguNm}`, // ex) 서울 강남구
    full_addr: `${it.lDongRegnNm} ${it.lDongSignguNm}`,
  }));
}
