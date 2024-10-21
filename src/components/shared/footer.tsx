import { navData } from '@/data/nav';
import Container from '../layout/container';
import { Link } from 'react-router-dom';
import { useZusLang } from '@/zustand/use-zus-lang';

const socials = [
  {
    icon: '/images/footer/vk.svg',
  },
  {
    icon: '/images/footer/inst.svg',
  },
  {
    icon: '/images/footer/facebook.svg',
  },
];

const Footer = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <footer className="bg-HEADER_BG border-t border-BROWN">
      <Container className="flex md:flex-row flex-col gap-6 md:gap-0 items-center md:items-start py-4 md:pt-10 md:pb-6 md:justify-between font-semibold">
        <nav className="flex md:flex-row flex-col text-center md:text-left md:items-center gap-5 md:gap-10">
          {navData.map((item, i) => (
            <Link key={i} to="">
              {activeLang.value === 'ru' ? item.view : item.tm}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col-reverse md:flex-col gap-8 items-center md:items-end text-[14px]">
          <div className="flex text-center md:flex-row flex-col items-center md:justify-between gap-4 md:gap-10">
            <div>
              {activeLang.value === 'ru'
                ? 'Copyright 2012-2024. Шахматная федерация Туркменистана'
                : 'Copyright 2012-2024. Türkmenistanyň küşt federasiýasy'}
            </div>
          </div>

          <div className="flex gap-5">
            {socials.map((item, i) => (
              <img key={i} src={item.icon} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
