import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  // lang: string;
  searchQuery: string;
}

export const useGetSearchResults = ({ searchQuery }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData', searchQuery],
    queryFn: () => chessService.getSearchResults({ searchQuery }),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
