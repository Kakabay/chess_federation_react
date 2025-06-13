import Container from "../layout/container";
import EventCard from "../shared/event-card";
import { Event } from "@/types/events.type";

interface Props {
  title: string;
  eventsData: Event[];
  isCurrent: boolean;
}

const EventsMonth = ({ title, eventsData, isCurrent }: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 md:gap-[60px] w-full">
        <div className="flex flex-col gap-2 md:gap-10 w-full">
          {isCurrent ? (
            <div className="flex gap-[24px] items-center justify-center ">
              <div className="w-3 h-3 bg-BROWN rounded-full flash ease-TRANSITIOM_ONE transition-all"></div>
              <h2 className="h2 text-center text-BROWN leading-none">
                {/* {activeLang.value === 'tm'
              ? months.tm[+eventsData.events[0].start.slice(5, 7)]
              : activeLang.value === 'ru'
              ? months.ru[+eventsData.events[0].start.slice(5, 7)]
              : months.tm[+eventsData.events[0].start.slice(5, 7)]}{' '}
            {eventsData.events[0].start.split(' ')[0].slice(0, 4)} */}
                {title}
              </h2>
              <div className="w-3 h-3 bg-BROWN rounded-full flash ease-TRANSITIOM_ONE transition-all"></div>
            </div>
          ) : (
            <h2 className="h2 text-center text-BROWN leading-none">
              {/* {activeLang.value === 'tm'
              ? months.tm[+eventsData.events[0].start.slice(5, 7)]
              : activeLang.value === 'ru'
              ? months.ru[+eventsData.events[0].start.slice(5, 7)]
              : months.tm[+eventsData.events[0].start.slice(5, 7)]}{' '}
            {eventsData.events[0].start.split(' ')[0].slice(0, 4)} */}
              {title}
            </h2>
          )}
          <hr className="bg-BROWN h-[3px] w-full" />
        </div>

        <div className="flex flex-col items-center gap-[64px] w-full">
          {eventsData.map((item: Event, i: number) => (
            <EventCard
              key={item.id}
              end={item.end_event_date}
              start={item.start_event_date}
              name={item.name_of_event}
              place={item.place}
              line={i !== 0 ? "top" : "none"}
              link={item.link}
            />
          ))}
        </div>

        {/* {!isCurrent ? (
          <div className="flex flex-col items-center gap-5 w-full">
            {eventsData.map((item: Event, i: number) => (
              <EventCard
                key={item.id}
                end={item.end_event_date}
                start={item.start_event_date}
                name={item.name_of_event}
                place={item.place}
                line={i !== 0 ? 'top' : 'none'}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{
              translateY: '50%',
              opacity: 0,
            }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
            className="flex flex-col gap-10 bg-BROWN p-6 md:p-10 rounded-[24px] w-full lg:w-[952px]">
            {eventsData.map((item: Event, i: number) => (
              <EventCard
                key={item.id}
                line={i !== 0 ? 'top' : 'none'}
                end={item.end_event_date}
                start={item.start_event_date}
                name={item.name_of_event}
                place={item.place}
                isCurrent
              />
            ))}
          </motion.div>
        )} */}
      </div>
    </Container>
  );
};

export default EventsMonth;
