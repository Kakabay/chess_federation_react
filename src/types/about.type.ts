export interface AboutType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  header: string;
  txt: string;
  img: string;
  tournment_title: string;
  tournment_number: number;
  organisation_title: string;
  organisation_number: number;
  graduate_title: string;
  graduate_number: number;
  places_title: string;
  places_number: number;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
