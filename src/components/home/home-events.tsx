import { useState } from 'react';
import Container from '../layout/container';
import EventCard from '../shared/event-card';
import { Calendar } from '../ui/calendar';
import { Separator } from '../ui/separator';
import SectionHeader from './section-header';
import { useGetEvents } from '@/lib/hooks/useGetEvents';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Event } from '@/types/events.type';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Button } from '../ui/button';
import CalendarMobile from '../shared/calendar-mobile';
import CalendarDesktop from '../shared/calendarDesktop';

const HomeEvents = () => {
  const activeLang = useZusLang().activeLang;
  const [calendar, setCalendar] = useState(false);

  const { data } = useGetEvents(activeLang.value);

  return (
    <>
      <CalendarMobile calendar={calendar} setCalendar={setCalendar} />
      <section>
        <Container>
          <SectionHeader
            title="Предстоящие события"
            icon="/images/home/chess-horse.svg"
            link={{ text: 'все события', path: '/events' }}
            titleClassName="font-[bitter] leading-none"
          />

          <div className="lg:flex items-start justify-between hidden">
            <div className="flex flex-col gap-10 max-w-[700px] xl:max-w-[952px]">
              {data &&
                data[1].events.map(
                  (item: Event, i: number) =>
                    i < 2 && (
                      <div key={i} className="flex flex-col gap-10">
                        <EventCard {...item} isCurrent={false} />
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
                data[1].events.map((item: Event, i: number) => (
                  <CarouselItem key={i} className="flex flex-col p-0 basis-[100%]">
                    <EventCard {...item} isCurrent={false} />
                    {i < 3 - 1 && <Separator className="lg:block hidden" />}
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
