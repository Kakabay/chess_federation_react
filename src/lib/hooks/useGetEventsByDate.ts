import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  // lang: string;
  date: string;
}

export const useGetEventsByDate = ({ date }: IProps) => {
  // const formattedDate = date.toLocaleDateString('en-CA');

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData', date],
    queryFn: () => chessService.getEventsByDate(date),
    // select: ({ data }) => {
    //   // Function to handle translation logic
    //   const translatedData = data.data.map((item: Datum) => {
    //     if (lang === 'en') {
    //       return item; // English is the default, return as is
    //     }

    //     // Find the translation for the provided language
    //     const translation = item.translations.find((t: Translation) => t.locale === lang);

    //     // If translation exists, parse the translation and replace fields
    //     if (translation) {
    //       const translatedAttributes = JSON.parse(translation.attribute_data);

    //       return {
    //         ...item,
    //         header: translatedAttributes.header || item.header,
    //         events: translatedAttributes.events ?? item.events, // events will remain as default if not translated
    //       };
    //     }

    //     // If no translation exists for the language, return the item as is
    //     return item;
    //   });

    //   return translatedData;
    // },
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
