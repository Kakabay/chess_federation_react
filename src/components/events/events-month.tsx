import Container from '../layout/container';
import EventCard from '../shared/event-card';

interface Props {
  date: string;
}

const EventsMonth = ({ date }: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-[60px] w-full">
        <div className="flex flex-col gap-[40px] w-full">
          <h2 className="h2 text-center text-BROWN leading-none">{date}</h2>
          <hr className="bg-BROWN h-[2px] w-full" />
        </div>

        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-5">
            <EventCard
              key={i}
              start={'4 марта'}
              end={'3 апреля'}
              title={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
              venue={'Шахматно-шашечная школа, г. Ашхабад'}
              line={i !== 0 ? 'top' : 'none'}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EventsMonth;
