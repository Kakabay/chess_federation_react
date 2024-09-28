export interface SearchTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  start_event_date: string;
  end_event_date: string;
  name_of_event: string;
  place: string;
  created_at: string;
  updated_at: string;
}
