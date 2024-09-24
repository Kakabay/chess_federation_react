import NewsCard from '@/components/shared/news-card';
import SectionHeader from '@/components/home/section-header';
import Container from '@/components/layout/container';
import useScrollToTop from '@/lib/hooks/useScrollToTop';
import { useParams } from 'react-router-dom';
import { useGetSingleNews } from '@/lib/hooks/useGetSingleNews';
import { useZusLang } from '@/zustand/use-zus-lang';
import { useGetNews } from '@/lib/hooks/useGetNews';
import Slider from '@/components/shared/slider';
import { ReactNode } from 'react';

const NewsSingle = () => {
  let { pageId } = useParams();
  const activeLang = useZusLang().activeLang;

  useScrollToTop(pageId);

  const { data: singleNewsData } = useGetSingleNews({
    pageId,
    locale: activeLang.value,
  });
  const { data: newsData } = useGetNews({
    lang: activeLang.value,
    per_page: 4,
    page: 1,
    sort: 'asc',
  });

  return (
    <main>
      <Container className="flex flex-col gap-[72px] md:gap-[200px]">
        <section className="flex flex-col gap-6 md:gap-10 items-center">
          <h1 className="h1 text-center">{singleNewsData?.data.title}</h1>
          <div className="leading-none text-GRAY1">{singleNewsData?.data.published_at}</div>
          {singleNewsData &&
            singleNewsData.data.featured_images &&
            singleNewsData.data.featured_images[0].path && (
              <div className="max-w-[1000px] w-full max-h-[500px]">
                <img
                  src={singleNewsData.data.featured_images[0].path}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

          <div
            className="w-full max-w-[800px] mx-auto flex font-medium md:font-normal flex-col gap-6 md:gap-10 font-[bitter] text-[14px] md:text-[20px] leading-[150%]"
            dangerouslySetInnerHTML={singleNewsData && { __html: singleNewsData.data.content_html }}
          />
        </section>
        <section>
          <SectionHeader title={'Последние новости'} className="md:mb-10 mb-6" />

          <div className="hidden md:flex gap-10">
            {newsData?.data.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                published_at={news.published_at}
                title={news.title}
                img={news.featured_images[0].path}
                titleClassName="h4"
                className=""
                type="small"
              />
            ))}
          </div>

          <Slider
            array={newsData?.data ? newsData.data.filter((_, i) => i < 3) : []}
            renderElement={(item, i) => (
              <NewsCard key={item.id} img={item.featured_images[0].path} type={'big'} {...item} />
            )}
          />
        </section>
      </Container>
    </main>
  );
};

export default NewsSingle;
