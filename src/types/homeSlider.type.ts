export interface HomeSliderTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  header: string;
  txt: string;
  btn_txt: string;
  img: string;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
