export interface TranslationsTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  key: string;
  text: string;
  created_at: string;
  updated_at: string;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: Locale;
  attribute_data: string;
}

export enum Locale {
  Ru = 'ru',
}
