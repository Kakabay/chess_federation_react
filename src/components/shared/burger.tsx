import { navData } from "@/data/nav";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/container";
import { langs } from "./lang-menu";
import { useZusLang } from "@/zustand/use-zus-lang";

interface Props {
  burger: boolean;
  setBurger: (val: boolean) => void;
}

const Burger = ({ burger, setBurger }: Props) => {
  const setActiveLang = useZusLang().setActiveLang;

  return (
    <motion.div
      initial={{ translateY: "-100%", opacity: 0, pointerEvents: "none" }}
      animate={
        burger
          ? { translateY: 0, opacity: 1, pointerEvents: "all" }
          : { opacity: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
      className="bg-white font-semibold absolute z-[60] pt-[70px] top-0 left-0 right-0 h-screen"
    >
      <X
        onClick={() => setBurger(false)}
        className="absolute top-3 right-4"
        size={24}
      />

      <Container className="flex flex-col gap-6">
        <nav className="flex flex-col gap-6">
          {navData.map((item, i) => (
            <Link
              onClick={() => setBurger(false)}
              className="leading-[120%] font-semibold"
              key={i}
              to={item.link}
            >
              {item.view}
            </Link>
          ))}
        </nav>

        <hr className="bg-LBROWN h-[1px]" />

        <div className="flex gap-7">
          {langs.map((item, i) => (
            <div
              onClick={() => {
                setBurger(false);
                setActiveLang(item);
              }}
              key={i}
              className="flex gap-1"
            >
              <img src={item.img} /> {item.view}
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

export default Burger;
