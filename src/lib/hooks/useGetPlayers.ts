import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

export const useGePlayers = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['playersData'],
    queryFn: () => chessService.getPlayers(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
