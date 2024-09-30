import EventsHero from '@/components/events/events-hero';
import EventsMonth from '@/components/events/events-month';
import useExtractSectionTitle from '@/lib/hooks/useExtractSectionTitle';
import { useGetCurrentDate } from '@/lib/hooks/useGetCurrentDate';
import { useGetEventsByDate } from '@/lib/hooks/useGetEventsByDate';
import useScrollToTop from '@/lib/hooks/useScrollToTop';

const Events = () => {
  useScrollToTop();
  const currentDate = useGetCurrentDate();
  const { data } = useGetEventsByDate({ date: currentDate });
  const ongoingSectionTitle = useExtractSectionTitle('ongoing_events_section_title');
  const futureSectionTitle = useExtractSectionTitle('future_events_section_title');
  const pastSectionTitle = useExtractSectionTitle('past_events_section_title');

  return (
    <main className="flex flex-col gap-[72px] md:gap-[200px]">
      <EventsHero />

      <section className="flex flex-col gap-[72px] md:gap-[120px]">
        {data && data.data.ongoing_events.length !== 0 ? (
          <EventsMonth
            isCurrent={true}
            eventsData={data.data.ongoing_events}
            title={ongoingSectionTitle}
          />
        ) : null}
        {data && data.data.future_events.length !== 0 ? (
          <EventsMonth
            isCurrent={false}
            eventsData={data.data.future_events}
            title={futureSectionTitle}
          />
        ) : null}
        {data && data.data.past_events.length !== 0 ? (
          <EventsMonth
            isCurrent={false}
            eventsData={data.data.past_events}
            title={pastSectionTitle}
          />
        ) : null}
      </section>
    </main>
  );
};

export default Events;
