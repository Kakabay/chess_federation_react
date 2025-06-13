import { useZusLang } from "@/zustand/use-zus-lang";
import { useGetTranslations } from "./useGetTranslations";

const useExtractSectionTitle = (slug: string) => {
  const activeLang = useZusLang((state) => state.activeLang);
  const { data: translationsData, isLoading } = useGetTranslations(
    activeLang.value
  );

  if (isLoading || !translationsData) {
    return undefined;
  }

  const item = translationsData.find((item) => item.key === slug);

  if (!item) return undefined;

  // Для туркменского языка используем основное поле text
  if (activeLang.value === "tk") {
    return item.text;
  }

  // Для других языков ищем в translations
  const translation = item.translations.find(
    (t) => t.locale === activeLang.value
  );

  if (translation) {
    try {
      const attrData = JSON.parse(translation.attribute_data);
      return attrData.text;
    } catch (e) {
      console.error("Error parsing attribute_data:", e);
      return item.text; // Fallback на туркменский текст
    }
  }

  return item.text; // Fallback если перевод не найден
};

export default useExtractSectionTitle;
