import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import LangMenu from "./lang-menu";
import Search from "./search";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import Burger from "./burger";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");

  const { pathname } = useLocation();
  const [search, setSearch] = useState(false);
  const [burger, setBurger] = useState(false);

  const navData = t("nav", { returnObjects: true }) as {
    text: string;
    link: string;
  }[];

  const name = t("logoText");

  return (
    <>
      <Search search={search} setSearch={setSearch} />

      <Burger burger={burger} setBurger={setBurger} />

      <motion.header
        initial={{
          translateY: "-100%",
          opacity: 0,
        }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className={clsx(
          "w-full bg-HEADER_BG py-4 relative z-50 md:z-0 md:py-2.5 font-semibold text-BLACK",
          {
            "border-b border-[BROWN]": pathname !== "/",
          }
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
          className="max-w-[1623px] mx-auto px-4 flex items-center justify-between"
        >
          <Link to="/" className="flex items-center gap-2.5 w-[312px]">
            <img src="/logo.png" alt="LOGO" />
            <div className="text-[14px] md:text-[18px] leading-[125%]">
              {name}
            </div>
          </Link>

          <div className="flex items-center gap-10">
            <nav className="xl:flex hidden items-center gap-6">
              {navData?.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className={clsx({
                    "text-LBROWN": pathname === item.link,
                  })}
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            <Separator
              orientation="vertical"
              color="#A6785E"
              className="h-[30px] xl:block hidden bg-LBROWN"
            />

            <LangMenu className="xl:block hidden" />

            <SearchIcon
              onClick={() => setSearch(true)}
              size={24}
              className="cursor-pointer"
            />

            <div
              onClick={() => setBurger(!burger)}
              className="size-6 xl:hidden cursor-pointer flex flex-col items-center justify-center gap-[3px]"
            >
              <span className="burger-span"></span>
              <span className="burger-span"></span>
              <span className="burger-span"></span>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
