import chessService from '@/chess.service';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  name: string;
  email: string;
  message: string;
}

const usePostForm = ({ name, email, message }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['postMessage'],
    queryFn: () => chessService.postContactForm({ email, name, message }),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default usePostForm;
