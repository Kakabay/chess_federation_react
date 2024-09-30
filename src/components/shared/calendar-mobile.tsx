import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Calendar } from '../ui/calendar';
import { useEffect, useState } from 'react';
import { enUS, ru } from 'date-fns/locale';
import { useZusLang } from '@/zustand/use-zus-lang';
import { useFormatDate } from '@/lib/hooks/useFormatDate';
import { useGetEventsByDate } from '@/lib/hooks/useGetEventsByDate';
import { useZusDate } from '@/zustand/use-zus-date';

interface Props {
  calendar: boolean;
  setCalendar: (val: boolean) => void;
}

const CalendarMobile = ({ calendar, setCalendar }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const setZusDate = useZusDate().setDate;
  const activeLang = useZusLang().activeLang;

  useEffect(() => {
    setZusDate(date ? date : new Date());
  }, [date]);

  const { data } = useGetEventsByDate({ date: useFormatDate(date ?? new Date()) });
  return (
    <motion.div
      initial={{ translateY: '-100%', opacity: 0 }}
      animate={calendar ? { translateY: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
      className="bg-white absolute z-50 px-4 top-0 right-0 left-0 bottom-0 over pb-8 lg:hidden block">
      <div className="flex items-center justify-end mb-20 mt-4">
        <X className="absolute top-3 right-4" size={24} onClick={() => setCalendar(false)} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className=""
          locale={activeLang.value === 'tm' ? enUS : ru}
        />
        <div className="relative w-full">
          {data && data.data.ongoing_events.length !== 0
            ? data.data.ongoing_events.map((item) => (
                <motion.div
                  initial={{
                    translateY: '50%',
                    opacity: 0,
                  }}
                  animate={{ translateY: 0, opacity: 1 }}
                  exit={{
                    translateY: '50%',
                    opacity: 0,
                  }}
                  transition={{ delay: 0.2, duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
                  className=" w-full bg-BROWN  text-white absolute top-[100%] z-50">
                  <div className="flex flex-col gap-[20px] relative h-full w-full p-[20px]">
                    <p className="text-[#EBEBEB] text[14px] leading-[100%] ">
                      {item.start_event_date.split(' ')[0]} — {item.end_event_date.split(' ')[0]}
                    </p>

                    <h2 className="text-[20px] leading-[130%] font-semibold">
                      {item.name_of_event}
                    </h2>
                    <p className="text-[#EBEBEB] text[14px] leading-[100%] ">{item.place}</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[5px] right-[5px] cursor-pointer"
                      onClick={() => setDate(undefined)}>
                      <path
                        d="M8.38198 17.025L6.97498 15.625L10.593 12L6.97498 8.4L8.38198 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625L15.593 17.025L12 13.41L8.38198 17.025Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))
            : null}
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarMobile;
