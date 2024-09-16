import { motion } from 'framer-motion';
import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import SectionHeader from './section-header';

const HomePartners = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Партнёры"
          icon="/images/home/chess-elephant.svg"
          className="font-[bitter] mb-10"
        />

        <Carousel className="flex items-center">
          <CarouselContent>
            {[...Array(12)].map((_, i) => (
              <CarouselItem key={i} className="mr-10 pl-0 basis-[200px]">
                <motion.div
                  initial={{
                    translateY: '25%',
                    opacity: 0,
                  }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
                  <img src="/" alt="partner icon" className="w-[200px] h-[100px] object-cover" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomePartners;
