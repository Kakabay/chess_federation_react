import { useState } from 'react';
import Container from '../layout/container';
import EventCard from '../shared/event-card';
import { Separator } from '../ui/separator';
import SectionHeader from './section-header';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Button } from '../ui/button';
import CalendarMobile from '../shared/calendar-mobile';
import CalendarDesktop from '../shared/calendar-desktop';
import { useGetEventsByDate } from '@/lib/hooks/useGetEventsByDate';
import { useGetCurrentDate } from '@/lib/hooks/useGetCurrentDate';
import useExtractSectionTitle from '@/lib/hooks/useExtractSectionTitle';

const HomeEvents = () => {
  // const activeLang = useZusLang().activeLang;
  const [calendar, setCalendar] = useState(false);
  const activeLang = useZusLang().activeLang;

  const currentDate = useGetCurrentDate();
  const { data } = useGetEventsByDate({ date: currentDate, lang: activeLang.value });
  const sectionTitle = useExtractSectionTitle('future_events_section_title');

  return (
    <>
      <CalendarMobile calendar={calendar} setCalendar={setCalendar} />
      <section>
        <Container>
          {sectionTitle && (
            <SectionHeader
              title={sectionTitle}
              icon="/images/home/chess-horse.svg"
              link={{ text: 'все события', path: '/events' }}
              titleClassName="font-[bitter] leading-none"
            />
          )}

          <div className="lg:flex items-start justify-between hidden">
            <div className="flex flex-col gap-10 max-w-[700px] xl:max-w-[952px]">
              {data &&
                data.past_events.map(
                  (item, i) =>
                    i < 2 && (
                      <div key={i} className="flex flex-col gap-10">
                        <EventCard
                          end={item.end_event_date}
                          name={item.name_of_event}
                          key={item.id}
                          place={item.place}
                          start={item.start_event_date}
                          isCurrent={false}
                        />
                        {i < 3 - 1 && <Separator />}
                      </div>
                    ),
                )}
            </div>

            <CalendarDesktop />
          </div>

          <Button onClick={() => setCalendar(true)} className="lg:hidden uppercase w-full mb-6">
            ОТКРЫТЬ КАЛЕНДАРЬ
          </Button>

          <Carousel className="lg:hidden">
            <CarouselContent>
              {data &&
                data.past_events.map((item, i) => (
                  <CarouselItem key={i} className="flex flex-col p-0 basis-[100%]">
                    end={item.end_event_date}
                    name={item.name_of_event}
                    key={item.id}
                    place={item.place}
                    start={item.start_event_date}
                    isCurrent={false} {i < 3 - 1 && <Separator className="lg:block hidden" />}
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default HomeEvents;
