import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

export const useGetVideos = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['videosData'],
    queryFn: () => chessService.getVideos(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
