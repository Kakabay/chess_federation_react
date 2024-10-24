import { motion } from 'framer-motion';
import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import SectionHeader from './section-header';
import { useGetPartners } from '@/lib/hooks/useGetPartners';
import { HOSTING } from '@/lib/constants';
import useExtractSectionTitle from '@/lib/hooks/useExtractSectionTitle';

const HomePartners = () => {
  const { data } = useGetPartners();
  const sectionTitle = useExtractSectionTitle('partners_section_title');

  return (
    <section>
      <Container>
        <SectionHeader
          title={sectionTitle}
          icon="/images/home/chess-elephant.svg"
          className="font-[bitter]"
        />

        <Carousel className="flex items-center" opts={{ skipSnaps: true, dragFree: false }}>
          <CarouselContent>
            {data &&
              data.map((partner, i) => (
                <CarouselItem
                  key={i}
                  className="mr-10 pl-0 basis-[150px] md:basis-[200px]  h-[100px]">
                  <img
                    src={HOSTING + partner.partner}
                    alt={partner.note}
                    className="h-full w-full object-contain"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomePartners;
