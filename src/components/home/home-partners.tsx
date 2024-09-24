import { motion } from 'framer-motion';
import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import SectionHeader from './section-header';
import { useGetPartners } from '@/lib/hooks/useGetPartners';
import { HOSTING } from '@/lib/constants';

const HomePartners = () => {
  const { data } = useGetPartners();

  return (
    <section>
      <Container>
        <SectionHeader
          title="Партнёры"
          icon="/images/home/chess-elephant.svg"
          className="font-[bitter]"
        />

        {data && (
          <Carousel className="flex items-center">
            <CarouselContent>
              {data.map((partner, i) => (
                <CarouselItem
                  key={partner.id}
                  className="mr-10 pl-0 basis-[150px] md:basis-[200px]">
                  <motion.div
                    initial={{
                      translateY: '25%',
                      opacity: 0,
                    }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
                    className="w-[200px] h-[100px]">
                    <img
                      src={HOSTING + partner.partner}
                      alt="partner logo"
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </Container>
    </section>
  );
};

export default HomePartners;
