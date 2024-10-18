import chessService from '@/chess.service';
import { Datum, Translation } from '@/types/about.type';
import { useQuery } from '@tanstack/react-query';

export const useGetAbout = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['aboutData', lang],
    queryFn: () => chessService.getAbout(),
    select: ({ data }) => {
      // Handle the translation logic
      const translatedData = data.data.map((item: Datum) => {
        if (lang === 'en') {
          return item; // Return the default (English) if language is 'en'
        }

        // Find the translation for the provided language
        const translation = item.translations.find((t: Translation) => t.locale === lang);

        // If a translation is found, parse it and replace the relevant fields
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            header: translatedAttributes.header || item.header,
            txt1: translatedAttributes.txt || item.txt1,
            txt2: translatedAttributes.txt || item.txt2,
            txt3: translatedAttributes.txt || item.txt3,
            tournment_title: translatedAttributes.tournment_title || item.tournment_title,
            organisation_title: translatedAttributes.organisation_title || item.organisation_title,
            graduate_title: translatedAttributes.graduate_title || item.graduate_title,
            places_title: translatedAttributes.places_title || item.places_title,
          };
        }

        // If no translation is found for the given language, return the default item
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
