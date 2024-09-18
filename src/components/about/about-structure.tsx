import Container from '../layout/container';
import { Facebook, Mail, Phone } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const AboutStructure = () => {
  return (
    <section>
      <Container>
        <motion.div
          initial={{
            translateY: '20%',
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
          className="flex justify-between items-start pt-10 border-t border-LBROWN">
          <h2 className="h2 font-[bitter] text-BROWN">Структура федерации</h2>

          <div className="flex flex-col gap-[50px]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={clsx('flex flex-col pb-[50px] gap-5', {
                  'border-b border-LBROWN': i < 3 - 1,
                })}>
                <div className="font-[bitter] text-DGRAY2 leading-[130%] font-semibold text-[20px]">
                  Президент Международной шахматной федерации (FIDE)
                </div>
                <h3 className="h3 font-[bitter]">Аркадий Дворкович</h3>

                <div className="flex items-center gap-2.5 text-DGRAY2 leading-none">
                  <div className="flex items-center gap-3">
                    <Mail color="#999999" />
                    fidepresident@fide.com
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone color="#999999" />
                    +993 65 65-65-65
                  </div>
                  <div className="flex items-center gap-3">
                    <Facebook color="#999999" />
                    @fidepresident
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutStructure;
