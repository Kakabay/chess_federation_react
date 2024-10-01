export interface EventsTypes {
  status_code: number;
  message: string;
  data: Data;
}

export interface Data {
  past_events: Event[];
  ongoing_events: Event[];
  future_events: Event[];
}

export interface Event {
  id: number;
  start_event_date: string;
  end_event_date: string;
  name_of_event: string;
  place: string;
  created_at: string;
  updated_at: string;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
