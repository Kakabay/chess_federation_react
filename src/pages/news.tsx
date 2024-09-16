import NewsCard from '@/components/home/news-card';
import Container from '@/components/layout/container';
import PageTitle from '@/components/shared/page-title';
import useScrollToTop from '@/lib/hooks/useScrollToTop';

const News = () => {
  useScrollToTop();

  return (
    <main className="pb-[200px] pt-20 bg-PAGE_BG">
      <Container>
        <PageTitle title="Новости" />
        <div className="grid grid-cols-3 gap-10">
          {[...Array(9)].map((_, i) => (
            <NewsCard
              key={i}
              id={i}
              // animationDelay={i}
              date={'06.11.2023'}
              title={'Шахматная молодежь пробирается к национальному олимпу'}
              img={'/images/home/news.png'}
              type="big"
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default News;
