import axios from 'axios';
import { HomeSliderTypes } from './types/homeSlider.type';
import { EventsTypes } from './types/events.type';

export const URL = 'http://216.250.12.9:8088/api/v1';
class ChessService {
  private URL = 'http://216.250.12.9:8088/api/v1';

  getSlider = async () => {
    return await axios.get<HomeSliderTypes>(`${this.URL}/sliders`);
  };

  getEvents = async () => {
    return await axios.get<EventsTypes>(`${this.URL}/events`);
  };
}

export default new ChessService();
