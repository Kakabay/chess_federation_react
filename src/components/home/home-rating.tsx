import { motion } from 'framer-motion';
import Container from '../layout/container';
import SectionHeader from './section-header';
import Slider from '../shared/slider';
import useExtractSectionTitle from '@/lib/hooks/useExtractSectionTitle';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Link } from 'react-router-dom';
import { useGetRating } from '@/lib/hooks/useGetRating';

const rating = [
  {
    // nameRu: 'Рейтинг Туркменистана среди мужчин',
    // nameTm: 'Erkekleriň arasynda Türkmenistanyň reýtingi',
    nameRu: 'Мужчины',
    nameTm: 'Erkekler',
    img: '/images/home/rating-1.png',
    url: 'https://ratings.fide.com/rankings.phtml?continent=0&country=TKM&rating=standard&gender=&age1=0&age2=0&period=2024-10-01&period2=1',
  },
  {
    // nameRu: 'Рейтинг Туркменистана среди женщин',
    // nameTm: 'Aýallaryň arasynda Türkmenistanyň reýtingi',
    nameRu: 'Женщины',
    nameTm: 'Aýal-gyzlar',
    img: '/images/home/rating-2.png',
    url: 'https://ratings.fide.com/rankings.phtml?continent=0&country=TKM&rating=standard&gender=F&age1=0&age2=0&period=2024-10-01&period2=1',
  },
  {
    // nameRu: 'Рейтинг Туркменистана среди юниоров',
    // nameTm: 'Ýetginjekleriň arasynda Türkmenistanyň reýtingi',
    nameRu: 'Юниоры',
    nameTm: 'Ýetginjekler',
    img: '/images/home/rating-3.png',
    url: 'https://ratings.fide.com/rankings.phtml?continent=0&country=TKM&rating=standard&gender=&age1=0&age2=20&period=2024-10-01&period2=1',
  },
];

const HomeRating = () => {
  const sectionTitle = useExtractSectionTitle('players_rating_section_title');
  const activeLang = useZusLang().activeLang;

  const { data } = useGetRating();

  console.log(data);

  return (
    <section>
      <Container className="overflow-auto">
        <SectionHeader
          title={sectionTitle}
          icon="/images/home/chess-crown.svg"
          className="font-[bitter]"
        />

        <div className="md:flex hidden items-center w-full gap-10 font-[bitter]">
          {rating.map((item, i) => (
            <Link target="_blank" to={item.url} className="w-full">
              <motion.div
                key={i}
                className="p-5 border flex items-center gap-5 border-LBROWN rounded-sm w-full"
                initial={{
                  translateY: '25%',
                  opacity: 0,
                }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
                <img src={item.img} alt="chess-icon" />
                <h4 className="leading-[150%] text-[30px] font-semibold">
                  {activeLang.value === 'ru' ? item.nameRu : item.nameTm}
                </h4>
              </motion.div>
            </Link>
          ))}
        </div>

        <Slider
          className="md:hidden"
          itemClass="basis-[90%]"
          array={rating}
          renderElement={(item, i) => (
            <motion.div
              key={i}
              className="p-5 border flex items-center md:gap-5 gap-2 border-LBROWN rounded-sm"
              initial={{
                translateY: '25%',
                opacity: 0,
              }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
              <img src={item.img} alt="chess-icon" className="w-[64px] h-[72px]" />
              <h4 className="leading-[150%] md:text-[20px] text-[14px] font-semibold">
                {activeLang.value === 'ru' ? item.nameRu : item.nameTm}
              </h4>
            </motion.div>
          )}
        />
      </Container>
    </section>
  );
};

export default HomeRating;
