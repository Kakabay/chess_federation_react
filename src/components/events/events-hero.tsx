import Container from "../layout/container";

const EventsHero = () => {
  return (
    <section>
      <Container>
        <img
          src="/images/events/1.png"
          alt=""
          className="max-h-[600px] max-w-[600px] object-cover mx-auto"
        />
        <h1 className="text-[109px] -mt-10 mb-5 font-[bitter] text-BROWN uppercase font-bold leading-[110%]">
          Предстоящие события
        </h1>
        <div className="text-center text-BROWN">
          Список предстоящих шахматных событий в Туркменистане
        </div>
      </Container>
    </section>
  );
};

export default EventsHero;
