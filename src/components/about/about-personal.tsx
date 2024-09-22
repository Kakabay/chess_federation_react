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
        <h2 className="h2 md:mb-10 mb-6">Сборная Туркменистана</h2>
      </Container>

      <Carousel className="" opts={{ align: "center" }}>
        <CarouselContent className="pl-4">
          <CarouselItem className="hidden md:basis-[250px]">
            <div
              style={{
                width: "300px",
                height: "100%",
                backgroundColor: "transparent",
              }}
            ></div>
          </CarouselItem>
          {personal.map((item, i) => (
            <CarouselItem
              key={i}
              className="md:p-5 p-4 mr-4 basis-[93%] md:basis-[440px] border border-LBROWN rounded-sm md:mr-10 flex flex-col gap-5"
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
