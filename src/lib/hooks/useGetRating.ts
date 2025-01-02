import chessService from "@/chess.service";
import { useQuery } from "@tanstack/react-query";

export const useGetRating = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["ratingData"],
    queryFn: () => chessService.getRating(),
    select: ({ data }) => data,
  });

  return {
    data,
    isPending,
    isError,
    isSuccess,
  };
};
