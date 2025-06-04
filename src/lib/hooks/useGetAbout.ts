import chessService from "@/chess.service";
import { Datum, Translation } from "@/types/about.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAbout = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["aboutData", lang],
    queryFn: () => chessService.getAbout(),
    select: ({ data }) => {
      return data.data.map((item: Datum) => {
        // Для туркменского языка возвращаем исходные данные
        if (lang === "tm") {
          return item;
        }

        // Ищем перевод для запрошенного языка
        const translation = item.translations.find(
          (t: Translation) => t.locale === lang
        );

        // Если перевод найден, объединяем его с исходными данными
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            header: translatedAttributes.header || item.header,
            txt1: translatedAttributes.txt1 || item.txt1,
            txt2: translatedAttributes.txt2 || item.txt2,
            txt3: translatedAttributes.txt3 || item.txt3,
            tournment_title:
              translatedAttributes.tournment_title || item.tournment_title,
            organisation_title:
              translatedAttributes.organisation_title ||
              item.organisation_title,
            graduate_title:
              translatedAttributes.graduate_title || item.graduate_title,
            places_title:
              translatedAttributes.places_title || item.places_title,
          };
        }

        // Если перевод не найден, возвращаем туркменскую версию (исходные данные)
        return item;
      });
    },
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
