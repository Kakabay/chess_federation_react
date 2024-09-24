import Container from '../layout/container';
import EventCard from '../shared/event-card';
import { Event } from '@/types/events.type';
import { motion } from 'framer-motion';

interface Props {
  date: string;
  eventsData: Event[];
  isCurrent: boolean;
}

const EventsMonth = ({ date, eventsData, isCurrent }: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 md:gap-[60px] w-full">
        <div className="flex flex-col gap-2 md:gap-10 w-full">
          <h2 className="h2 text-center text-BROWN leading-none">
            {/* {activeLang.value === 'tm'
              ? months.tm[+eventsData.events[0].start.slice(5, 7)]
              : activeLang.value === 'ru'
              ? months.ru[+eventsData.events[0].start.slice(5, 7)]
              : months.tm[+eventsData.events[0].start.slice(5, 7)]}{' '}
            {eventsData.events[0].start.split(' ')[0].slice(0, 4)} */}
            {date}
          </h2>
          <hr className="bg-BROWN h-[2px] w-full" />
        </div>

        {!isCurrent ? (
          <div className="flex flex-col gap-5">
            {eventsData.map((item: Event, i: number) => (
              <EventCard key={item.name} {...item} line={i !== 0 ? 'top' : 'none'} />
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
            className="flex flex-col gap-10 bg-BROWN p-6 md:p-10 rounded-[24px]">
            {eventsData.map((item: Event, i: number) => (
              <EventCard key={item.name} {...item} line={i !== 0 ? 'top' : 'none'} isCurrent />
            ))}
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default EventsMonth;
