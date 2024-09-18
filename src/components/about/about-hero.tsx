import Container from '../layout/container';
import PageTitle from '../shared/page-title';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section>
      <Container>
        <PageTitle title="Немного о нас" />

        <motion.div
          initial={{
            translateY: '50%',
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
          className="flex items-start leading-[150%] justify-end w-full gap-10 mb-10">
          <p className="w-[400px]">
            Шахматная федерация - это организация, которая занимается развитием и популяризацией
            шахмат в стране или регионе.
          </p>
          <p className="w-[400px]">
            Она проводит различные мероприятия, такие как турниры, чемпионаты, обучающие курсы и
            семинары, а также участвует в международных соревнованиях.
          </p>
        </motion.div>
        <div className="w-full max-h-[540px]">
          <motion.img
            initial={{
              translateY: '50%',
              opacity: 0,
            }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
            src="/images/about/about.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
