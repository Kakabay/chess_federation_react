export interface RatingType {
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
  start_time: Date;
  end_time: Date;
  sms_code: string;
  winners: Winner[];
}

export interface Winner {
  no: number;
  client: string;
  dt: string;
  winner_no: number;
}
