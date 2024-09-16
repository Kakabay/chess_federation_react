import NewsCard from "@/components/home/news-card";
import Container from "@/components/layout/container";

const News = () => {
  return (
    <main className="pb-[200px]">
      <Container>
        <h1 className="h1 font-[bitter] text-BROWN my-20">Новости</h1>

        <div className="grid grid-cols-3 gap-10">
          {[...Array(9)].map((_, i) => (
            <NewsCard
              key={i}
              // animationDelay={i}
              date={"06.11.2023"}
              title={"Шахматная молодежь пробирается к национальному олимпу"}
              img={"/images/home/news.png"}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default News;
