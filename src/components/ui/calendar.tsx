import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useFormatDate } from '@/lib/hooks/useFormatDate';
import { useGetEventsByDate } from '@/lib/hooks/useGetEventsByDate';
import { useZusDate } from '@/zustand/use-zus-date';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const zusDate = useZusDate().date;
  const zusSetDate = useZusDate().setDate;

  const { data } = useGetEventsByDate({ date: useFormatDate(zusDate) });
  console.log(props);

  return (
    <motion.div
      initial={{
        translateY: '50%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3 overflow-visible', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-[24px] first-letter:uppercase leading-none font-semibold',
          nav: 'space-x-1 flex items-center',
          nav_button: cn('h-7 w-7 bg-transparent p-0 focus:outline-none hover:border-transparent'),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse mx-auto',
          head_row: 'flex gap-4 md:gap-5 text-[18px] font-semibold mt-10',
          head_cell: 'first-letter:uppercase rounded-md w-9 font-normal text-[18px] text-BLACK ',
          row: 'flex w-full mt-[18px] gap-4 md:gap-5',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            buttonVariants({ variant: 'default' }),
            'h-10 w-10 !p-2 cursor-pointer bg-transparent transition-all rounded-full text-[18px] text-BLACK font-normal aria-selected:opacity-100 hover:border-BROWN',
          ),
          day_range_end: 'day-range-end',
          day_selected: '!bg-BROWN text-white bg-primary focus:text-primary-foreground',
          day_today: '!bg-LBROWN text-white',
          day_outside:
            'day-outside text-muted-foreground hidden pointer-events-none aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6 stroke-BLACK " />,
          IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6 stroke-BLACK" />,
          // day: (props) => (
          //   <div className="relative overflow-visible">
          //     {/* {String(props.date.getDate()).padStart(2, '0')} */}
          //     {data && data.data.ongoing_events.length !== 0
          //       ? data.data.ongoing_events.map((item) => (
          //           <motion.div
          //             initial={{
          //               translateY: '50%',
          //               opacity: 0,
          //             }}
          //             animate={{ translateY: 0, opacity: 1 }}
          //             exit={{
          //               translateY: '50%',
          //               opacity: 0,
          //             }}
          //             transition={{ delay: 0.2, duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
          //             className=" w-full bg-BROWN  text-white absolute top-[100%] ">
          //             <div className="flex flex-col gap-[20px] relative h-full w-full p-[20px]">
          //               <p className="text-[#EBEBEB] text[14px] leading-[100%] ">
          //                 {item.start_event_date.split(' ')[0]} —{' '}
          //                 {item.end_event_date.split(' ')[0]}
          //               </p>

          //               <h2 className="text-[20px] leading-[130%] font-semibold">
          //                 {item.name_of_event}
          //               </h2>
          //               <p className="text-[#EBEBEB] text[14px] leading-[100%] ">{item.place}</p>
          //               <svg
          //                 width="24"
          //                 height="24"
          //                 viewBox="0 0 24 24"
          //                 fill="none"
          //                 xmlns="http://www.w3.org/2000/svg"
          //                 className="absolute top-[5px] right-[5px] cursor-pointer"
          //                 // onClick={() => setDate(undefined)}
          //               >
          //                 <path
          //                   d="M8.38198 17.025L6.97498 15.625L10.593 12L6.97498 8.4L8.38198 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625L15.593 17.025L12 13.41L8.38198 17.025Z"
          //                   fill="white"
          //                 />
          //               </svg>
          //             </div>
          //           </motion.div>
          //         ))
          //       : null}
          //   </div>
          // ),
          // DayContent: (props) => (
          //   <div className="relative">
          //     <div>{String(props.date.getDate()).padStart(2, '0')}</div>
          //     {data && data.data.ongoing_events.length !== 0
          //       ? data.data.ongoing_events.map((item) => (
          //           <motion.div
          //             initial={{
          //               translateY: '50%',
          //               opacity: 0,
          //             }}
          //             animate={{ translateY: 0, opacity: 1 }}
          //             exit={{
          //               translateY: '50%',
          //               opacity: 0,
          //             }}
          //             transition={{ delay: 0.2, duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
          //             className=" w-full bg-BROWN  text-white absolute top-[100%] z-50">
          //             <div className="flex flex-col gap-[20px] relative h-full w-full p-[20px]">
          //               <p className="text-[#EBEBEB] text[14px] leading-[100%] ">
          //                 {item.start_event_date.split(' ')[0]} —{' '}
          //                 {item.end_event_date.split(' ')[0]}
          //               </p>

          //               <h2 className="text-[20px] leading-[130%] font-semibold">
          //                 {item.name_of_event}
          //               </h2>
          //               <p className="text-[#EBEBEB] text[14px] leading-[100%] ">{item.place}</p>
          //               <svg
          //                 width="24"
          //                 height="24"
          //                 viewBox="0 0 24 24"
          //                 fill="none"
          //                 xmlns="http://www.w3.org/2000/svg"
          //                 className="absolute top-[5px] right-[5px] cursor-pointer"
          //                 onClick={() => undefined}>
          //                 <path
          //                   d="M8.38198 17.025L6.97498 15.625L10.593 12L6.97498 8.4L8.38198 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625L15.593 17.025L12 13.41L8.38198 17.025Z"
          //                   fill="white"
          //                 />
          //               </svg>
          //             </div>
          //           </motion.div>
          //         ))
          //       : null}
          //   </div>
          // ),
        }}
        {...props}
      />
    </motion.div>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
