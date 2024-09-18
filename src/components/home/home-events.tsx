import { useState } from 'react';
import Container from '../layout/container';
import EventCard from '../shared/event-card';
import { Calendar } from '../ui/calendar';
import { Separator } from '../ui/separator';
import SectionHeader from './section-header';
import { ru } from 'date-fns/locale';
import { useGetEvents } from '@/hooks/useGetHome';

const HomeEvents = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data } = useGetEvents();

  console.log(data);

  return (
    <section>
      <Container>
        <SectionHeader
          title="Предстоящие события"
          icon="/images/home/chess-horse.svg"
          link={{ text: 'все события', path: '/events' }}
          titleClassName="font-[bitter] leading-none"
          className="mb-10"
        />

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-10 max-w-[952px]">
            {data &&
              data[1].events.map((item, i) => (
                <div key={i} className="flex flex-col gap-10">
                  <EventCard key={i} {...item} />
                  {i < 3 - 1 && <Separator />}
                </div>
              ))}
          </div>

          <Calendar mode="single" selected={date} onSelect={setDate} className="" locale={ru} />
        </div>
      </Container>
    </section>
  );
};

export default HomeEvents;
