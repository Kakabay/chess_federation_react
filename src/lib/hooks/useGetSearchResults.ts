import chessService from "@/chess.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface IProps {
  lang: string;
  searchQuery: string;
}

export const useGetSearchResults = ({ searchQuery, lang }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["search", searchQuery, lang],
    queryFn: () => chessService.getSearchResults({ searchQuery, lang }),
    placeholderData: keepPreviousData,
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
