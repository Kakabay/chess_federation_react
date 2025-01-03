import chessService from '@/chess.service';
import { Datum, Translation } from '@/types/rating.type'; // Update your type import path if necessary
import { useQuery } from '@tanstack/react-query';

export const useGetRating = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['ratingData', lang],
    queryFn: () => chessService.getRating(),
    select: ({ data }) => {
      // Map through the data array and apply the translation logic
      const translatedData = data.data.map((item: Datum) => {
        if (lang === 'tm') {
          // If the language is English, return the item as is
          return item;
        }

        // Find the translation for the provided language
        const translation = item.translations.find((t: Translation) => t.locale === lang);

        // If a translation exists, parse the attribute_data and replace the type
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            type: translatedAttributes.type || item.type, // Replace type with translated type
          };
        }

        // If no translation exists, return the original item
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
