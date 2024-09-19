import { motion } from 'framer-motion';
import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const HomeGallery = () => {
  return (
    <section className="bg-[#A6785E] text-white py-10">
      <Container className="flex flex-col gap-10">
        <motion.h2
          className="h2 !text-white font-[open_sans]"
          initial={{
            translateY: '25%',
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
          Видеогалерея
        </motion.h2>

        <motion.div
          className="max-h-[512px] relative"
          initial={{
            translateY: '25%',
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
          <video poster="/images/home/gallery-banner.png" className="h-full w-full object-cover" />
          <div className="absolute top-5 left-5 text-[24px] leading-none font-semibold">
            Название видео
          </div>
        </motion.div>

        <Carousel>
          <CarouselContent>
            {[...Array(6)].map((_, i) => (
              <CarouselItem key={i} className="h-[150px] basis-[315px] pl-0 mr-5 ">
                <motion.div
                  className="h-full relative"
                  initial={{
                    translateY: '25%',
                    opacity: 0,
                  }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
                  <video
                    poster="/images/home/gallery-banner.png"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-5 leading-none text-[18px] font-semibold">
                    Название видео
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomeGallery;
