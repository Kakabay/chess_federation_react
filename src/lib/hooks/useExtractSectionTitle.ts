import { useZusLang } from '@/zustand/use-zus-lang';
import { useGetTranslations } from './useGetTranslations';

const useExtractSectionTitle = (slug: string) => {
  const activeLang = useZusLang().activeLang;
  const { data: translationsData, isLoading } = useGetTranslations(activeLang.value);

  // Handle loading and undefined data
  if (isLoading || !translationsData) {
    return undefined; // Return undefined or some default value while loading or when data is not available
  }

  // Filter the data once it's available
  const sectionTitle = translationsData.find((item) => item.key === slug)?.text;

  console.log(sectionTitle);

  return sectionTitle;
};

export default useExtractSectionTitle;
