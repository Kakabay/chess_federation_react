import Container from '../layout/container';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export const personal = [
  {
    img: '/images/about/person-1.png',
    name: 'Норман Ридус',
  },
  {
    img: '/images/about/person-2.png',
    name: 'Хлоя Грейс Морец',
  },
  {
    img: '/images/about/person-3.png',
    name: 'Мадс Миккельсен',
  },
  {
    img: '/images/about/person-2.png',
    name: 'Мадс Миккельсен',
  },
  {
    img: '/images/about/person-3.png',
    name: 'Мадс Миккельсен',
  },
  {
    img: '/images/about/person-1.png',
    name: 'Эмма Стоун',
  },
];

const AboutPersonal = () => {
  return (
    <section>
      <Container className="!overflow-visible">
        <h2 className="h2 md:mb-10 mb-6">Сборная Туркменистана</h2>
        <Carousel className="overflow-visible">
          <CarouselContent className="!overflow-visible" isVisble={true}>
            {personal.map((item, i) => (
              <CarouselItem
                key={i}
                className="md:p-5 p-4 mr-4 basis-[93%]  md:basis-[440px] border border-LBROWN rounded-sm md:mr-10 flex flex-col gap-5">
                <img src={item.img} alt="person" className="" />
                <h3 className="h3 font-[bitter]">{item.name}</h3>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default AboutPersonal;
