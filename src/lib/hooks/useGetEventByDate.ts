import chessService from '@/chess.service';
import { Datum, EventsTypes, Translation } from '@/types/events.type';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  lang: string;
  date: Date;
}

export const useGetEventByDate = ({ lang, date }: IProps) => {
  const formattedDate = date.toLocaleDateString('en-CA');

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData', lang],
    queryFn: () => chessService.getEventByDate(formattedDate),
    select: ({ data }) => {
      // Function to handle translation logic
      const translatedData = data.data.map((item: Datum) => {
        if (lang === 'en') {
          return item; // English is the default, return as is
        }

        // Find the translation for the provided language
        const translation = item.translations.find((t: Translation) => t.locale === lang);

        // If translation exists, parse the translation and replace fields
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            header: translatedAttributes.header || item.header,
            events: translatedAttributes.events ?? item.events, // events will remain as default if not translated
          };
        }

        // If no translation exists for the language, return the item as is
        return item;
      });

      return translatedData;
    },
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
