export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  name: string;
  flag: string;
}

export interface ICountryAPI {
  area: number;
  region: string;
  capital: string[];
  name: IName;
  flags: IFlag;
  population: number;
}

export interface IFlag {
  png: string;
  svg: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName | undefined>;
}

export interface INativeName {
  official: string;
  common: string;
}
