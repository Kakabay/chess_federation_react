import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import { enUS, ru } from 'date-fns/locale';
import { useZusLang } from '@/zustand/use-zus-lang';

interface Props {
  calendar: boolean;
  setCalendar: (val: boolean) => void;
}

const CalendarMobile = ({ calendar, setCalendar }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const activeLang = useZusLang().activeLang;

  return (
    <motion.div
      initial={{ translateY: '-100%', opacity: 0 }}
      animate={calendar ? { translateY: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
      className="bg-white absolute z-50 px-4 top-0 right-0 left-0 bottom-0">
      <div className="flex items-center justify-end mb-20 mt-4">
        <X className="absolute top-3 right-4" size={24} onClick={() => setCalendar(false)} />
      </div>

      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="md:hidden"
          locale={activeLang.value === 'tm' ? enUS : ru}
        />
      </div>
    </motion.div>
  );
};

export default CalendarMobile;
