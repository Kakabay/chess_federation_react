import clsx from 'clsx';
import Container from '../layout/container';

export const achievmentsData = [
  {
    name: 'Проведеных турниров',
    number: 47,
  },
  {
    name: 'Организованных мероприятий',
    number: 47,
  },
  {
    name: 'Выпущеных учеников',
    number: 432,
  },
  {
    name: 'Занятых мест',
    number: 40,
  },
];

const AboutAchievments = () => {
  return (
    <section className="h-[360px] relative bg-BROWN after:bg-[#533321] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[50%] after:h-full">
      <Container className="flex justify-between h-full">
        {achievmentsData.map((item, i) => (
          <div
            key={i}
            className={clsx(
              'flex h-full flex-[0_1_350px] even:bg-[#533321] odd:bg-BROWN even:px-10 py-20 flex-col justify-between z-10',
              {
                'pl-10': i === 2,
              },
            )}>
            <h4 className="text-[#C5BBB5]">{item.name}</h4>
            <div className="h1 !text-white">{item.number}</div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default AboutAchievments;
