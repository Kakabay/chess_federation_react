import chessService from "@/chess.service";
import { Datum, Translation } from "@/types/structure.type";
import { useQuery } from "@tanstack/react-query";

export const useGetStructure = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["structureData", lang],
    queryFn: () => chessService.getStructure(),
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
            job: translatedAttributes.job || item.job,
            name: translatedAttributes.name ?? item.name,
            // Добавьте другие поля, которые нужно переводить
          };
        }

        // Если запрошен английский, но перевод не найден, возвращаем исходные данные
        if (lang === "en") {
          return item;
        }

        // Для других языков, если перевод не найден, можно вернуть английскую версию как fallback
        const englishTranslation = item.translations.find(
          (t: Translation) => t.locale === "en"
        );

        if (englishTranslation) {
          const translatedAttributes = JSON.parse(
            englishTranslation.attribute_data
          );
          return {
            ...item,
            job: translatedAttributes.job || item.job,
            name: translatedAttributes.name ?? item.name,
          };
        }

        // Если ничего не найдено, возвращаем исходные данные (туркменскую версию)
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
