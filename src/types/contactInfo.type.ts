export interface ContactInfoType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  phone: string;
  address: string;
  instagram: string;
  twitter: string;
  youtube: string;
  facebook: string;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
