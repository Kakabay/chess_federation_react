import { useGetNews } from '@/lib/hooks/useGetNews';
import Container from '../layout/container';
import NewsCard from '../shared/news-card';
import SectionHeader from './section-header';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import clsx from 'clsx';
import useExtractSectionTitle from '@/lib/hooks/useExtractSectionTitle';

const HomeNews = () => {
  const activeLang = useZusLang().activeLang;
  const { data: newsData } = useGetNews({
    lang: activeLang.value,
    per_page: 3,
    page: 1,
    sort: 'asc',
  });
  const sectionTitle = useExtractSectionTitle('news_section_title');

  return (
    <section>
      <Container>
        <SectionHeader
          title={sectionTitle}
          icon="/images/home/chess-tower.svg"
          link={{
            path: '/news',
            text: activeLang.value === 'ru' ? 'все новости' : 'hemme habarlar',
          }}
        />

        <div className="md:grid hidden grid-cols-3 gap-10">
          {newsData?.data.map((news, i) => (
            <NewsCard
              className="flex-[0_0_33.33333%]"
              key={news.id}
              id={news.id}
              animationDelay={i}
              published_at={news.published_at}
              title={news.title}
              img={news.featured_images[0].path}
              type="big"
            />
          ))}
        </div>

        <Carousel className="md:hidden">
          <CarouselContent>
            {newsData?.data.map((news, i) => (
              <CarouselItem
                key={news.id}
                className={clsx('', {
                  'mr-4': i + 1 !== newsData.data.length,
                })}>
                <NewsCard
                  id={news.id}
                  animationDelay={i}
                  published_at={news.published_at}
                  title={news.title}
                  img={news.featured_images[0].path}
                  type="big"
                  titleClassName="!text-[16px] !leading-[150%]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomeNews;
