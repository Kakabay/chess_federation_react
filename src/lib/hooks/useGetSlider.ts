import chessService from "@/chess.service";
import { Datum, Translation } from "@/types/homeSlider.type";
import { useQuery } from "@tanstack/react-query";

export const useGetSlider = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["sliderData", lang],
    queryFn: () => chessService.getSlider(),
    select: ({ data }) => {
      // Function to handle translation logic
      const translatedData = data.data.map((item: Datum) => {
        if (lang === "tm") {
          return item; // English is the default, return as is
        }

        // Find the translation for the provided language
        const translation = item.translations.find(
          (t: Translation) => t.locale === lang
        );

        // If translation exists, parse the translation and replace fields
        if (translation) {
          const translatedAttributes = JSON.parse(translation.attribute_data);

          return {
            ...item,
            header: translatedAttributes.header || item.header,
            txt: translatedAttributes.txt || item.txt,
            btn_txt: translatedAttributes.btn_txt || item.btn_txt,
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
