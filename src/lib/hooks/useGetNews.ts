import chessService from "@/chess.service";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  per_page: number;
  lang: string;
  page: number;
}

export const useGetNews = ({ per_page, lang, page }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["news-data", lang, per_page, page],
    queryFn: () => chessService.getNews(per_page, lang, page),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
