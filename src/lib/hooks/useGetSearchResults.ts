import chessService from '@/chess.service';
import { Datum } from '@/types/search.type';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  lang: string;
  searchQuery: string;
}

export const useGetSearchResults = ({ searchQuery, lang }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['search', searchQuery, lang],
    queryFn: () => chessService.getSearchResults({ searchQuery }),
    select: (response) => {
      // Check if data exists in the response
      if (!response?.data.data) {
        return [];
      }

      // Process the data if it exists
      return response.data.data.map((item: Datum) => {
        // Check if translations exist for the selected language
        const translation = item.translations?.find((t) => t.locale === lang);

        if (translation) {
          // Parse the attribute_data field which is a JSON string
          const translatedAttributes = JSON.parse(translation.attribute_data);

          // Replace the fields with the translated values if they exist
          return {
            ...item,
            name_of_event: translatedAttributes.name_of_event || item.name_of_event,
            place: translatedAttributes.place || item.place,
          };
        }

        // Return the default data if no translation is found
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
