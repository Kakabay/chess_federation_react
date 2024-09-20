import NewsCard from '@/components/shared/news-card';
import Container from '@/components/layout/container';
import PageTitle from '@/components/shared/page-title';
import useScrollToTop from '@/lib/hooks/useScrollToTop';
import { useGetNews } from '@/lib/hooks/useGetNews';
import { useZusLang } from '@/zustand/use-zus-lang';
import { useState } from 'react';

const News = () => {
  useScrollToTop();
  const activeLang = useZusLang().activeLang;
  const [curentPage, setCurrentPage] = useState<number>(1);

  const { data: newsData } = useGetNews({
    lang: activeLang.value,
    per_page: 9,
    page: curentPage,
    sort: 'asc',
  });

  return (
    <main className="pb-[200px] pt-20 bg-PAGE_BG">
      <Container>
        <PageTitle title="Новости" />
        <div className="grid grid-cols-3 gap-10">
          {newsData?.data.map((news, i) => (
            <NewsCard
              key={news.id}
              id={news.id}
              // animationDelay={i}
              date={news.published_at}
              title={news.title}
              img={news.featured_images[0].path}
              type="big"
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default News;
