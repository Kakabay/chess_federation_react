import Container from '../layout/container';
import NewsCard from './news-card';
import SectionHeader from './section-header';

const HomeNews = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Новости"
          icon="/images/home/chess-tower.svg"
          link={{ path: '', text: 'все новости' }}
          className="mb-10"
        />

        <div className="flex items-center gap-10">
          {[...Array(3)].map((_, i) => (
            <NewsCard
              key={i}
              animationDelay={i}
              date={'06.11.2023'}
              title={'Шахматная молодежь пробирается к национальному олимпу'}
              img={'/images/home/news.png'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeNews;
