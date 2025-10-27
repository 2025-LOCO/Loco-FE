// import type { SubRegionType } from "@/types/region";
// import tourInstance from "./tourInstance";

// type SubRegionResponse = {
//   response: {
//     header: {
//       resultMsg: string;
//       resultCode: string;
//     };
//     body: {
//       items: {
//         item: {
//           lDongRegnCd: string; // 상위 시/도 코드 (예: 11)
//           lDongRegnNm: string; // 상위 시/도 이름 (예: 서울)
//           lDongSignguCd: string; // 하위 시/군/구 코드 (예: 680)
//           lDongSignguNm: string; // 하위 시/군/구 이름 (예: 강남구)
//         }[];
//       };
//       numOfRows: number;
//       pageNo: number;
//       totalCount: number;
//     };
//   };
// };

// // 법정동코드 조회
// export async function getSubRegion(
//   lDongRegnCd: string
// ): Promise<SubRegionType[]> {
//   const res = await tourInstance.get<SubRegionResponse>("/ldongCode2", {
//     params: {
//       lDongRegnCd,
//       lDongListYn: "Y",
//     },
//   });

//   console.log("관광공사 API 응답:", res.data);

//   const items = res.data.response.body.items?.item ?? [];

//   return items.map((it) => ({
//     cd: `${it.lDongRegnCd}${it.lDongSignguCd}`, // ex) 11680
//     addr_name: `${it.lDongSignguNm}`, // ex) 서울 강남구
//     full_addr: `${it.lDongRegnNm} ${it.lDongSignguNm}`,
//   }));
// }

/*
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
*/

import apiInstance from "@/apis/apiInstance";
import type { SubRegionType } from "@/types/region";

export interface GetSubRegionRequest {
  cd: string; // 시/도 코드 (예: "11" = 서울특별시)
}

export interface GetSubRegionResponse {
  cd: string; // 하위 시군구 코드 (예: "11110")
  name: string; // 하위 시군구 이름 (예: "종로구")
  full_name: string; // 전체 이름 (예: "서울특별시 종로구")
}

export async function getSubRegion(
  cdOrParams: string | GetSubRegionRequest
): Promise<SubRegionType[]> {
  const params =
    typeof cdOrParams === "string" ? { cd: cdOrParams } : cdOrParams;

  const res = await apiInstance.get<GetSubRegionResponse[]>(
    "/api/v1/regions/sigungu",
    {
      params,
    }
  );
  const items = res.data ?? [];

  // 시/도 이름 추출 (예: "경기도", "서울특별시")
  const regionName =
    items.length > 0
      ? items[0].full_name.split(" ")[0] // "서울특별시 종로구" → "서울특별시"
      : "";

  // “경기도 전체” 옵션 생성
  const allOption: SubRegionType = {
    cd: `${params.cd}000`,
    addr_name: `전체`,
    full_addr: `${regionName} 전체`,
  };

  // SubRegionType 형태로 변환
  // 맨 앞에 “전체”를 추가하고 나머지 이어붙이기
  return [
    allOption,
    ...items.map((it) => ({
      cd: it.cd,
      addr_name: it.name,
      full_addr: it.full_name,
    })),
  ];
}
