import chessService from '@/chess.service';
import { Datum, Translation } from '@/types/translations.type';
import { useQuery } from '@tanstack/react-query';

export const useGetTranslations = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['translationsData', lang],
    queryFn: () => chessService.getTranslations(),
    select: ({ data }) => {
      // Handle the translation logic
      const translatedData = data.data.map((item: Datum) => {
        if (lang === 'en') {
          return item; // English is default, return as is
        }

        // Find the translation for the provided language
        const translation = item.translations.find((t: Translation) => t.locale === lang);

        // If translation exists, parse the translation and replace the relevant fields
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            text: translatedAttributes.text || item.text, // Replace 'text' field if translation exists
          };
        }

        // If no translation is found for the language, return the default item
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
