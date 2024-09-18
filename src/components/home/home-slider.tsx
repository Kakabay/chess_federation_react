import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useState, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import clsx from 'clsx';
import { useGetSlider } from '@/hooks/useGetHome';
import { useZusLang } from '@/zustand/use-zus-lang';

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
      className="h-[850px]"
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
            data.map((_, i) => (
              <CarouselItem key={i} className="">
                <img
                  src="/images/home/main-banner-slider.png"
                  // src={data ? data[0].img : ''}

                  alt="slider image"
                  className="w-full mx-auto object-cover object-top"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-[13.5%] flex gap-3 ">
          {[...Array(count)].map((_, i) => (
            <div
              onClick={() => api?.scrollTo(i)}
              key={i}
              className={clsx('w-[12px] h-[12px] border border-white rounded-full cursor-pointer', {
                'bg-white': i + 1 === current,
              })}
            />
          ))}
        </div>
      </Carousel>
    </motion.section>
  );
};

export default HomeSlider;
