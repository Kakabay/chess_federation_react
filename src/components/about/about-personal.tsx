import { useGePlayers } from "@/lib/hooks/useGetPlayers";
import Container from "../layout/container";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { HOSTING } from "@/lib/constants";
import useExtractSectionTitle from "@/lib/hooks/useExtractSectionTitle";

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
  const { data } = useGePlayers();
  const sectionTitle = useExtractSectionTitle("players_section_title");

  return (
    <section>
      <Container className="!overflow-visible">
        <h2 className="h2 md:mb-10 mb-6">{sectionTitle}</h2>
        {data && (
          <Carousel className="overflow-visible">
            <CarouselContent className="!overflow-visible" isVisible={true}>
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:p-5 p-4 mr-4 basis-[93%]  md:basis-[440px] border border-LBROWN rounded-sm md:mr-10 flex flex-col gap-5"
                >
                  <img src={HOSTING + item.img} alt={item.name} className="" />
                  <h3 className="h3 font-[bitter]">{item.name}</h3>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </Container>
    </section>
  );
};

export default AboutPersonal;
