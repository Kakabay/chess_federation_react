import axios from 'axios';
import { HomeSliderTypes } from './types/homeSlider.type';
import { EventsTypes } from './types/events.type';
import { NewsType } from './types/news.type';
import { SingleNewsType } from './types/singleNews.type';
import { VideosTypes } from './types/videos.type';
import { PartnersType } from './types/partners.type';

export const URL = 'http://216.250.12.9:8088/api/v1';
class ChessService {
  private URL = 'http://216.250.12.9:8088/api/v1';

  getSlider = async () => {
    return await axios.get<HomeSliderTypes>(`${this.URL}/sliders`);
  };

  getEvents = async () => {
    return await axios.get<EventsTypes>(`${this.URL}/events`);
  };

  getEventByDate = async (date: string) => {
    return await axios.get<EventsTypes>(`${this.URL}/events/date?date=${date}`);
  };

  getNews = async (per_page: number, locale: string, page: number = 1, sort: string = 'asc') => {
    return await axios.get<NewsType>(
      `${this.URL}/posts?locale=${locale}&per_page=${per_page}&sort_order=${sort}`,
    );
  };

  getSingleNews = async ({ pageId, locale }: { pageId: string; locale: string }) => {
    return await axios.get<SingleNewsType>(`${this.URL}/posts/${pageId}?locale=${locale}`);
  };

  getVideos = async () => {
    return await axios.get<VideosTypes>(`${this.URL}/videos`);
  };

  getPartners = async () => {
    return await axios.get<PartnersType>(`${this.URL}/partners`);
  };
}

export default new ChessService();
