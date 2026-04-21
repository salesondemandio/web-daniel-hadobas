export interface City {
  name: string;
  state: string;
  slug: string;
  primaryKeyword: string;
  monthlySearchVol: number;
}

export const cities: City[] = [
  {
    name: "Las Vegas",
    state: "NV",
    slug: "solar-las-vegas",
    primaryKeyword: "solar panels Las Vegas",
    monthlySearchVol: 1200,
  },
  {
    name: "Henderson",
    state: "NV",
    slug: "solar-henderson-nv",
    primaryKeyword: "solar panels Henderson NV",
    monthlySearchVol: 480,
  },
  {
    name: "North Las Vegas",
    state: "NV",
    slug: "solar-north-las-vegas",
    primaryKeyword: "solar North Las Vegas",
    monthlySearchVol: 320,
  },
  {
    name: "Los Angeles",
    state: "CA",
    slug: "solar-los-angeles",
    primaryKeyword: "solar panels Los Angeles",
    monthlySearchVol: 2400,
  },
  {
    name: "San Diego",
    state: "CA",
    slug: "solar-san-diego",
    primaryKeyword: "solar panels San Diego",
    monthlySearchVol: 1800,
  },
  {
    name: "Riverside",
    state: "CA",
    slug: "solar-riverside",
    primaryKeyword: "solar panels Riverside CA",
    monthlySearchVol: 720,
  },
];
