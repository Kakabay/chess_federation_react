export interface PlayersType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  average: number | null;
  national: number;
  img: string;
}
