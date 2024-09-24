export interface PartnersType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  note: string;
  partner: string;
}
