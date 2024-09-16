import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const HomeGallery = () => {
  return (
    <section className="bg-[#A6785E] text-white py-10">
      <Container className="flex flex-col gap-10">
        <h2 className="h2 !text-white">Видеогалерея</h2>

        <div className="max-h-[512px] relative">
          <video poster="/images/home/gallery-banner.png" className="h-full w-full object-cover" />
          <div className="absolute top-5 left-5 text-[24px] leading-none font-semibold">
            Название видео
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            {[...Array(6)].map((_, i) => (
              <CarouselItem key={i} className="h-[150px] basis-[315px] pl-0 mr-5 relative">
                <video
                  poster="/images/home/gallery-banner.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 leading-none text-[18px] font-semibold">
                  Название видео
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomeGallery;
