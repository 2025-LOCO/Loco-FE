export interface RegionType {
  id: string;
  name: string;
  korName: string;
  d: string;
  color: string;
  code: string;
  isCity?: boolean;
}

export type SubRegionType = {
  addr_name: string; // addr_name
  cd: string; // cd
  full_addr: string; // full_addr
  y_coor: string;
  x_coor: string;
};

export type SubRegionsType = SubRegionType[];

export type AllSubRegionsType = {
  [regionCode: string]: SubRegionsType;
};
