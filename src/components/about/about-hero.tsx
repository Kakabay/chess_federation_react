import { useZusLang } from '@/zustand/use-zus-lang';
import Container from '../layout/container';
import PageTitle from '../shared/page-title';
import { motion } from 'framer-motion';
import { useGetAbout } from '@/lib/hooks/useGetAbout';
import { HOSTING } from '@/lib/constants';

const AboutHero = () => {
  const activeLang = useZusLang().activeLang;

  const { data } = useGetAbout(activeLang.value);
  return (
    <section>
      <Container>
        {data && (
          <div>
            <PageTitle title={data[0].header} className="mb-4" />

            <motion.div
              initial={{
                translateY: '50%',
                opacity: 0,
              }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
              className="flex md:flex-row flex-col md:text-[16px] text-[14px] items-start leading-[150%] justify-end w-full gap-4 md:gap-10 md:mb-10 mb-6">
              <p className="md:w-[820px]">{data[0].txt}</p>
            </motion.div>
            <div className="w-full max-h-[540px]">
              <motion.img
                initial={{
                  translateY: '50%',
                  opacity: 0,
                }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
                src={HOSTING + data[0].img}
                alt=""
                className="object-cover w-full"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default AboutHero;
