import { navData } from '@/data/nav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{
        translateY: '-100%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      className="w-full bg-HEADER_BG py-2.5 font-semibold text-BLACK">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="max-w-[1623px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 w-[312px]">
          <img src="/logo.png" alt="LOGO" />
          <div className="text-[18px] leading-[125%] ">Шахматная федерация Туркменистана</div>
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
