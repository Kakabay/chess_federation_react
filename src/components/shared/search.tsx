import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useGetSearchResults } from '@/lib/hooks/useGetSearchResults';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Link } from 'react-router-dom';

interface Props {
  search: boolean;
  setSearch: (value: boolean) => void;
}

const Search = ({ search, setSearch }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce(searchValue);
  const activeLang = useZusLang().activeLang;
  const { data } = useGetSearchResults({ searchQuery: debouncedValue, lang: activeLang.value });

  useEffect(() => {
    if (search) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [search]);

  const onClickRestHandler = () => {
    setSearch(false);
    setSearchValue('');
  };

  return (
    <>
      <motion.div
        initial={{ translateY: '-100%', opacity: 0 }}
        animate={search ? { translateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="h-screen py-[100px] px-4 md:px-0 bg-BROWN absolute z-30  top-0 left-0 w-full overflow-hidden overflow-y-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={search ? { opacity: 1 } : {}}
          transition={search ? { delay: 0.6, duration: 0.3 } : { delay: 0 }}
          className="max-w-[700px] mx-auto">
          <div
            onClick={onClickRestHandler}
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

            {data && debouncedValue.length > 0 ? (
              <p className="text-[#9F8E84] text-center md-mt-[0px] mt-[24px]">
                По запросу «<span className="font-extrabold">{searchValue}</span>» нашлось{' '}
                {data.data.length} результата(тов)
              </p>
            ) : null}

            {data && debouncedValue.length
              ? data.data.map((item) => (
                  <>
                    <Link
                      to={`news/${item.id}`}
                      onClick={onClickRestHandler}
                      className="md:flex p-[20px] gap-[20px] border border-[#796052] rounded-[4px] hidden">
                      <div className="flex flex-col justify-between gap-[20px] text-white">
                        <h2 className="text-[20px] font-bold font-[bitter] leading-[26px]">
                          {item.title}
                        </h2>
                        <h3 className="text-[#9F8E84]">{item.published_at}</h3>
                      </div>
                      <div className="max-w-[200px] w-full min-h-[108px] ">
                        <img
                          src={item.featured_images[0].path}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <Link
                      to={`news/${item.id}`}
                      onClick={onClickRestHandler}
                      className="flex flex-col md:hidden p-[16px] gap-[8px] border border-[#796052] rounded-[4px]">
                      <div className="flex flex-col justify-between gap-[8px] text-white">
                        <h3 className="text-[#9F8E84] text-[10px]">{item.published_at}</h3>
                        <h2 className="text-[16px] font-bold font-[bitter] leading-[24px]">
                          {item.title}
                        </h2>
                      </div>
                      <div className="w-full h-[158px] rounded-[2px] overflow-hidden">
                        <img
                          src={item.featured_images[0].path}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                  </>
                ))
              : null}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Search;
