import NewsCard from "@/components/shared/news-card";
import Container from "@/components/layout/container";
import PageTitle from "@/components/shared/page-title";
import useScrollToTop from "@/lib/hooks/useScrollToTop";
import { useGetNews } from "@/lib/hooks/useGetNews";
import { useZusLang } from "@/zustand/use-zus-lang";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const News = () => {
  useScrollToTop();
  const activeLang = useZusLang((state) => state.activeLang);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: newsData } = useGetNews({
    lang: activeLang.value,
    per_page: 9,
    page: currentPage,
  });

  const paginationNextClickHandler = (lastPage: number) => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const paginationPrevClickHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (!newsData) {
    return (
      <div className="h-[50vh] w-full flex justify-center items-center">
        <h1 className="text-2xl text-BROWN font-semibold">Loading...</h1>
      </div>
    );
  }

  const pages = new Array(newsData.meta.last_page).fill(" ");

  const showLeftEllipsis = currentPage > 6 && newsData.meta.last_page > 12;
  const showRightEllipsis =
    newsData.meta.last_page > 12 && currentPage < newsData.meta.last_page - 5;

  const title =
    activeLang.value === "ru"
      ? "Новости"
      : activeLang.value === "tm"
      ? "Habarlar"
      : "News";

  return (
    <main className="bg-PAGE_BG">
      <Container>
        <div className="flex flex-col gap-4">
          <PageTitle title={title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
            {newsData?.data.map((news, i) => (
              <NewsCard
                key={news.id}
                id={news?.id}
                // animationDelay={i}
                published_at={news?.published_at}
                title={news?.title}
                img={news?.featured_images?.[0]?.path}
                type="big"
              />
            ))}
          </div>
          {newsData && (
            <Pagination>
              <PaginationContent className="flex gap-[12px] items-center justify-center ">
                {currentPage > 1 && (
                  <PaginationItem className="block ">
                    <PaginationPrevious
                      className={`hover:bg-transparent cursor-pointer`}
                      onClick={paginationPrevClickHandler}
                    />
                  </PaginationItem>
                )}
                {showLeftEllipsis && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {pages.map((_, i) => (
                  <PaginationItem key={i} className="border-none outline-none">
                    <PaginationLink
                      isActive={currentPage === i + 1 ? true : false}
                      onClick={() => setCurrentPage(i + 1)}
                      className="text-[16px] w-[24px] h-[24px] p-[10px] cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {showRightEllipsis && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {currentPage < newsData.meta.last_page && (
                  <PaginationItem>
                    <PaginationNext
                      className={`hover:bg-transparent cursor-pointer`}
                      onClick={() =>
                        paginationNextClickHandler(newsData.meta.last_page)
                      }
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </Container>
    </main>
  );
};

export default News;
