import Container from '../layout/container';
import PageTitle from '../shared/page-title';

const AboutHero = () => {
  return (
    <section>
      <Container>
        <PageTitle title="Немного о нас" />

        <div className="flex items-start leading-[150%] justify-end w-full gap-10 mb-10">
          <p className="w-[400px]">
            Шахматная федерация - это организация, которая занимается развитием и популяризацией
            шахмат в стране или регионе.
          </p>
          <p className="w-[400px]">
            Она проводит различные мероприятия, такие как турниры, чемпионаты, обучающие курсы и
            семинары, а также участвует в международных соревнованиях.
          </p>
        </div>
        <div className="w-full max-h-[540px]">
          <img src="/images/about/about.png" alt="" className="w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
