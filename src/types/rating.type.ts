export interface RatingType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  type: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  image: Image;
  translations: Translation[];
}

export interface Image {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}

export interface Translation {
  model_id: string;
  locale: string;
  attribute_data: string;
}
