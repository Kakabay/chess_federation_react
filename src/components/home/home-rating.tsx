import { motion } from 'framer-motion';
import Container from '../layout/container';
import SectionHeader from './section-header';

const HomeRating = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Рейтинг игроков"
          icon="/images/home/chess-crown.svg"
          className="mb-10 font-[bitter]"
        />

        <div className="flex items-center gap-10 font-[bitter]">
          {[...Array(3)].map((_, i) => (
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
              <img src="/images/home/rating-1.png" alt="chess-icon" />
              <h4 className="leading-[150%] text-[20px] font-semibold">
                Рейтинг Туркменистана среди мужчин
              </h4>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeRating;
