export interface EventsTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  current: number;
  header: string;
  events: Event[];
  translations: Translation[];
}

export interface Event {
  start: string;
  end: string;
  name: string;
  place: string;
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
