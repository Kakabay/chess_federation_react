import EventsHero from '@/components/events/events-hero';
import EventsMonth from '@/components/events/events-month';
import { useGetEvents } from '@/lib/hooks/useGetEvents';
import useScrollToTop from '@/lib/hooks/useScrollToTop';
import { useZusLang } from '@/zustand/use-zus-lang';

const Events = () => {
  const activeLang = useZusLang().activeLang;

  useScrollToTop();
  const { data } = useGetEvents(activeLang.value);

  return (
    <main className="flex flex-col gap-[72px] md:gap-[200px]">
      <EventsHero />

      <section className="flex flex-col gap-[72px] md:gap-[120px]">
        {/* {data?.map((item, i) => (
          <EventsMonth
            key={item.id}
            date={item.header}
            eventsData={item.events}
            isCurrent={i === 0 ? true : false}
          />
        ))} */}
        {data && data.map}
      </section>
    </main>
  );
};

export default Events;
