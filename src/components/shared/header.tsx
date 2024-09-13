import { navData } from "@/data/nav";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(isInView);

  return (
    <motion.header
      ref={ref}
      initial={{
        translateY: "-100%",
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      animate={
        isInView
          ? { translateY: 0, opacity: 1, paddingTop: 10, paddingBottom: 10 }
          : {}
      }
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      className="w-full bg-HEADER_BG font-semibold text-BLACK"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="max-w-[1623px] mx-auto px-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5 w-[312px]">
          <img src="/logo.png" alt="LOGO" />
          <div className="text-[18px] leading-[125%] ">
            Шахматная федерация Туркменистана
          </div>
        </div>

        <div className="flex items-center gap-10">
          <nav className="flex items-center gap-6">
            {navData.map((item, i) => (
              <Link key={i} to="">
                {item.view}
              </Link>
            ))}
          </nav>

          <div className="flex items-center"></div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
