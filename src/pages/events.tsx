import EventsHero from '@/components/events/events-hero';
import EventsMonth from '@/components/events/events-month';
import { useGetEvents } from '@/lib/hooks/useGetEvents';
import useScrollToTop from '@/lib/hooks/useScrollToTop';
import { useZusLang } from '@/zustand/use-zus-lang';

const Events = () => {
  const activeLang = useZusLang().activeLang;

  useScrollToTop();
  const { data } = useGetEvents(activeLang.value);

  console.log(data);

  return (
    <main className="pt-20 bg-PAGE_BG pb-[200px] flex flex-col gap-[200px]">
      <EventsHero />

      <section className="flex flex-col gap-[120px]">
        {data?.map((item, i) => (
          <EventsMonth
            key={item.id}
            date={item.header}
            eventsData={item.events}
            isCurrent={i === 0 ? true : false}
          />
        ))}
      </section>
    </main>
  );
};

export default Events;
