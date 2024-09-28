export interface ContactInfoType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  address: string;
  contacts: string;
  created_at: string;
  updated_at: string;
}
