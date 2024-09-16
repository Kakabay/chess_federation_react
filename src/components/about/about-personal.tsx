import Container from "../layout/container";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const personal = [
  {
    img: "/images/about/person-1.png",
    name: "Норман Ридус",
  },
  {
    img: "/images/about/person-2.png",
    name: "Хлоя Грейс Морец",
  },
  {
    img: "/images/about/person-3.png",
    name: "Мадс Миккельсен",
  },
  {
    img: "/images/about/person-2.png",
    name: "Мадс Миккельсен",
  },
  {
    img: "/images/about/person-3.png",
    name: "Мадс Миккельсен",
  },
  {
    img: "/images/about/person-1.png",
    name: "Эмма Стоун",
  },
];

const AboutPersonal = () => {
  return (
    <section>
      <Container>
        <h2 className="h2 mb-10">Сборная Туркменистана</h2>
      </Container>

      <Carousel opts={{ align: "center" }}>
        <CarouselContent>
          {personal.map((item, i) => (
            <CarouselItem
              key={i}
              className="p-5 basis-[440px] border border-LBROWN rounded-sm mr-10 flex flex-col gap-5"
            >
              <img src={item.img} alt="person" className="" />
              <h3 className="h3 font-[bitter]">{item.name}</h3>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AboutPersonal;
