import { useState } from 'react';
import Container from '../layout/container';
import EventCard from '../shared/event-card';
import { Calendar } from '../ui/calendar';
import { Separator } from '../ui/separator';
import SectionHeader from './section-header';
import { ru } from 'date-fns/locale';

const HomeEvents = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-10">
                <EventCard
                  key={i}
                  start={'4 марта'}
                  end={'3 апреля'}
                  title={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
                  venue={'Шахматно-шашечная школа, г. Ашхабад'}
                />
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
