import chessService from '@/chess.service';
// import { Datum, Translation } from '@/types/contactInfo.type';
import { useQuery } from '@tanstack/react-query';

export const useGetContactInfo = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['contactInfoData', lang],
    queryFn: () => chessService.getContactInfo(),
    // select: ({ data }) => {
    //   const translatedData = data.data.map((item: Datum) => {
    //     if (lang === 'en') {
    //       return item; // English is default, return as is
    //     }

    //     // Find the translation for the provided language
    //     const translation = item.translations.find((t: Translation) => t.locale === lang);

    //     // If translation exists, parse the translation and replace the relevant fields
    //     if (translation) {
    //       const translatedAttributes = JSON.parse(translation.attribute_data);

    //       return {
    //         ...item,
    //         address: translatedAttributes.address || item.address,
    //       };
    //     }

    //     // If no translation is found, return the default item
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
