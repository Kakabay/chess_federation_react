import { navData } from '@/data/nav';
import Container from '../layout/container';
import { Link } from 'react-router-dom';

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
  return (
    <footer className="bg-HEADER_BG border-t border-BROWN">
      <Container className="flex items-start pt-10 pb-6 justify-between font-semibold">
        <nav className="flex items-center gap-10">
          {navData.map((item, i) => (
            <Link key={i} to="">
              {item.view}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-8 items-end text-[14px]">
          <div className="flex justify-between gap-10">
            <div className="">Пользовательское соглашение</div>
            <div className="">Copyright 2012-2024. Шахматная федерация Туркменистана</div>
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
