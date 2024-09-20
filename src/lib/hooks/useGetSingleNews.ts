import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  pageId: string | undefined;
  locale: string;
}

export const useGetSingleNews = ({ pageId = '', locale }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['singleNewsData', locale, pageId],
    queryFn: () => chessService.getSingleNews({ pageId, locale }),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
