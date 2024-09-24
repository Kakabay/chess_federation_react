export interface VideosTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  video: string;
  poster: string;
}
