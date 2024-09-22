import { motion } from "framer-motion";
import Container from "../layout/container";

const EventsHero = () => {
  return (
    <section>
      <Container>
        <div>
          <div className="max-h-[600px] max-w-[600px] mx-8 md:mx-auto relative overflow-hidden">
            <motion.div
              initial={{
                height: "100%",
              }}
              whileInView={{ height: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.55, 0, 0.1, 1],
              }}
              className="w-full h-full absolute px-8 right-0 bottom-0 bg-PAGE_BG z-20"
            ></motion.div>
            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.55, 0, 0.1, 1],
              }}
              className="w-full h-full absolute right-0 top-0 bg-gradient-to-b from-[#a6785e00] to-[#A6785E] opacity-20 z-10"
            />
            <motion.img
              src="/images/events/1.png"
              alt=""
              className="w-full h-full object-cover"
              initial={{
                scale: 1.5,
              }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.55, 0, 0.1, 1],
              }}
            />
          </div>
          <motion.div
            initial={{
              translateY: "25%",
              opacity: 0,
            }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
            className="flex flex-col gap-4 md:gap-5 -mt-4 md:-mt-10 z-50"
          >
            <h1 className="md:text-[109px] text-[32px] font-[bitter] text-BROWN uppercase font-bold leading-[110%] z-20 text-center">
              Турниры и события
            </h1>
            <div className="text-center text-BROWN">
              Список предстоящих шахматных событий в Туркменистане
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EventsHero;
