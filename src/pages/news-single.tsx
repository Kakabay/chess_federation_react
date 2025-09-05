import NewsCard from "@/components/shared/news-card";
import SectionHeader from "@/components/home/section-header";
import Container from "@/components/layout/container";
import useScrollToTop from "@/lib/hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import { useGetSingleNews } from "@/lib/hooks/useGetSingleNews";
import { useZusLang } from "@/zustand/use-zus-lang";
import { useGetNews } from "@/lib/hooks/useGetNews";

import { array } from "zod";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useExtractSectionTitle from "@/lib/hooks/useExtractSectionTitle";

const NewsSingle = () => {
  const { pageId } = useParams();
  const activeLang = useZusLang().activeLang;

  useScrollToTop(pageId);
  const newsSectionTitle = useExtractSectionTitle(
    "news_single_page_other_news_section_title"
  );

  const { data: singleNewsData } = useGetSingleNews({
    pageId,
    locale: activeLang.value,
  });
  const { data: newsData } = useGetNews({
    lang: activeLang.value,
    per_page: 4,
    page: 1,
  });

  return (
    <main>
      <Container className="flex flex-col gap-[72px] md:gap-[200px]">
        <section className="flex flex-col gap-6 md:gap-10 items-center">
          <h1 className="h1 text-center">{singleNewsData?.data.title}</h1>
          <div className="leading-none text-GRAY1">
            {singleNewsData?.data.published_at}
          </div>
          {singleNewsData &&
            singleNewsData?.data?.featured_images &&
            singleNewsData?.data?.featured_images[0].path && (
              <div className="max-w-[1000px] w-full max-h-[500px] h-full overflow-hidden">
                <img
                  src={singleNewsData.data.featured_images[0].path}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

          <div
            className="news-inner w-full max-w-[800px] items-center mx-auto flex font-medium md:font-normal flex-col gap-6 md:gap-10 font-[bitter] text-[14px] md:text-[20px] leading-[150%]"
            dangerouslySetInnerHTML={
              singleNewsData && {
                __html: singleNewsData?.data?.content_html ?? "",
              }
            }
          />
        </section>
        {newsData && (
          <section>
            <SectionHeader title={newsSectionTitle} className="md:mb-10 mb-6" />

            <div className="hidden md:flex gap-10">
              {newsData.data.map((news, i) => (
                <NewsCard
                  key={i}
                  id={news.id}
                  published_at={news.published_at}
                  title={news.title}
                  img={news.featured_images[0].path}
                  titleClassName="h4"
                  type="small"
                />
              ))}
            </div>

            <div className="block md:hidden">
              <Carousel>
                <CarouselContent>
                  {newsData.data.map((news, i) => (
                    <CarouselItem
                      key={i}
                      className={cn({
                        "mr-4 md:mr-6": i + 1 !== array.length,
                      })}
                    >
                      <NewsCard
                        id={news.id}
                        published_at={news.published_at}
                        title={news.title}
                        img={news.featured_images[0].path}
                        titleClassName="h4"
                        className=""
                        type="big"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        )}
      </Container>
    </main>
  );
};

export default NewsSingle;
