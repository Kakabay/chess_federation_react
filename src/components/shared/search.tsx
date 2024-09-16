import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

interface Props {
  search: boolean;
  setSearch: (value: boolean) => void;
}

const Search = ({ search, setSearch }: Props) => {
  useEffect(() => {
    if (search) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [search]);

  return (
    <>
      <motion.div
        initial={{ translateY: "-100%", opacity: 0 }}
        animate={search ? { translateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="h-screen py-[100px] bg-BROWN  absolute z-10 top-0 left-0 w-full overflow-hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={search ? { opacity: 1 } : {}}
          transition={search ? { delay: 0.6, duration: 0.3 } : { delay: 0 }}
          className="w-[700px] mx-auto"
        >
          <div
            onClick={() => setSearch(false)}
            className="flex justify-end mb-10 p-2 cursor-pointer"
          >
            <X stroke="white" size={24} />
          </div>

          <div className="flex flex-col gap-10 item-center">
            <div className="h3 text-center text-white">Поиск</div>

            <Input
              className="bg-transparent p-5 focus:outline-none leading-none text-white"
              placeholder="Искать на сайте"
            />

            <Button className="mx-[50px]">Найти</Button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Search;
