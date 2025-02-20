import axios from "axios";
import { HomeSliderTypes } from "./types/homeSlider.type";
import { EventsTypes } from "./types/events.type";
import { NewsType } from "./types/news.type";
import { SingleNewsType } from "./types/singleNews.type";
import { VideosTypes } from "./types/videos.type";
import { PartnersType } from "./types/partners.type";
import { StructureType } from "./types/structure.type";
import { AboutType } from "./types/about.type";
import { PlayersType } from "./types/players.type";
import { ContactInfoType } from "./types/contactInfo.type";
import { SearchTypes } from "./types/search.type";
import { TranslationsTypes } from "./types/translations.type";
import { RatingType } from "./types/rating.type";
import instance from "./lib/api";

export const URL = "https://tkmchess.com.tm/app/api/v1";
class ChessService {
  // private URL = "https://tkmchess.com.tm/app/api/v1";

  getSlider = async () => {
    return await instance.get<HomeSliderTypes>(`/sliders`);
  };

  // getEvents = async () => {
  //   return await instance.get<EventsTypes>(`/new_events`);
  // };

  getEventsByDate = async (date: string) => {
    return await instance.get<EventsTypes>(`/new_events?date=${date}`);
  };

  getNews = async (per_page: number, locale: string, page: number = 2) => {
    return await instance.get<NewsType>(
      `/posts?locale=${locale}&per_page=${per_page}&page=${page}`
    );
  };

  getSingleNews = async ({
    pageId,
    locale,
  }: {
    pageId: string;
    locale: string;
  }) => {
    return await instance.get<SingleNewsType>(
      `/posts/${pageId}?locale=${locale}`
    );
  };

  getSearchResults = async ({
    searchQuery,
    lang,
  }: {
    searchQuery: string;
    lang: string;
  }) => {
    return await instance.get<SearchTypes>(
      `/posts?locale=${lang}&search=${searchQuery}`
    );
  };

  getVideos = async () => {
    return await instance.get<VideosTypes>("/videos");
  };

  getPartners = async () => {
    return await instance.get<PartnersType>("/partners");
  };

  getStructure = async () => {
    return await instance.get<StructureType>("/structure");
  };

  getAbout = async () => {
    return await instance.get<AboutType>("/about");
  };

  getPlayers = async () => {
    return await instance.get<PlayersType>("/players");
  };

  getContactInfo = async () => {
    return await instance.get<ContactInfoType>("/our_contacts");
  };

  getTranslations = async () => {
    return await instance.get<TranslationsTypes>("/translations");
  };

  getRating = async () => {
    return await instance.get<RatingType>("/rating_of_players");
  };

  getToken = async () => {
    try {
      const response = await axios.get(
        "https://tkmchess.com.tm/app/api/csrf-token",
        {
          headers: {
            "api-key": "XauMv8GUdnMJObAT73hz17TQa80fu4ZyG0QZwjqt",
          },
        }
      );

      // Убедись, что csrf_token есть в ответе
      const { csrf_token }: { csrf_token: string } = response.data;

      if (!csrf_token) {
        throw new Error("CSRF token not found in the response");
      }

      return csrf_token;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      return null; // Возвращаем null, если токен не был получен
    }
  };

  postContactForm = async (body: {
    name: string;
    email: string;
    message: string;
  }) => {
    return await instance.post(`/send-contact-form`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}

export default new ChessService();
