import chessService from '@/chess.service';
import { Datum, Translation } from '@/types/structure.type';
import { useQuery } from '@tanstack/react-query';

export const useGetStructure = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['structureData', lang],
    queryFn: () => chessService.getStructure(),
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
            job: translatedAttributes.job || item.job,
            name: translatedAttributes.name ?? item.name, // name will remain as default if not translated
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
