import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  per_page: number;
  lang: string;
  sort: string;
  page: number;
}

export const useGetNews = ({ per_page, lang, page, sort }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['eventsData', lang, per_page, sort, page],
    queryFn: () => chessService.getNews(per_page, lang, page, sort),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
