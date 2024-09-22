import clsx from "clsx";
import Container from "../layout/container";
import { motion } from "framer-motion";
import AchievmentCol from "./achievment-col";

export const achievmentsData = [
  {
    name: "Проведеных турниров",
    number: 47,
  },
  {
    name: "Организованных мероприятий",
    number: 47,
  },
  {
    name: "Выпущеных учеников",
    number: 432,
  },
  {
    name: "Занятых мест",
    number: 40,
  },
];

const AboutAchievments = () => {
  return (
    <>
      <motion.section
        initial={{ translateY: "20%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="h-[360px] md:block hidden relative bg-BROWN after:bg-[#533321] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[50%] after:h-full"
      >
        <Container className="flex justify-between h-full">
          {achievmentsData.map((item, i) => (
            <div
              key={i}
              className={clsx(
                "flex h-full flex-[0_1_350px] even:bg-[#533321] odd:bg-BROWN even:px-10 py-20 flex-col justify-between z-10",
                {
                  "pl-10": i === 2,
                }
              )}
            >
              <h4 className="text-[#C5BBB5]">{item.name}</h4>
              <div className="h1 !text-white">{item.number}</div>
            </div>
          ))}
        </Container>
      </motion.section>

      <section className="grid md:hidden grid-cols-2">
        <AchievmentCol odd text="Проведеных турниров" num={47} />
        <AchievmentCol even text="Организованных мероприятий" num={47} />
        <AchievmentCol even text="Выпущеных учеников" num={432} />
        <AchievmentCol odd text="Занятых мест" num={47} />
      </section>
    </>
  );
};

export default AboutAchievments;
