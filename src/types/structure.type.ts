export interface StructureType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  job: string;
  name: string;
  email: string;
  phone: string;
  facebook: string;
  img: string;
  translations: Translation[];
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
