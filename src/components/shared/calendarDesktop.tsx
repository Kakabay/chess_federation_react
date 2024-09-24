import { motion } from 'framer-motion';
import { Calendar } from '../ui/calendar';
import { useEffect, useState } from 'react';
import { enUS, ru } from 'date-fns/locale';
import { useZusLang } from '@/zustand/use-zus-lang';

const CalendarDesktop = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const activeLang = useZusLang().activeLang;

  return (
    <motion.div
      initial={{
        translateY: '50%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="lg:block hidden"
        locale={activeLang.value === 'tm' ? enUS : ru}
      />
    </motion.div>
  );
};

export default CalendarDesktop;
