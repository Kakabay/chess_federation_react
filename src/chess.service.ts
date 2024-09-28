import axios from 'axios';
import { HomeSliderTypes } from './types/homeSlider.type';
import { EventsTypes } from './types/events.type';
import { NewsType } from './types/news.type';
import { SingleNewsType } from './types/singleNews.type';
import { VideosTypes } from './types/videos.type';
import { PartnersType } from './types/partners.type';
import { StructureType } from './types/structure.type';
import { AboutType } from './types/about.type';
import { PlayersType } from './types/players.type';
import { ContactInfoType } from './types/contactInfo.type';
import { SearchTypes } from './types/search.type';

export const URL = 'http://216.250.12.9:8088/api/v1';
class ChessService {
  private URL = 'http://216.250.12.9:8088/api/v1';

  getSlider = async () => {
    return await axios.get<HomeSliderTypes>(`${this.URL}/sliders`);
  };

  // getEvents = async () => {
  //   return await axios.get<EventsTypes>(`${this.URL}/new_events`);
  // };

  getEventsByDate = async (date: string) => {
    return await axios.get<EventsTypes>(`${this.URL}/new_events?date=${date}`);
  };

  getNews = async (per_page: number, locale: string, page: number = 2, sort: string = 'asc') => {
    return await axios.get<NewsType>(
      `${this.URL}/posts?locale=${locale}&per_page=${per_page}&sort_order=${sort}&page=${page}`,
    );
  };

  getSingleNews = async ({ pageId, locale }: { pageId: string; locale: string }) => {
    return await axios.get<SingleNewsType>(`${this.URL}/posts/${pageId}?locale=${locale}`);
  };

  getSearchResults = async ({ searchQuery }: { searchQuery: string }) => {
    return await axios.get<SearchTypes>(`${this.URL}/new_events?search=${searchQuery}`);
  };

  getVideos = async () => {
    return await axios.get<VideosTypes>(`${this.URL}/videos`);
  };

  getPartners = async () => {
    return await axios.get<PartnersType>(`${this.URL}/partners`);
  };

  getStructure = async () => {
    return await axios.get<StructureType>(`${this.URL}/structure`);
  };

  getAbout = async () => {
    return await axios.get<AboutType>(`${this.URL}/about`);
  };

  getPlayers = async () => {
    return await axios.get<PlayersType>(`${this.URL}/players`);
  };

  getContactInfo = async () => {
    return await axios.get<ContactInfoType>(`${this.URL}/our_contacts`);
  };

  postContactForm = async (body: { name: string; email: string; message: string }) => {
    return await axios.post(`${this.URL}/send-contact-form`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
}

export default new ChessService();
