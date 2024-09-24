import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

export const useGetPartners = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['partnersData'],
    queryFn: () => chessService.getPartners(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
