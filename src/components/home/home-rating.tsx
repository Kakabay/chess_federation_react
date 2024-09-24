import { motion } from 'framer-motion';
import Container from '../layout/container';
import SectionHeader from './section-header';
import Slider from '../shared/slider';

const rating = [
  {
    name: 'Рейтинг Туркменистана среди мужчин',
    img: '/images/home/rating-1.png',
  },
  {
    name: 'Рейтинг Туркменистана среди мужчин',
    img: '/images/home/rating-1.png',
  },
  {
    name: 'Рейтинг Туркменистана среди мужчин',
    img: '/images/home/rating-1.png',
  },
];

const HomeRating = () => {
  return (
    <section>
      <Container className="overflow-auto">
        <SectionHeader
          title="Рейтинг игроков"
          icon="/images/home/chess-crown.svg"
          className="font-[bitter]"
        />

        <div className="md:flex hidden items-center gap-10 font-[bitter]">
          {rating.map((item, i) => (
            <motion.div
              key={i}
              className="p-5 border flex items-center gap-5 border-LBROWN rounded-sm"
              initial={{
                translateY: '25%',
                opacity: 0,
              }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
              <img src={item.img} alt="chess-icon" />
              <h4 className="leading-[150%] text-[20px] font-semibold">{item.name}</h4>
            </motion.div>
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
                {item.name}
              </h4>
            </motion.div>
          )}
        />
      </Container>
    </section>
  );
};

export default HomeRating;
