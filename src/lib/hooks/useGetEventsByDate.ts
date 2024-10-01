import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';
import { Event } from '@/types/events.type';

interface IProps {
  lang: string;
  date: string;
}

export const useGetEventsByDate = ({ date, lang }: IProps) => {
  // const formattedDate = date.toLocaleDateString('en-CA');
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData', date, lang],
    queryFn: () => chessService.getEventsByDate(date),
    select: (response) => {
      // Function to handle translation
      const translateEvent = (event: Event): Event => {
        const translation = event.translations?.find((t) => t.locale === lang);

        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);
          return {
            ...event,
            name_of_event: translatedAttributes.name_of_event || event.name_of_event,
            place: translatedAttributes.place || event.place,
          };
        }

        return event;
      };

      // Translate events in each category
      return {
        past_events: response.data.data.past_events.map(translateEvent),
        ongoing_events: response.data.data.ongoing_events.map(translateEvent),
        future_events: response.data.data.future_events.map(translateEvent),
      };
    },
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
