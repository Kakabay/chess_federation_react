import Container from '../layout/container';
import { Calendar } from '../ui/calendar';
import { Separator } from '../ui/separator';
import EventCard from './event-card';
import SectionHeader from './section-header';
import { ru } from 'date-fns/locale';

const HomeEvents = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Предстоящие события"
          icon="/images/home/chess-horse.svg"
          link={{ text: 'все события', path: '' }}
          titleClassName="font-[bitter]"
          className="mb-10"
        />

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-10 max-w-[952px]">
            {[...Array(3)].map((_, i) => (
              <>
                <EventCard
                  key={i}
                  start={'4 марта'}
                  end={'3 апреля'}
                  title={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
                  venue={'Шахматно-шашечная школа, г. Ашхабад'}
                />
                {i < 3 - 1 && <Separator />}
              </>
            ))}
          </div>

          <Calendar className="w-[350px]" locale={ru} />
        </div>
      </Container>
    </section>
  );
};

export default HomeEvents;
