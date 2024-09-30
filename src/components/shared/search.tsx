import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useGetSearchResults } from '@/lib/hooks/useGetSearchResults';
import { useDebounce } from '@/lib/hooks/useDebounce';

interface Props {
  search: boolean;
  setSearch: (value: boolean) => void;
}

const Search = ({ search, setSearch }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(' ');
  const debouncedValue = useDebounce(searchValue);
  const { data } = useGetSearchResults({ searchQuery: debouncedValue });

  console.log(data);

  useEffect(() => {
    if (search) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [search]);

  return (
    <>
      <motion.div
        initial={{ translateY: '-100%', opacity: 0 }}
        animate={search ? { translateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="h-screen py-[100px] px-4 md:px-0 bg-BROWN absolute z-30  top-0 left-0 w-full overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={search ? { opacity: 1 } : {}}
          transition={search ? { delay: 0.6, duration: 0.3 } : { delay: 0 }}
          className="max-w-[700px] mx-auto">
          <div
            onClick={() => setSearch(false)}
            className="flex justify-end mb-10 p-2 mt-2 cursor-pointer">
            <X stroke="white" size={24} />
          </div>

          <div className="flex flex-col gap-4 md:gap-10 item-center">
            <div className="h3 text-center text-white">Поиск</div>

            <Input
              className="bg-transparent px-2 py-4 md:p-5 focus:outline-none leading-none text-white"
              placeholder="Искать на сайте"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <Button className="md:mx-[50px] mx-0 py-2.5">Найти</Button>

            {/* {data && data.data.map((item) => <div>hello</div>)} */}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Search;
