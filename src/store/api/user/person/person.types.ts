/* eslint-disable @typescript-eslint/naming-convention -- API Constants*/
export interface Person {
  id: number;
  name: string;
  enName: string;
  photo: string;
  sex: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthPlace: [
    {
      value: string;
    }
  ];
  deathPlace: [
    {
      value: string;
    }
  ];
  spouses: {
    id: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    sex: string;
    children: number;
    relation: string;
  };
  countAwards: number;
  profession: [
    {
      value: string;
    }
  ];
  facts: [
    {
      value: string;
    }
  ];
  movies: [
    {
      id: number;
      name: string;
      alternativeName: string;
      rating: number;
      general: boolean;
      description: string;
      enProfession: string;
    }
  ];
}
/* eslint-enable @typescript-eslint/naming-convention -- API Constants*/
