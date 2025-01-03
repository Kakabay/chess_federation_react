import { motion } from "framer-motion";
import Container from "../layout/container";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useGetVideos } from "@/lib/hooks/useGetVideos";
import { HOSTING } from "@/lib/constants";
import useExtractSectionTitle from "@/lib/hooks/useExtractSectionTitle";
import { cn } from "@/lib/utils";

const HomeGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  // const [videoSiPlaying, setVideoIsPlaying] = useState(false);

  const sectionTitle = useExtractSectionTitle("video_gallery_section_title");

  const { data } = useGetVideos();

  console.log(data);

  useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="bg-[#A6785E] text-white py-4 md:py-10 md:h-[750px] h-[290px] overflow-hidden pb-10">
      <Container className="flex flex-col gap-2 md:gap-10">
        <motion.h2
          className="h2 !text-white font-[open_sans]"
          initial={{
            translateY: "25%",
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        >
          {sectionTitle}
        </motion.h2>

        <div className="md:flex hidden gap-5">
          {data && (
            <motion.div
              className="flex-auto relative h-[590px] w-full bg-black md:block hidden overflow-hidden cursor-pointer"
              initial={{
                translateY: "25%",
                opacity: 0,
              }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.55, 0, 0.1, 1],
              }}
            >
              <video
                poster={HOSTING + data[selectedVideo].poster}
                src={HOSTING + data[selectedVideo].video}
                controls
                className="size-full"
              />
            </motion.div>
          )}

          {data && (
            <Carousel orientation="vertical" className="flex-[0_1_350px]">
              <CarouselContent className="h-[590px]">
                {data.map(
                  (video, i) =>
                    i !== selectedVideo && (
                      <CarouselItem
                        key={video.id}
                        className={cn(
                          "cursor-pointer basis-[160px] h-[160px] bg-black",
                          data.length !== i + 1 && "mb-4"
                        )}
                      >
                        <video
                          poster={HOSTING + video.poster}
                          src={HOSTING + video.video}
                          className="w-full h-full object-cover"
                          onClick={() => setSelectedVideo(i)}
                        />
                      </CarouselItem>
                    )
                )}
              </CarouselContent>

              <CarouselPrevious className="nav-btn absolute top-5 -mt-10" />
              <CarouselNext className="nav-btn absolute -bottom-2" />
            </Carousel>
          )}
        </div>

        {data && (
          <Carousel className="md:hidden" setApi={setApi}>
            <CarouselContent>
              {data.map((video, i) => (
                <CarouselItem key={video.id} className="mr-5 cursor-pointer">
                  <motion.div
                    className="h-full relative"
                    initial={{
                      translateY: "25%",
                      opacity: 0,
                    }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.55, 0, 0.1, 1],
                    }}
                  >
                    <div className="h-[185px]">
                      <video
                        poster={HOSTING + video.poster}
                        src={HOSTING + video.video}
                        controls
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <div className="absolute top-2 left-2 leading-[150%] text-[14px] font-semibold">
                    Название видео
                  </div> */}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-2">
              {data.map((video, i) => (
                <div
                  onClick={() => api?.scrollTo(i)}
                  key={video.id}
                  className={clsx(
                    "w-[12px] h-[12px] border border-white rounded-full cursor-pointer",
                    {
                      "bg-white": i + 1 === current,
                    }
                  )}
                />
              ))}
            </div>
          </Carousel>
        )}
      </Container>
    </section>
  );
};

export default HomeGallery;
