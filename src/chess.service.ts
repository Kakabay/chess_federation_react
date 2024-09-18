import axios from 'axios';
import { HomeEventsTypes, HomeSliderTypes } from './types/home.type';

class ChessService {
  private URL = 'http://216.250.12.9:8088/api/v1';

  getSlider = async () => {
    return await axios.get<HomeSliderTypes>(`${this.URL}/sliders`);
  };

  getEvents = async () => {
    return await axios.get<HomeEventsTypes>(`${this.URL}/events`);
  };
}

export default new ChessService();
