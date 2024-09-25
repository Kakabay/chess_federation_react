import clsx from 'clsx';
import Container from '../layout/container';
import { motion } from 'framer-motion';
import AchievmentCol from './achievment-col';
import { useGetAbout } from '@/lib/hooks/useGetAbout';
import { useZusLang } from '@/zustand/use-zus-lang';
import { Datum } from '@/types/about.type';

const AboutAchievments = () => {
  const activeLang = useZusLang().activeLang;

  const { data } = useGetAbout(activeLang.value);

  const achievementsHandler = (data: Datum[] | undefined) => {
    // Ensure the data is not undefined and contains at least one item
    if (!data || data.length === 0) return [];

    const achivmentsData = [
      {
        title: data[0].tournment_title,
        number: data[0].tournment_number,
      },
      {
        title: data[0].organisation_title,
        number: data[0].organisation_number,
      },
      {
        title: data[0].graduate_title,
        number: data[0].graduate_number,
      },
      {
        title: data[0].places_title,
        number: data[0].places_number,
      },
    ];

    return achivmentsData.filter((item) => item.title && item.number); // Filter out items where title or number are undefined/null
  };

  // Later in your component, you can map through this array:
  const achievements = achievementsHandler(data);

  console.log(achievements);

  return (
    <>
      {data && (
        <motion.section
          initial={{ translateY: '20%', opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
          className="h-[360px] md:block hidden relative bg-BROWN after:bg-[#533321] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[50%] after:h-full">
          <Container className="flex justify-between h-full">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className={clsx(
                  'flex h-full flex-[0_1_350px] even:bg-[#533321] odd:bg-BROWN even:px-10 py-20 flex-col justify-between z-10',
                  {
                    'pl-10': i === 2,
                  },
                )}>
                <h4 className="text-[#C5BBB5]">{item.title}</h4>
                <div className="h1 !text-white">{item.number}</div>
              </div>
            ))}
          </Container>
        </motion.section>
      )}

      {data && (
        <section className="grid md:hidden grid-cols-2">
          {achievements.map((item, i) => (
            <AchievmentCol odd={i % 2 === 0 ? false : true} text={item.title} num={item.number} />
          ))}
        </section>
      )}
    </>
  );
};

export default AboutAchievments;
