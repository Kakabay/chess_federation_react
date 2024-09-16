import { useEffect } from 'react';

const useScrollToTop = (dependecies?: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependecies]);
};

export default useScrollToTop;
