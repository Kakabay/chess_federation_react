import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useGetSlider } from '@/lib/hooks/useGetSlider';
import { useZusLang } from '@/zustand/use-zus-lang';
import { HOSTING } from '@/lib/constants';
import Container from '../layout/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';

import 'swiper/css';

const HomeSlider = () => {
  const activeLang = useZusLang((state) => state.activeLang);

  const [current, setCurrent] = useState(0);

  const { data } = useGetSlider(activeLang.value);

  console.log(data);

  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <Container className="mt-10">
      <motion.section
        className="sm:h-[620px] h-[228px]"
        initial={{
          translateY: '-10%',
          opacity: 0,
        }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          loop
          pagination={{
            clickable: true,
            type: 'bullets',
            el: '.pagination',
            bulletElement: 'div',
            bulletActiveClass: 'bullet-active',
            bulletClass: 'bullet',
          }}
          speed={1000}
          slidesPerView={1}
          className="h-full relative"
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Сохраняем экземпляр Swiper
          }}>
          {data &&
            data.map((slide) => (
              <SwiperSlide key={slide.id} className="sm:h-[620px] h-[228px] relative">
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
                        <h4 className="md:text-[22px] text-base line-clamp-4 leading-[150%] font-semibold text-white">
                          {slide.txt}
                        </h4>
                      )}
                    </div>
                  </Container>
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute z-50 pagination bottom-10 right-[7.5%] flex gap-3">
            {data &&
              data.map((slide, i) => (
                <div
                  key={slide.id}
                  className={clsx('', {
                    'bg-white bullet-active': i === current,
                    bullet: i !== current,
                  })}
                  onClick={() => {
                    swiperRef.current?.slideTo(i); // Безопасно вызываем slideTo
                  }}
                />
              ))}
          </div>{' '}
        </Swiper>
      </motion.section>
    </Container>
  );
};

export default HomeSlider;
