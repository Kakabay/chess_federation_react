import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

export const useGetSlider = (lang: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['sliderData'],
    queryFn: () => chessService.getSlider(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useGetEvents = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData'],
    queryFn: () => chessService.getEvents(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
