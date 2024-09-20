import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useState, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import clsx from 'clsx';
import { useGetSlider } from '@/lib/hooks/useGetSlider';
import { useZusLang } from '@/zustand/use-zus-lang';
import { URL } from '@/chess.service';
import { HOSTING } from '@/lib/constants';
import Container from '../layout/container';

const HomeSlider = () => {
  const activeLang = useZusLang().activeLang;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const { data } = useGetSlider(activeLang.value);

  return (
    <motion.section
      className="max-h-[850px] !min-h-[228px]"
      initial={{
        translateY: '-10%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {data &&
            data.map((slide, i) => (
              <CarouselItem key={i} className="max-h-[850px] relative">
                <div className="w-full h-full relative">
                  {slide.header || slide.txt ? (
                    <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-SLIDER_IMAGE_GRADIENT"></div>
                  ) : null}
                  <img
                    src={HOSTING + slide.img}
                    alt="slider image"
                    className="w-full mx-auto h-full object-cover object-center"
                  />
                </div>
                <div className="absolute left-0 w-full bottom-[80px] z-10">
                  <Container>
                    <div className="flex flex-col gap-[40px] max-w-[1000px]">
                      {slide.header && (
                        <h1 className="text-[22px] md:text-[60px] leading-[110%] font-bold text-white">
                          {slide.header}
                        </h1>
                      )}
                      {slide.txt && (
                        <h4 className="text-[20px] leading-[150%] font-semibold text-white">
                          {slide.txt}
                        </h4>
                      )}
                    </div>
                  </Container>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-[13.5%] flex gap-3 ">
          {data &&
            data.map((_, i) => (
              <div
                onClick={() => api?.scrollTo(i)}
                key={i}
                className={clsx(
                  'w-[12px] h-[12px] border border-white rounded-full cursor-pointer',
                  {
                    'bg-white': i + 1 === current,
                  },
                )}
              />
            ))}
        </div>
      </Carousel>
    </motion.section>
  );
};

export default HomeSlider;
